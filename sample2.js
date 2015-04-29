function setupSome()
{
	var num = 555;
	gAlertNumber=function(){console.log(num)};
	gIncrease = function(){num++};
	gSetNumber = function(x){num = x};
}

setupSome();
gAlertNumber();
gIncrease();
gAlertNumber();
gSetNumber(1);
gAlertNumber();
