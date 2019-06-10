var SCRIPTS = [
"js/drawable/sprite.js",
"js/core.js"
];
function onScriptsLoaded(){
	console.log("JS scripts loaded.");
	core();
};
function onScriptEror(url){
	console.log("script do not loaded -> "+url);
};
window.onload = function() {
	ImportScripts(SCRIPTS, onScriptsLoaded, onScriptEror);
};