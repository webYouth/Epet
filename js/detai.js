$('.nav-cont').hover(function(){
	$(this).find('ul').css('display','block');
},function(){
	$(this).find('ul').css('display','none');
});
$('.right-nav a').click(function(){
	$(this).addClass('hov');
	$(this).siblings().removeClass('hov');
	$('.multi-content .jj').eq($(this).index()).css('display','block');
	$('.multi-content .jj').eq($(this).index()).siblings().css('display','none');
});
$(window).scroll(function(){
	var height = Math.max($('html').scrollTop(),$('body').scrollTop());
	console.log(height)
	if(height >= 790){
		$('.right-nav').css({'position':'fixed','top':'0','z-index':'1000'})
	}else{
		$('.right-nav').css({'position':'relative'})
	}
});
$.ajax({
	type:"post",
	url:"list-goods.json",
	async:true,
	dataTypt:"json",
	success:function(goods){
		var data = goods.data;
		var str = '';
		var lit = "";
		var pr = '';
		var npr = '';
		var btn = '';
		var gid = getCookie('good_ID');
		for(var i in data){
			if(data[i].id == gid){
				str +='<div class="goods-maginifier">';
				str +='<div id="small" class="wrap" style="width: 300px; height: 300px; margin-top: 0px;">';
				str +='<a class="wrap-link" href="#" style="z-index: 0; position: absolute; display: block;"><img id="small-img" class="wrap-img" src="'+data[i].img[0].img1+'"/></a>';
				str +='<div id="mousetrap" class="mousetrap"></div>';
				str +='<div id="cloud-big" class="cloud-big" style="width: 300px; height: 300px;position: absolute; display: none;top: -41.5px;left: 383px;z-index: 99;overflow:hidden">';
				str += '<img class="big-img" src="'+data[i].img[0].img1+'"/>';
				str +='</div>';
				str +='</div>';
				str +='</div>';
				str +='<div class="pic-select">';
				str +='<p class="back">';
				str +='<i></i>';
				str +='</p>';
				str +='<div class="ul-li">';
				str +='<ul>';
				var gdimg = data[i].img;
				for(var j in gdimg){
					str +='<li class="on"><a class="gimg" href="#"><img src="'+gdimg[j]["img"+(Number(j)+1)]+'"/></a></li>';
				}
				str +='</ul>';
				str +='</div>';
				str +='<p class="next">';
				str +='<i></i>';
				str +='</p>';
				str +='</div>';
				lit +='<h1 class="gd-title">'+data[i].title+'</h1>';
				pr +='<del>'+data[i].through+'</del>';
				npr +='<span class="salepr">'+data[i].relprice+'</span>';
				btn +='<span detail="'+data[i].id+'">加入购物车</span>';
			}
		}
		$('.pic-show').append(str);
		$('.buy-detail').prepend(lit);
		$('.oldpr').append(pr);
		$('.nowpr').append(npr);
		$('.dobtn').append(btn);
		/*====================================lunShow================================================*/
			var temp = 0;
			$('.gimg').mouseover(function(){
				$('.gimg').parent().eq(temp).css('border','1px solid #ddd');
				$(this).parent().css('border','1px solid #4e9605');
				$('.wrap-img').attr('src',''+$(this).find('img').attr('src'));
				$('.big-img').attr('src',''+$(this).find('img').attr('src'));
				temp = $(this).parent().index();
			});
			function detailChange(){
				var detailIdex = 0;
				var num = $('.ul-li ul li').length;
				$('.next').click(function(){
					detailIdex++;
					if(detailIdex>(num-4)){
						detailIdex = num-4;
					}
					$('.ul-li ul').css('left',-detailIdex*80+'px');
					detailJudge();
				});
				$('.back').click(function(){
					detailIdex--;
					if(detailIdex<0){
						detailIdex = 0;
					}
					$('.ul-li ul').css('left',-detailIdex*80+'px');
					detailJudge();
				});
			function detailJudge(){
				var Left = Math.abs(parseInt($('.ul-li ul').css('left')));
				if($('.ul-li ul li').length>4){
					$('.next').css({'display':'block','cursor':'pointer'});
				if(Left>0){
				$('.back').css({'display':'block','cursor':'pointer'});
					if(Left>=($('.small-img').length-4)*80){
					$('.next').css({'display':'block','cursor':'not-allowed'});
					}
					}else if(Left==0){
						$('.back').css({'display':'block','cursor':'not-allowed'});
						}
					}
				}
			}
			detailChange();
		/*==================================magnifier=========================================*/
		var oSm = document.getElementById("small");
		var oBig = document.getElementById("cloud-big");
		var oMove = document.getElementById("mousetrap");
		var oImg = document.getElementById('small-img');
		var oImg1 = document.getElementsByClassName('big-img')[0];
		$(window).scroll(function(){
			var scroll = Math.max($('html').scrollTop(),$('body').scrollTop());
			oSm.onmouseover = function(evt){
			var e = evt||event;
			oBig.style.display = "block";
			oMove.style.display = "block";
			document.onmousemove = function(evt){
			var e = evt||event;	
			var l = e.clientX-oMove.offsetWidth/2-100
			var t = e.clientY-oMove.offsetHeight/2-260+scroll;
//			console.log(oSm.style.top+':'+oImg.style.left);
			if(l<0){
				l = 0;
			}else if(l>oImg.offsetWidth-oMove.offsetWidth){
				l = oImg.offsetWidth-oMove.offsetWidth;
			}
				oMove.style.left = l+'px'; 
			if(t<0){
				t = 0;
			}else if(t>oImg.offsetHeight-oMove.offsetHeight){
				t = oImg.offsetHeight-oMove.offsetHeight;
			}
				oMove.style.top = t+'px';
			document.title = l + ':' + t;
//			console.log(oImg.offsetHeight-oMove.offsetHeight);
			oImg1.style.left = -(oBig.offsetWidth-oImg1.offsetWidth)/oBig.offsetWidth-l*2 +'px';
			oImg1.style.top = -(oBig.offsetHeight-oImg1.offsetHeight)/oBig.offsetHeight-t*2 +'px';
	
			}
		};
		oSm.onmouseout = function(){
			oBig.style.display = "none";
			oMove.style.display = "none";
		};
		})
		
		/*================================数量加减================================================*/
		
		$('.cut').click(function(){
			var total = parseInt($('.buynum').val());
			if(total==1){
				$(this).css('cursor','not-allowed');
				$('.buynum').val(1);
				}else if(total>=1){
					$(this).css('cursor','pointer');
					total--;
					$('.buynum').val(total);
				}
		});
		$('.adds').click(function(){
			var total = parseInt($('.buynum').val());
			if(total>=1){
				total++;
				$(this).css('cursor','pointer');
				$('.buynum').val(total);
			}
		});
		/*=================================加入购物车===================================================*/
		$('.dobtn').click(function(){
			var cookie = document.cookie;
//			var arr = cookie.split('; ');
//			var list = [];
			var id = $('.dobtn span').attr('detail');
			var total = $('.buynum').val();
//			for(var i = 0;i<arr.length;i++){
//				var arr1 = arr[i].split('=');
//				list.push(arr1[0]);
//			}
//			for(var j = 0; j<list.length;j++){
				if(getCookie('user_ID')){
					if(getCookie(getCookie('user_ID')+'_total'+id)){
						var pronum = parseInt(getCookie(getCookie('user_ID')+'_total'+id));
						var num = pronum + parseInt(total);
						creatCookie(getCookie('user_ID')+'_'+id,id);
						creatCookie(getCookie('user_ID')+'_total'+id,num);
						window.location.href = 'gwc.html';
					}else{
						creatCookie(getCookie('user_ID')+'_'+id,id);
						creatCookie(getCookie('user_ID')+'_total'+id,total);
						window.location.href = 'gwc.html';
					}

				}else{
					alert("您未登录，即将为你跳转至登录界面");
					window.location.href = 'login.html';
				}
		});
	}
});
































































