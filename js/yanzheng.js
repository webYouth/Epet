function checkYan(){
	var arr1 = cont() + '1234567890';
	var arr = arr1.split('');
	var num1 = Math.floor(Math.random()*35);
	var num2 = Math.floor(Math.random()*35);
	var num3 = Math.floor(Math.random()*35);
	var num4 = Math.floor(Math.random()*35);
	var str = ''+arr[num1]+arr[num2]+arr[num3]+arr[num4];
	return str;
}
function cont(){
	var str = '';
	for(var i = 65;i<91;i++){
		str += String.fromCharCode(i);
	}
	return str;
};