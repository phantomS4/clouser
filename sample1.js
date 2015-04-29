function say667(){
	var num = 666;
	var sayAlert = function(){console.log(num);}
	num++;
	return sayAlert;
}

var sayAlert = say667();
sayAlert();
//闭包中的局部变量是引用而非拷贝
