
$('.shop-menu li').mouseover(
	function(){
		var coco = $(this).index();
		if(coco == 0){
			$('.btom-move').stop(true).animate({'left':'0','width':'123px'},300);
		}else if(coco == 1){
			$('.btom-move').stop(true).animate({'left':'123px','width':'138px'},300);
		}else if(coco == 2){
			$('.btom-move').stop(true).animate({'left':'261px','width':'138px'},300);
		}else if(coco == 3){
			$('.btom-move').stop(true).animate({'left':'399px','width':'139px'},300);
		}	
	}
);
$('.shop-menu').mouseout(function(){
	$('.btom-move').stop(true).animate({'left':'0','width':'123px'},300);
})



/*=======================ajax实现购物车绑定用户===========================================*/
$.ajax({
	type:"post",
	url:"list-goods.json",
	async:true,
	dataType:'json',
	success:function(data){
		var carData = data.data;
		console.log(carData)
		var cookie = document.cookie;
		var arr = cookie.split('; ');
		var list = [];	
		var str = '';
		for(var i = 0;i<arr.length;i++){
			var arr1 = arr[i].split('=');
			list.push(arr1[0]);
		}
		for(var j = 0;j<list.length;j++){
			for(var n = 0;n<carData.length;n++){
				if(list[j] == getCookie('user_ID')+'_'+carData[n].id){
					var selfPr = getCookie(getCookie('user_ID')+'_total'+carData[n].id)*carData[n].relprice;		
		/*
		 *此处让每个商品加载完成之后，单价，数量，总价格对应初始化
		 */
					str +='<tr class="cart-order" detailid="'+carData[n].id+'">';
				    str +='<td width="50" align="center">';
				    str +='<input autocomplete="off" class="checknow" name="check_goods_126704" doclick="check" type="checkbox">';
				    str +='</td>';
				    str +=' <td width="500" valign="middle">';
				    str +='<div class="por-img fl overflow bgwhite ftc">';
				    str +='<a href="#" target="_blank">';
				    str +='<img class="cart-img" src="'+carData[n].img[0].img1+'" width="80">';	
				    str +='</a>';
				    str +='</div>';
				    str +='<div class="por-intro fl ml20 mt" style="margin-top: 30px;">';
					str +='<a href="#" target="_blank" class="carttitle c333">'+carData[n].title+'</a>';							       					str +='</div>';
				    str +='</td>';
				    str +='<td style="padding-top:20px;" width="150" align="center">';
				    str +='<div class="buynum-wrap clearfix">';
				    str +='<span id="less1" act="sub" selfid="'+carData[n].id+'" class="ft18 fl ">-</span>'
				    str +='<input class="text buynum num ftc fl bgwhite" value="'+getCookie(getCookie('user_ID')+'_total'+carData[n].id)+'" size="2" type="text">';
				    str +='<span act="add" selfid="'+carData[n].id+'" id="add1" class="fl ">+</span>';
				    str +='</div>';
				    str +='<p class="fcolor mtneg10 wangu">仅剩6本</p>';
				    str +='</td>';
				    str +='<td class="c000 bold ft14" width="200" align="center">';
				    str +='<p class="eachallpr bol">￥<em>'+selfPr+'</em>.00</p><p class="eachpr c89">￥<em>'+carData[n].relprice+'</em>/件</p>';
				    str +='</td>'
				    str +='<td width="200" align="center">';
				    str +='<a href="javascript:;"class="collect c666">[收藏]</a>'; 
				    str +='<a href="javascript:;"class="delete c666">[删除]</a>';
				    str +='</td>';
				    str +='</tr>';
				}
			}
		}
		$('.buynow').before(str);
		allPrice();
		/*
		 *点击实现数量加减，并让价格随之对应变化，刷新不改变
		 */
		$('.buynum-wrap #less1').click(function(){
			var nowId = parseInt($(this).attr('selfid'));
			var eachPrice = $(this).parents('.cart-order').find('.eachpr em').html();
			var numIndex = parseInt(getCookie(getCookie('user_ID')+'_total'+nowId));
			numIndex--;
			if(numIndex<=1){
				numIndex = 1;
				$(this).parents('.cart-order').find('.eachpr').hide();
			}if(numIndex>1){
				$(this).parents('.cart-order').find('.eachpr').show();
			}
			$(this).parents('.cart-order').find('.buynum').val(numIndex);	
			$(this).parents('.cart-order').find('.eachallpr em').html(eachPrice*numIndex);
			creatCookie(getCookie('user_ID')+'_total'+nowId,numIndex);
			allPrice();
		});
		$('.buynum-wrap #add1').click(function(){
			var nowId = parseInt($(this).attr('selfid'));
			var eachPrice = $(this).parents('.cart-order').find('.eachpr em').html();
			var numIndex = parseInt(getCookie(getCookie('user_ID')+'_total'+nowId));
			numIndex++;
			$('.total').html(numIndex);
			$(this).parents('.cart-order').find('.eachpr').show();
			$(this).parents('.cart-order').find('.buynum').val(numIndex);
			$(this).parents('.cart-order').find('.eachallpr em').html(eachPrice*numIndex);
			creatCookie(getCookie('user_ID')+'_total'+nowId,numIndex);
			allPrice();
		});
		/*
		 *allPrice函数处理总价格
		 */
		function allPrice(){
			var mySum = 0;
			for(var m = 0;m<$('.eachallpr').length;m++){
				mySum += parseFloat($('.eachallpr em')[m].innerHTML);
			}
			var heSum = 0;
			for(var j = 0;j<$('.buynum').length;j++){
				if(!isNaN($('.buynum')[j].value)){
					heSum += parseInt($('.buynum')[j].value);
				}
			}
			$('.allprice em').html(mySum);
			$('.total').html(heSum);
		}
//		$('.total').html($('.eachallpr').length);
		if($('.eachallpr').length == 0){
			$('.nogoods').css('display','block');
			$('.cart-table').css('display','none');
		}else{
			$('.nogoods').css('display','none');
			$('.cart-table').css('display','block');
		}
		var length =$('.eachallpr').size();
		$('.delete').click(function(){
			$(this).parents('.cart-order').css('display','none');
			var numid = $(this).parents('.cart-order').attr('detailid');
			deleteCookie(getCookie('user_ID')+'_total'+numid);
			deleteCookie(getCookie('user_ID')+'_'+numid);
			length --;
//			alert($('.buynum').length)
			var nowNum = $(this).parents('.cart-order').find('.buynum').val();
			var totalnum = parseInt($('.total').html());
			$('.total').html(totalnum-nowNum);
			var nowPr = parseInt($(this).parents('.cart-order').find('.eachallpr em').html());
			var totalpr = parseInt($('.allprice em').html());
			$('.allprice em').html(totalpr-nowPr);
			if(length == 0){
				$('.nogoods').css('display','block');
				$('.cart-table').css('display','none');
			}else{
				$('.nogoods').css('display','none');
				$('.cart-table').css('display','block');
			}
		});
		$('.checknow').click(function(){
			if($('.checknow').is(':checked')==true){
				$('.go-balance').css('background','#459d36');
			}else{
				$('.go-balance').css('background','#b1b1b1');
			}
		});
		$('.go-balance').click(function(){
			var price = $('.allprice em').html();
			if($('.checknow').is(':checked')==true){
				creatCookie(getCookie('user_ID')+'_price',price);
				window.location.href = 'order.html';
			}else{
				alert('请勾选需要支付的商品！');
			}
		});
	}
});





















