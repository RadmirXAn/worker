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

var core = function(){	
	var div_back = div();
	div_back.background = "#FFFFFF";
	div_back.width = 800;
	div_back.height = 600;	
	div_back.x = 0;
	div_back.y = 0;
	
	var w = 1;
	
	for(var i = 0 ; i < 255 ; i++ ){
		div_back.appendChild(box(i*w, 0, w, 50, 255, i, 0));
	}
	
	for(var i = 0 ; i < 255 ; i++ ){
		div_back.appendChild(box((i+255)*w, 0, w, 50, 255-i, 255, 0));
	}
	
	for(var i = 0 ; i < 255 ; i++ ){
		div_back.appendChild(box((i+510)*w, 0, w, 50, 0, 255-i, i));
	}
	
	for(var i = 0 ; i < 255 ; i++ ){
		div_back.appendChild(box((i+765)*w, 0, w, 50, i, 0, 255-i));
	}
	
};