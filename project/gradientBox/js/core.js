function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

var box = function(x, y, width, height, r, g, b){
	var div_box = div();
	div_box.background = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	div_box.width = width;
	div_box.height = height;	
	div_box.x = x;
	div_box.y = y;
	return div_box;
};
//--+
var rectRG_0 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, i, j, 0);
		}
	}
};
var rectRG_255 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, i, j, 255);
		}
	}
};
//--+
var rectRB_0 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, i, 0, j);
		}
	}
};
var rectRB_255 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, i, 255, j);
		}
	}
};
//--
var rectGB_0 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, 0, i, j);
		}
	}
};
var rectGB_255 = function(dx, dy){
	var w = 1;
	var total = 255;
	for(var j = 0 ; j < total ; j++ ){
		for(var i = 0 ; i < total ; i++ ){
			box(dx+i*w, dy+j*w, w, w, 255, i, j);
		}
	}
};
//--
var core = function(){
	var wh = 255;
	rectRG_0(10+wh,10+wh);
	rectRG_255(10+wh,10+wh*3);
	rectRB_0(10+wh,10);
	rectRB_255(10+wh,10+wh*2);
	rectGB_0(10,10+wh);
	rectGB_255(10+wh*2,10+wh);
};