$(function(){
	/*========================轮播图=======================================*/
	var myIndex = 0;
	var timer = null;
	var $ban = $('#banner');
	var $li = $('.banner-lunbo ul li');
	function changeImg(index){
		$li.eq(index).animate({'display':'block'},1000,function(){
			$li.eq(index).find('img').animate({'width':'770px','height':'360px'},2000);
		});
	}
	
	function showNow(index){
		$li.eq(index).css('display','block');
		$li.eq(index).siblings().css('display','none');
		$li.eq(index).siblings().find('img').css({'width':'800px','height':'400px'});
	}
	changeImg(myIndex);
	changeA(myIndex);
	changeColor(myIndex);
	timer = setInterval(sports,3500);
	function sports(){
		myIndex++;
		if(myIndex>6){
			myIndex = 0;
		}
		changeImg(myIndex);
		showNow(myIndex);
		changeColor(myIndex);
		changeA(myIndex);
	}
	
	$('.banner-lunbo ul').mouseover(function(){
		clearInterval(timer);
	})
	function changeColor(index){
		
		if(index == 0){
			$ban.css({'background':'#1fbed1'});
		}else if(index == 6){
			$ban.css({'background':'#fe5400'});
		}else{
			$ban.css({'background':'#fedf71'});
		}
	}
	
	$('.banner-lunbo ul').mouseout(function(){
		clearInterval(timer);
		timer = setInterval(sports,3500);
	});
	
	function changeA(index){
		$('.btn a').eq(index).css({'background':'#fff','color':'#666'});
		$('.btn a').eq(index).siblings().css({'background':'#999999','color':'#fff'});
	}
	
	$('.btn a').mouseover(function(){
		clearInterval(timer);
		changeImg($(this).index());
		showNow($(this).index());
		changeColor($(this).index());
		changeA($(this).index());
	})
})
	/*================================右列表=======================================*/
	$(function(){
			$('.top').mouseover(function(){
			$(this).css({"margin-left":'0'});
		})
			$('.top').mouseout(function(){
			$(this).css({"margin-left":'10px'});
		})
	})

	/*==============================turnshow==========================================*/
	$(function(){
			function partOne(){
			$('.turn-show').animate({'height':'200px'},500);
			$('.turn-show .show-top h2 a').html("口碑评价>>");
			$('.turn-show .show-top b').css({'background':'url(img/index-img/pijia.jpg) no-repeat'});
			$('.turn-show .show-top span').html("378.9万");
			$('.turn-show .show-down h2 a').html("好评率");
			$('.turn-show .show-down b').css({'background':'url(img/index-img/goodadvice.jpg) no-repeat'});
			$('.turn-show .show-down span').html("99.6975%");
			$('.turn-show').css('background','#fec038');
		}
		function partTwo(){
			$('.turn-show').animate({'height':'200px'},500);
			$('.turn-show .show-top h2 a').html("上架新品>>");
			$('.turn-show .show-top b').css({'background':'url(img/index-img/new.jpg) no-repeat'});
			$('.turn-show .show-top span').html("530");
			$('.turn-show .show-down h2 a').html("宠物用品单品数");
			$('.turn-show .show-down b').css({'background':'url(img/index-img/pet.jpg) no-repeat'});
			$('.turn-show .show-down span').html("33752");
			$('.turn-show').css('background','#fa7d67');
		}
		var time = null;
		var onoff = true;
		time = setInterval(change,6000);
		function change(){
			$('.turn-show').css('height','0');
			if(onoff == true){
				partTwo();
			}else{
				partOne();
			}
			onoff = !onoff;
		}
		$('.turn-show').mouseover(function(){
			clearInterval(time);
		})
			$('.turn-show').mouseout(function(){
			clearInterval(time);
			time = setInterval(change,6000);
		})
	})
	
	/*====================================customer word==========================================*/
	$(function(){
			function selectOne(){
			$('.carousel-show').slideUp();
			$('.customer-word').slideDown();
		}
		function selectTwo(){
			$('.carousel-show').slideDown();
			$('.customer-word').slideUp();
		}
		var showTime = null;
		var bar = true;
		showTime = setInterval(select,4000);
		function select(){
			if(bar == true){
				selectOne();
			}else{
				selectTwo();
			}
			bar = !bar;
		}
		$('.carousel-show').mouseover(function(){
			clearInterval(showTime);
		})
		$('.carousel-show').mouseout(function(){
			clearInterval(showTime);
			showTime = setInterval(select,4000);
		})
		$('.customer-word').mouseover(function(){
			clearInterval(showTime);
		})
		$('.customer-word').mouseout(function(){
			clearInterval(showTime);
			showTime = setInterval(select,4000);
		})
	})
	
	/*=============================surprise=================================*/
	$(function(){
		$('.time-pix p').mouseover(function(){
			$(this).addClass('cur');
		});
		$('.time-pix p').mouseout(function(){
			$(this).removeClass('cur');
		});
		$('.time-pix p').mouseover(function(){
			$('.lun-list ul').eq($(this).index()).show().siblings().hide();
		});
		var curIndex = 0;
		var luntime = null;
		function lunPlay(index){
			$('.lun-play a').eq(index).css({'display':'block','z-index':'1'}).siblings().css('display','none');
		}
		function moveLi(index){
			$('.select-btn span').eq(index).css({'background':'#fff'});
			$('.select-btn span').eq(index).siblings().css({'background':'#999999'});
		}
		$('.lun-play').mouseover(function(){
			clearInterval(luntime);
		});
		$('.lun-play').mouseout(function(){
			clearInterval(luntime);
			luntime = setInterval(playLbo,3000);
		});
		$('.select-btn span').click(function(){
			clearInterval(luntime);
			lunPlay($(this).index());
			moveLi($(this).index());
		});
		lunPlay(curIndex);
		moveLi(curIndex);
		luntime = setInterval(playLbo,3000);
		function playLbo(){
			curIndex++;
			if(curIndex>=$('.select-btn span').length){
				curIndex = 0;
			}
			lunPlay(curIndex);
			moveLi(curIndex);
		}
		/*==============放大加变宽及增高=====================*/
		function imgBig(str){
			var W,H;
			$(str).mouseover(function(){
				W = parseInt($(this).css('width'));
				H = parseInt($(this).css('height'));
				$(this).stop(true).animate({'width':W+3+'px','height':H+3+'px'},300);
			});
			$(str).mouseout(function(){
				$(this).stop(true).animate({'width':W+'px','height':H+'px'},300);
			});
		}
		imgBig('.a-img img');
		$('.detail-r a').mouseover(function(){
			$(this).animate({'padding-left':'35px'},100);
		});
		$('.detail-r a').mouseout(function(){
			$(this).animate({'padding-left':'30px'},100);
		});
		$('.menu-sel a').click(function(){
			$(this).addClass('cur-btn').siblings().removeClass('cur-btn');
			$('.rank').eq($(this).index()).show().siblings().hide();
		})
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
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

