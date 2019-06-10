var SCRIPTS = [
"js/Test.js"
];
function onScriptsLoaded(){
	console.log("JS scripts loaded.");
};
function onScriptEror(url){
	console.log("script do not loaded -> "+url);
};
window.onload = function() {
	ImportScripts(SCRIPTS, onScriptsLoaded, onScriptEror);
};