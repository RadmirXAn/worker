var div = function(){
	var element = document.createElement('div');

	element.style.position = "absolute";

	//-backgroundPosition: 300px 150px;
	element.backgroundPosition = function(x, y){
		element.style.backgroundPosition = x+"px "+y+"px";
	}

	//-background-size: 300px 150px;
	element.backgroundSize = function(width, height){
		element.style.backgroundSize = width+"px "+height+"px";
	}

	//-overflow: (visible | hidden | scroll | auto)
	element._overflow = 0;
	Object.defineProperty(element, 'overflow', {
	  get: function() { return element._overflow; },
	  set: function(value) { element._overflow = value; element.style.overflow = value },
	  enumerable: true,
	  configurable: true
	});

	//-background (url(raw/icon.png) | #D4D4D4)
	element._background = 0;
	Object.defineProperty(element, 'background', {
	  get: function() { return element._background; },
	  set: function(value) { element._background = value; element.style.background = value },
	  enumerable: true,
	  configurable: true
	});

	//-width
	element._width = 0;
	Object.defineProperty(element, 'width', {
	  get: function() { return element._width; },
	  set: function(value) { element._width = value; element.style.width = value+"px"; },
	  enumerable: true,
	  configurable: true
	});

	//-height
	element._height = 0;
	Object.defineProperty(element, 'height', {
	  get: function() { return element._height; },
	  set: function(value) { element._height = value; element.style.height = value+"px"; },
	  enumerable: true,
	  configurable: true
	});

	//-x
	element._x = 0;
	Object.defineProperty(element, 'x', {
	  get: function() { return element._x; },
	  set: function(value) { element._x = value; element.style.left = value+"px"; },
	  enumerable: true,
	  configurable: true
	});
	
	//-y
	element._y = 0;
	Object.defineProperty(element, 'y', {
	  get: function() { return element._y; },
	  set: function(value) { element._y = value; element.style.top = value+"px"; },
	  enumerable: true,
	  configurable: true
	});	
	
	//-opacity;
	element._opacity = 0;
	Object.defineProperty(element, 'opacity', {
	  get: function() { return element._opacity; },
	  set: function(value) { element._opacity = value; element.style.opacity = value; },
	  enumerable: true,
	  configurable: true
	});
	
	//-cursor [ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]
	element._cursor = "auto";
	Object.defineProperty(element, 'cursor', {
	  get: function() { return element._cursor; },
	  set: function(value) { element._cursor = value; element.style.cursor = value; },
	  enumerable: true,
	  configurable: true
	});	
	
	//-pointerEvents: (auto | none)
	element._pointerEvents = "auto";
	Object.defineProperty(element, 'pointerEvents', {
	  get: function() { return element._pointerEvents; },
	  set: function(value) { element._pointerEvents = value; element.style.pointerEvents = value; },
	  enumerable: true,
	  configurable: true
	});
	
	document.body.appendChild(element);
	return element;	
};