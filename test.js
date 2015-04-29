var parent = function()
{
	var name = 'parent';
	var age = 23;

	var child = function()
	{
		var childName = 'child';
		console.log('the name:' + name + ' ' + age + ' ' + childName);
	}

child();
}

parent();

var adder = function(x){
	var base = x;
	return function(n){
		return n+base;
	}
}

var add10 = adder(10);
console.log(add10(5));
var add20 = adder(20);
console.log(add20(3));

var myObject = function(){
	this.value = 100;
}

var my = new myObject();
console.log(my.value);