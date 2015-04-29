function newClosure(someNum,someRef){
	var num = someNum;
	var anArray = [1,2,3];
	var ref = someRef;

	return function(x){
		num+=x;
		anArray.push(num);
		console.log(num + ' ' + anArray.toString() + ' ' + ref.someVar);
	};
}

closure1 = newClosure(40,{someVar:'closure 1 '});
closure2 = newClosure(100,{someVar:'closure 2'});

closure1(5);
closure2(-10);
