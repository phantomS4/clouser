function greeting()
{
	var text = 'Hello clouser!!';
	return function(){
		console.log(text);
	};
}

var sayHello = greeting();
sayHello();
