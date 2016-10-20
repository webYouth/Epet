$(function(){
	$('.actaul').click(function(){
		$('.login-text-actual').show();
		$('.login-text-phone').hide();
		$('.actaul').css('border-bottom','1px solid #4BD1A4');
		$('.pho').css('border-bottom','1px solid #ccc');
	})
	$('.pho').click(function(){
		$('.login-text-actual').hide().siblings().show();
		$('.pho').css('border-bottom','1px solid #4BD1A4');
		$('.actaul').css('border-bottom','1px solid #ccc');
	});
	
	$('.btn-a').click(function(){
		var userName = $('.inp-user').val();
		var passWord = $('.inp-pass').val();
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
		 		status:'login',
		 		userID:userName, 
		 		password:passWord
		 	},
			success:function(data){
//				alert(JSON.parse(data));
				var shuju = JSON.parse(data);
				if(data){
					console.log(shuju.userID);
					creatCookie('user_ID',shuju.userID);
					window.location.href = 'index.html';
				}else if(data == 0){
					alert('用户名不存在！');
				}else if(data == 1){
					alert('用户名密码不符！');
				}
			}
		});
	})
})

