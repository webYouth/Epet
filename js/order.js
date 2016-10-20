$('.win-close').click(function(){
	$('.zhezhao').css('display','none');
})
if(getCookie(getCookie('user_ID')+'_price')){
	$('.order-pr em').html(getCookie(getCookie('user_ID')+'_price'));
}else{
	$('.order-pr em').html(0);
}
$('.order-btn').click(function(){
	if($('.address-detail').html()){
		window.location.href = 'paysuccess.html';
	}else{
		alert('收货地址还没写哦！');
	}
})

$('.form-submit').click(function(){
	var str = '';
	$('.address-list span').text($('.u-name').val());
	str += $('#span_province select').val();
	str += $('#span_city select').val();
	str += $('#span_area select').val();
	str += $('.u-address').val();
	str += $('.u-phone').val();
	$('.address-detail').append(str);
	$('.zhezhao').css('display','none');
});





















