(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var start = window.mozAnimationStartTime;  // Only supported in FF. Other browsers can use something like Date.now().
var _actionIndex = 0;
var _frameAction = [];

function frameAction(timestamp) {
	for(_actionIndex=0; _actionIndex < _frameAction.length; _actionIndex++){
		_frameAction[_actionIndex]();
	}
	requestAnimationFrame(frameAction);
}

requestAnimationFrame(frameAction);

var addFrameAction = function(action){
	_frameAction.push(action);
}

var removeFrameAction = function(action){
	var index = _frameAction.indexOf(action);
	if(index>0){
		_frameAction.splice(index, 1);
		_actionIndex--;
	}
}