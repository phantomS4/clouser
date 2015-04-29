function sayAlice(){
	var sayAlert = function(){console.log(alice)};
	var alice = 'Hello Alice';

	return sayAlert;
}

var helloAlice = sayAlice();

helloAlice();
//外部函数所有局部变量都在闭包内，即使这个变量声明在内部函数定义之后
