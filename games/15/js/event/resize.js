var _resizeIndex = 0;
var _resizeAction = [];

function resizeAction() {
	for(_resizeIndex=0; _resizeIndex < _resizeAction.length; _resizeIndex++){
		_resizeAction[_resizeIndex]();
	}
}

document.getElementsByTagName("BODY")[0].onresize = resizeAction;

var addResizeAction = function(action){
	_resizeAction.push(action);
}

var removeResizeAction = function(action){
	var index = _resizeAction.indexOf(action);
	if(index>0){
		_resizeAction.splice(index, 1);
		_resizeIndex--;
	}
}