function buildList(list)
{
	var result = [] ;
	for(var i = 0 ; i < list.length; i++){
		(function(i){var item = 'item' + list[i];
		result.push(function(){console.log(item + ' ' + list[i])});
		})(i);
	}

	return result;
}

function testList(){
	var fnlist = buildList([1,2,3]);
	for(var j = 0 ; j < fnlist.length ; j++)
	{
		fnlist[j]();
	}
}

testList();
