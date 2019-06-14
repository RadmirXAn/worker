var SCRIPTS = [
"js/drawable/div.js",
"js/event/requestAnimationFrame.js",
"js/game/component.js",
"js/game/logic.js",
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