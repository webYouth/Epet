if(getCookie(getCookie('user_ID')+'_price')){
	$('.bkprice em').html(getCookie(getCookie('user_ID')+'_price'));
}else{
	$('.bkprice em').html(0);
}
