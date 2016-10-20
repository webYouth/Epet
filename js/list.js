$('.nav-cont').hover(function(){
	$(this).find('ul').css('display','block');
},function(){
	$(this).find('ul').css('display','none');
});

function lunShowImg($goods){
	$goods.find('.small-img').hover(function(){
		if($goods.find('.small-img').hasClass('curimg')){
			$goods.find('.small-img').removeClass('curimg');
			$(this).addClass('curimg');
		}
		$goods.find('.big-img').attr('src',$(this).attr('src'));

	},function(){
		
	});
}

function lunShow($goods){
	var num = $goods.find('.small-img').length;
//	var Left = 0;
	var myIndex = 0;
	$goods.find('.next').click(function(){
		myIndex++;
		if(myIndex>=(num-4)){
			myIndex = num-4;
		}
		$goods.find('ul').css('left',-myIndex*39+'px');
	
		judge($goods);
	})
	$goods.find('.back').click(function(){
		myIndex--;
		if(myIndex<=0){
			myIndex = 0;
		}
		$goods.find('ul').css('left',-myIndex*39+'px');
//		Left = Math.abs(parseInt($goods.find('ul').css('left')));
		judge($goods);
	})

	}
	function judge($goods){
		var Left = Math.abs(parseInt($goods.find('ul').css('left')));
		if($goods.find('.small-img').length>4){
				$goods.find('.next').css({'display':'block','cursor':'pointer','background':'url(img/btnbg.gif) no-repeat 0 -560px'});
					if(Left>0){
						$goods.find('.back').css({'display':'block','cursor':'pointer','background':'url(img/btnbg.gif) no-repeat 0 -531px'});
						if(Left>=($goods.find('.small-img').length-4)*39){
						$goods.find('.next').css({'display':'block','cursor':'not-allowed','background':'url(img/btnbg.gif) no-repeat 0 -618px'});
						}
					}else if(Left==0){
						$goods.find('.back').css({'display':'block','cursor':'not-allowed','background':'url(img/btnbg.gif) no-repeat 0 -589px'});
					}
			}else if($goods.find('.small-img').length<=4){
				$goods.find('.next').css('display','none');
				$goods.find('.back').css('display','none');
			}
		}
/*=====================nav fixed============================*/
	$(window).scroll(function(){
		var scrollH = Math.max($('html').scrollTop(),$('body').scrollTop());
		if(scrollH>=225){
			$('.show-detail').css({'position':'fixed','top':'0','left':'243px'});
		}else{
			$('.show-detail').css({'position':'relative','top':'0','left':'0'});
		}
	});
	
			var swch = true;
		$('.more a').click(function(){
			if(swch){
				$(this).parent().prev().animate({'height':'60px'},500);
				$(this).html('收起');
			}else{
				$(this).parent().prev().animate({'height':'30px'},500);
				$(this).html('更多');
			}
			swch = !swch;
		})

/*========================ajax load=================================*/
	$.ajax({
		type:"post",
		url:"list-goods.json",
		dataType:"json",
		success:function(goods){
			var data = goods.data;
//			console.log(data);
			var str = '';
			for(var i in data){
				str +='<div class="goods-li" detail="'+data[i].id+'">';
				str +=	'<div class="goods-box">';
				str +=	'<div class="box-img">';
				str +=	'<a href="detail.html"><img class="big-img" style="display: inline;" src="'+data[i].img[0].img1+'"/></a>';
				str +='</div>';
				str +='<div class="img-lunbo">';
				str +='<div class="back">';							
				str +='</div>';
				str +='<div class="gimg-lun">';
				str += '<ul>';
				var dimg = data[i].img;
				for(var j in dimg){
									str +='<li><a href="detail.html"><img class="small-img" width="30" height="30" src="'+dimg[j]["img"+(Number(j)+1)]+'"/></a></li>';
				}

				str +='</ul>';
				str +='</div>';
				str +='<div class="next">';
				str +='</div>';
				str +='</div>'
				str +='<a class="goods-title" title="'+data[i].title+'" href="detail.html">'+data[i].title+' </a>';
				str +='<p class="gprice"><span class="through">￥<em>'+data[i].through+'</em></span><span class="relprice">￥<em>'+data[i].relprice+'</em></span></p>';
				str +='<p class="mancount"><b class="bkcount">'+data[i].bkcount+'</b><b class="man-con">'+data[i].man+'</b></p>'
				str +='</div>';
				str +='<div class="collect-gwc">';
				str +='<a class="col" href="javascript:;"><span>收藏</span></a>';
				str +='<a class="togwc" href="javascript:;"><span>加入购物车</span></a>';
				str +='</div>';
				str +='</div>';
				str +='</div>';
			}
			$('.goods-all').append(str);	
			$('.goods-li').hover(function(){
			$(this).css('border','1px solid #53AA5B');
				},function(){
				$(this).css('border','1px solid #E6E6E6');
			});
			$('.goods-li').mouseover(function(){
				var $goods = $(this);
				lunShowImg($goods);
				lunShow($goods);			
				judge($goods);
			});
		}
	});
	$('.goods-all').on("click",".small-img,.big-img,.goods-title,.togwc",function(){
		var goodId = $(this).parents('.goods-li').attr("detail");
		creatCookie("good_ID",goodId);
		window.location.href = "detail.html";
	});






































