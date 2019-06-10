var _script = {};
function ImportScript(url, onSucces, onError){
	if(_script[url]!=null){
		return;
	}	
	var script = document.createElement('script');
	script.onload = function() {
		onSucces(url);
	}
	script.onerror = function() {
		onError(url);
	};
	script.src = url;
	document.head.appendChild(script);	
};
function ImportScripts(urls, onComplete, onError){
	var total = urls.length;
	var loaded = 0;
	function onLoded(url){
		loaded++;
		if(total==loaded){
			onComplete();
		}
	};
	for(var i = 0; i<total; i++){
		ImportScript(urls[i], onLoded, onError);
	};
};