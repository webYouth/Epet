function creatCookie(key,value,expires,path="/",domain){
			var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
			if(expires instanceof Date){
				cookie += ';expires=' + expires;
			}if(path){
				cookie += ';path' + path;
			}
			if(domain){
				cookie += ';domain' + domain;
			}
			document.cookie = cookie;
		}
		function getDate(day){
			var date = null;
			if(typeof day == 'number' && day > 0){
				date = new Date();
				date.setDate(date.getDate()+day);
			}
			return date;
		}
		function getCookie(key){
			var cookieName = encodeURIComponent(key) + '=';
			var cookieValue = '';
			var cookieStart = document.cookie.indexOf(cookieName);
			if(cookieStart > -1){
				var cookieEnd = document.cookie.indexOf(';',cookieStart);
				if(cookieEnd == -1){
					cookieEnd = document.cookie.length;
				}
			}else{
				return false;
			}
			cookieValue = document.cookie.substring(cookieStart+cookieName.length,cookieEnd);
			return cookieValue;
		}
		function deleteCookie(key){
			document.cookie = key + '=;expires='+new Date(0);
		}
//		creatCookie('username','xu',getDate(1));
//		deleteCookie('username');
//		creatCookie('username','xu',getDate(1));
//		alert(getCookie('username'));
//		alert(getCookie('name'));