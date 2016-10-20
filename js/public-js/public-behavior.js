///*=====================图片旋转===========================*/
//$(function(){
//		var num = 0;
//	var rotateImg = {
//		animates:function(options){
//			var defu={
//				oLi:null,
//				oImg:null,
//				things:'mouseover',
//				thingo:'mouseout'
//			}
//			var opt = $.extend(defu, options);
//			opt.oLi[opt.things](function(){
//				num++;
//				opt.oImg.rotate(90*num);
//			});
//			opt.oLi[opt.thingo](function(){
//				num++;
//				opt.oImg.rotate(90*num);
//			});
//		}
//	}
//					rotateImg.animates({
//						oLi:$('.user'),
//						oImg:$('.rotate'),
//						things:'mouseover',
//						thingo:'mouseout'
//					})
//					rotateImg.animates({
//						oLi:$('.li-col'),
//						oImg:$('.rotate'),
//						things:'mouseover',
//						thingo:'mouseout'
//					})
//})
///*===========================消失隐藏==========================================*/
//$(function(){
//	var hideOrshow ={
//		toGgle:function(options){
//			var defu={
//				oTouch:null,
//				oBlock:null,
//				things:'mouseover',
//				thingo:'mouseout'
//			}
//			var opt = $.extend(defu, options);
//			opt.oTouch[opt.things](function(){
//				opt.oBlock.toggle();
//			})
//			opt.oTouch[opt.thingo](function(){
//				opt.oBlock.toggle();
//			})
//		}
//	}
//	
//					hideOrshow.toGgle({
//						oTouch:$('.user'),
//						oBlock:$('.user-ul'),
//						things:'mouseover',
//						thingo:'mouseout'
//					})
//					hideOrshow.toGgle({
//						oTouch:$('.li-col'),
//						oBlock:$('.collection'),
//						things:'mouseover',
//						thingo:'mouseout'
//					})
//})
///*=============================调用区=====================================*/














