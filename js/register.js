$(function(){
	var ph = false;
	var reg = false;
	var pa = false;
	var pHone = /^1[3|4|5|7|8]\d{9}$/;
	 $('.phone-inp').focus(function(){
	 	$('.phone-error').hide();
	 	
	 })
	 $('.phone-inp').blur(function(){
	    ph = pHone.test($('.phone-inp').val());
	    if($('.phone-inp').val() != ''){
		    if(ph){
		 		$('.phone-ok').show();
		 		$('.phone-error').hide();
		 		$('.phone-center').css({'border':'1px solid #ccc','color':'#666'});
			}else{
			 	$('.phone-ok').hide();
			 	$('.phone-error').show();
			 	$('.phone-center').css({'border':'1px solid #ff6f4a','color':'#ff6f4a'});
			}
	    }else{
	    	alert('不能为空！');
	    }
	 	
	 	
	 });
	 var str = checkYan();
	 $('.yanzh span').html(str);
	$('.yanzh').click(function(){
		var str = checkYan();
		$('.yanzh span').html(str);
	});
	
	$('.cen-code').blur(function(){
		if($('.cen-code').val() == $('.yanzh span').html()){
			$('.yanzheng').css('display','block');
			$('.yan-ok').css('display','block');
		}else{
			$('.yanzheng').css('display','none');
			$('.yan-error').css('display','block');
		}
	})
	
//	$(".cen-code").blur(function(){
//		if($(".cen-code").val() == ''){
//	            //alert(1)
//	        
//	
//	    }else{
//	        $(".yanzheng").css({display:"none"})
//	    }
//  })
	
	
	
//  $(".yanzheng").click(function(){
//      $(".yanzheng").css({display:"none"})
//  })
//  $(".code>img").click(function(){
//      $(".code").find("img").attr({src:"https://authcode.jd.com/verify/image?time="+new Date().getTime()+"a=0&acid=cf0387b0-49a9-4f99-9037-02dacb09fd3a&uid=cf0387b0-49a9-4f99-9037-02dacb09fd3a&srcid=reg&is=29bc7d35bd9c68b2c5187692755538fe&yys=1470966814689"})
//  })
	 
	 var arr = [];
	 $('.duanxin-btn>a').click(function(){
	 	$('.duanxin-inp').val('');
	 	arr = [];
	 	for(var i = 0; i<4;i++){
	 		var num = Math.floor(Math.random()*9);
	 		arr.push(num);
	 	}
	 	var str = arr.join('');
	 	$('.duanxin-inp').val(str);
	 });
	 
	 $('.duanxin-inp').blur(function(){
	 	if($('.duanxin-inp').val() != ''&&$('.duanxin-inp').val() == arr.join('')){
	 		$('.duanxin-ok').show();
	 		$('.duanxin-error').hide();
	 		$('.duanxin-center').css({'border':'1px solid #ccc','color':'#666'});
	 	}else{
	 		$('.duanxin-ok').hide();
	 		$('.duanxin-error').show();
	 		$('.duanxin-center').css({'border':'1px solid #ccc','color':'#666'});
	 	}
	 })
	 
	 var user = /^[a-zA-Z]\w{5,10}$/;
	 $('.reguser-inp').focus(function(){
		$('.reguser-error').hide();
	 });
	 $('.reguser-inp').blur(function(){
	 	reg = user.test($('.reguser-inp').val());
		if(reg){
			$('.reguser-ok').show();
			$('.reguser-error').hide();
			$('.reguser-center').css({'border':'1px solid #ccc','color':'#666'});
		}else{
			$('.reguser-ok').hide();
			$('.reguser-error').show();
			$('.reguser-center').css({'border':'1px solid #ff6f4a','color':'#ff6f4a'});
		}
	 });
	 var pass = /^\w{8,20}$/;
	  $('.regpass-inp').focus(function(){
		$('.regpass-error').hide();
	 });
	 $('.regpass-inp').blur(function(){
	 	pa = pass.test($('.regpass-inp').val());
	 	if(pass){
	 		$('.regpass-ok').show();
			$('.regpass-error').hide();
			$('.regpass-center').css({'border':'1px solid #ccc','color':'#666'});
	 	}else{
	 		$('.regpass-ok').hide();
			$('.regpass-error').show();
			$('.regpass-center').css({'border':'1px solid #ff6f4a','color':'#ff6f4a'});
	 	}
	 });
	 
	 
	 $('.regrepass-inp').focus(function(){
		$('.regrepass-error').hide();
	 });
	 $('.regrepass-inp').blur(function(){
	 		if($('.regrepass-inp').val() === $('.regpass-inp').val()){
		 		$('.regrepass-ok').show();
				$('.regrepass-error').hide();
				$('.regrepass-center').css({'border':'1px solid #ccc','color':'#666'});
		 	}else{
		 		$('.regrepass-ok').hide();
				$('.regrepass-error').show();
				$('.regrepass-center').css({'border':'1px solid #ff6f4a','color':'#ff6f4a'});
		 	}
	 });
	// var phone = $('.phone-inp').val();
	 
	 $('.Otherregister').click(function(){
	 	var userName = $('.reguser-inp').val();
	 	var passWord = $('.regrepass-inp').val();
	 	if($('input[name=agrement]').is(':checked')==true){
	 		if(ph&&pa&&reg){
		 		$.ajax({
				 	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				 	data:{
				 		'status':'register',
				 		userID:userName, 
				 		password:passWord
				 	},
				 	success:function(data){
				 		if(data == 0){	
				 			$('.reguser-error').html('您输入的昵称已存在！').css({'color':'#ff6f4a'});
				 			alert('您输入的昵称已存在！');
				 		}else if(data == 1){
				 			alert('注册成功！');
				 			window.location.href = 'login.html';
				 		}else if(data == 2){
				 			alert('数据库报错！请与管理员联系');
				 		}
				 }
			 });
	 		}else{
	 			alert("请输入正确的格式！");
	 		}
	 	}else{
	 		alert('请勾选同意复选框！');
	 	}
	 	
//		 	$.ajax({
//		 	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//		 	data:{
//		 		status:'register',
//		 		userID:phone, 
//		 		password:passWord
//		 	},
//		 	success:function(data){
//			 		if(data == 0){
//						$('.phone-error').html('您输入的手机号已存在！').css({'color':'#ff6f4a'});
//						alert('您输入的手机号已存在!');
//			 		}else if(data == 1){
//			 			window.location.href = 'login.html';
//			 		}else if(data == 2){
//						alert('数据库报错！请与管理员联系');
//			 		}
//		 		}
//		 	});
		});	 
	
	var check=$("input[name=agrement]").prop("checked");
    $("input[name=agrement]").click(function(){
       // alert(1)
        if($('input[name=agrement]').is(':checked')==true){
           $('.Otherregister').css({'background':'#4d9b35','color':'#fff'});
        }else{
            $('.Otherregister').css({'background':'#ededed','color':'#666'});
        }
    })
    
    $(".more").click(function(){
        $(".bot").toggle(1000);
    })
})
