$(function(){
	$('#top').load('html/public-html/public-top.html',function(){
		$('#top').on('mouseover','.user',function(){
			$('.user-ul').show();
		})
		$('#top').on("mouseout",".user",function(){
			$('.user-ul').hide();
		})
		$('#top').on('mouseover','.li-col',function(){
			$('.collection').show();
		})
		$('#top').on("mouseout",".li-col",function(){
			$('.collection').hide();
		})
		if(getCookie('user_ID')){
				$('.login').find('a').html("欢迎亲爱的"+getCookie('user_ID')+'<a class="out" href="javascript:;">注销</a>').css('color','red');
		}else{
				$('.login').find('a').html('[登录]').css('color','#444');
			}
	$('.login').on('click','.out',function(){
			deleteCookie('user_ID');
			$('.login').find('a').html('[登录]').css('color','#444');
		})
	})
	/*========================头部登录提示============================================*/
	
	$('#header').load('html/public-html/public-header.html',function(){
		$('#header').on('focus','.search-txt',function(){
			$('.search-txt').val('');
		});
		$('#header').on('blur','.search-txt',function(){
			$('.search-txt').val('海洋之心');
		});
		$('#header').on('mouseover','.app-link',function(){
			$('.app').css('margin-right','63px');
		});
		$('#header').on('mouseout','.app-link',function(){
			$('.app').css('margin-right','42px');
		});
	});
	
	
	/*二级主菜单*/
	
$('#banner-nav').load('html/secondSelect.html',function(){
	$('#banner-nav').on('mouseover','.sel-56',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_5').css({'display':'block'});
		$('.ct_6').css({'display':'block'});
		$('.sel-56').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-56').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-56',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_5').css({'display':'none'});
		$('.ct_6').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_5,.ct_6',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_5').css({'display':'block'});
		$('.ct_6').css({'display':'block'});
		$('.sel-56').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_5,.ct_6',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_5').css({'display':'none'});
		$('.ct_6').css({'display':'none'});
		$('.sel-56').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
		

	$('#banner-nav').on('mouseover','.sel-5453',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_54').css({'display':'block'});
		$('.ct_53').css({'display':'block'});
		$('.sel-5453').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-5453').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-5453',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_54').css({'display':'none'});
		$('.ct_53').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_54,.ct_53',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_54').css({'display':'block'});
		$('.ct_53').css({'display':'block'});
		$('.sel-5453').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_54,.ct_53',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_54').css({'display':'none'});
		$('.ct_53').css({'display':'none'});
		$('.sel-5453').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
		
		
		
	$('#banner-nav').on('mouseover','.sel-4849',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_48').css({'display':'block'});
		$('.ct_49').css({'display':'block'});
		$('.sel-4849').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-4849').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-4849',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_48').css({'display':'none'});
		$('.ct_49').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_48,.ct_49',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_48').css({'display':'block'});
		$('.ct_49').css({'display':'block'});
		$('.sel-4849').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_48,.ct_49',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_48').css({'display':'none'});
		$('.ct_49').css({'display':'none'});
		$('.sel-4849').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
		
		
	$('#banner-nav').on('mouseover','.sel-552652',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_55').css({'display':'block'});
		$('.ct_2652').css({'display':'block'});
		$('.sel-552652').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-552652').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-552652',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_55').css({'display':'none'});
		$('.ct_2652').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_55,.ct_2652',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_55').css({'display':'block'});
		$('.ct_2652').css({'display':'block'});
		$('.sel-552652').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_55,.ct_2652',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_55').css({'display':'none'});
		$('.ct_2652').css({'display':'none'});
		$('.sel-552652').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
		
		
	$('#banner-nav').on('mouseover','.sel-265150',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_2651').css({'display':'block'});
		$('.ct_50').css({'display':'block'});
		$('.sel-265150').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-265150').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-265150',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_2651').css({'display':'none'});
		$('.ct_50').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_2651,.ct_50',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_2651').css({'display':'block'});
		$('.ct_50').css({'display':'block'});
		$('.sel-265150').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_2651,.ct_50',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_2651').css({'display':'none'});
		$('.ct_50').css({'display':'none'});
		$('.sel-265150').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
					
			
	$('#banner-nav').on('mouseover','.sel-32883288',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_3288').css({'display':'block'});
//		$('.ct_50').css({'display':'block'});
		$('.sel-32883288').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-32883288').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-32883288',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_3288').css({'display':'none'});
//		$('.ct_50').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_3288',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_3288').css({'display':'block'});
//		$('.ct_50').css({'display':'block'});
		$('.sel-32883288').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_3288',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_3288').css({'display':'none'});
//		$('.ct_50').css({'display':'none'});
		$('.sel-32883288').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})
	

	$('#banner-nav').on('mouseover','.sel-38953886',function(){
		$('.boxsha').css({'display':'block',"border":'1px solid #62a727'});
		$('.ct_3895').css({'display':'block'});
		$('.ct_3886').css({'display':'block'});
		$('.sel-38953886').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.sel-38953886').siblings().css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	$('#banner-nav').on('mouseout','.sel-38953886',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_3895').css({'display':'none'});
		$('.ct_3886').css({'display':'none'});
	})
	$('#banner-nav').on('mouseover','.ct_3895,.ct_3886',function(){
		$('.boxsha').css({'display':'block'});
		$('.ct_3895').css({'display':'block'});
		$('.ct_3886').css({'display':'block'});
		$('.sel-38953886').css({'border-top':'1px solid #62a727','border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
	})
	$('#banner-nav').on('mouseout','.ct_3895,.ct_3886',function(){
		$('.boxsha').css({'display':'none'});
		$('.ct_3895').css({'display':'none'});
		$('.ct_3886').css({'display':'none'});
		$('.sel-38953886').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	})

	
	$('#banner-nav').on('mouseout','.dogType li',function(){
		$('.dogType li').css({'border-bottom':'1px dashed #ccc','border-top':'0','padding-left':'0','width':'215px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
	});
	
	$("#banner-nav").on('mouseover','.pet-active',function(){
		$('.pet-active').css({'border-bottom':'1px solid #62a727','padding-left':'10px','width':'218px','background':'#fff'});
		$('.cate-action').css({'display':'block','border':'1px solid #62a727'});
	});
	$("#banner-nav").on('mouseover','.cate-action',function(){
		$('.pet-active').css({'border-bottom':'1px solid #62a727','padding-left':'10px','width':'208px','background':'#fff'});
		$('.cate-action').css({'display':'block','border':'1px solid #62a727'});
	});
	$("#banner-nav").on('mouseout','.pet-active',function(){
		$('.pet-active').css({'border-bottom':'0','border-top':'0','padding-left':'0','width':'205px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
		$('.cate-action').css({'display':'none','border':'1px solid #ccc'});
	});
	$("#banner-nav").on('mouseout','.cate-action',function(){
		$('.pet-active').css({'border-bottom':'0','border-top':'0','padding-left':'0','width':'205px','background-color':'#fcfcfc','background':'url(img/index-img/dot.jpg) no-repeat 210px 20px'});
		$('.cate-action').css({'display':'none','border':'1px solid #ccc'});
	});
	$('.catelist').css('display','block');
	$('.pet-cate').show();
	$('.dogType').show();
	$('.dog').mouseover(function(){
		$('.catelist').css('display','block');
		$('.pet-cate').show();
		$('.dogType').hide();
		$('.dog').css({'background':'#99d4ff','color':'#fff'});
		$('.sort').css({'background':'#fff','color':'#666'});
		$('.dog a').css('color','#fff');
		$('.sort a').css('color','#666');
	})
	
	$('.sort').mouseover(function(){
		$('.catelist').css('display','block');
		$('.pet-cate').hide();
		$('.dogType').show();
		$('.sort').css({'background':'#99d4ff','color':'#fff'});
		$('.dog').css({'background':'#fff','color':'#666'});
		$('.dog a').css('color','#666');
		$('.sort a').css('color','#fff');
	})
});
		/*========================foot=================================*/
	$('#foot').load('html/public-html/public-foot.html',function(){
		
	})
		/*=========================sidebar=======================================*/
	$('#sidebar').load('html/public-html/public-sidebar.html',function(){
		$('#sidebar').on('mouseover','.bar-cont a',function(){
			$(this).parent().find('label').css({'display':'block'});
			$(this).parent().find('label').animate({'opacity':'1','right':'35px'},500);
		});
		$('#sidebar').on('mouseout','.bar-cont a',function(){
			$(this).parent().find('label').animate({'opacity':'0','right':'53px'},500);
			$(this).parent().find('label').css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.list-fir a',function(){
			$(this).parent().find('div').css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.list-fir a',function(){
			$(this).parent().find('div').css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.list-fir div',function(){
			$(this).css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.list-fir div',function(){
			$(this).css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.list-sec a',function(){
			$(this).parent().find('.gwc-state').css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.list-sec a',function(){
			$(this).parent().find('.gwc-state').css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.gwc-state',function(){
			$(this).css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.gwc-state',function(){
			$(this).css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.list-fiv a',function(){
			$(this).parent().find('#viewbox').css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.list-fiv a',function(){
			$(this).parent().find('#viewbox').css({'display':'none'});
		});
		$('#sidebar').on('mouseover','#viewbox',function(){
			$(this).css({'display':'block'});
		});
		$('#sidebar').on('mouseout','#viewbox',function(){
			$(this).css({'display':'none'});
		});
		$(window).scroll(function(){
			var Topheight = Math.max($('html').scrollTop(),$('body').scrollTop());
			if(Topheight>=100){
				$('.dw-for').animate({'opacity':'1'},5);
			}else{
				$('.dw-for').animate({'opacity':'0'},5);
			}
		})
		$('.dw-for a').click(function(){
			$('html,body').animate({
				'scrollTop':30
			},500)
		})

			var cookie = document.cookie;
			var arr = cookie.split('; ');
			var list = [];
			
			for(var i = 0;i<arr.length;i++){
				var arr1 = arr[i].split('=');
				list.push(arr1[0]);
			}
			for(var j = 0; j<list.length;j++){
				if(list[j] == 'user_ID'){
	//				alert(list[i])
	//				if(getCookie('user_ID')){
					$('.login-state').html("欢迎亲爱的"+getCookie('user_ID')).css('color','red');
				}else{
					$('.login-state').find('span').text('登录').css('color','red');
				}
			}

		$('#sidebar').on('mouseover','.dw-thr a',function(){
			$(this).parent().find('.dw-img').css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.dw-thr a',function(){
			$(this).parent().find('.dw-img').css({'display':'none'});
		});
		$('#sidebar').on('mouseover','.dw-img',function(){
			$(this).css({'display':'block'});
		});
		$('#sidebar').on('mouseout','.dw-img',function(){
			$(this).css({'display':'none'});
		});
	});
});
//window.onload = function(){
//	var fixH = document.documentElement.clientHeight;
//	
//};




























