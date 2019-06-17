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

var line = function(dx, dy, dr, dg, db, r, g, b){
	var w = 1;
	var total = 255;
	for(var i = 0 ; i < total ; i++ ){
		box(dx+i*w, dy, w, 50, 255*r+i*dr, 255*g+i*dg, 255*b+i*db);
	}
};

var lineB = function(dx, dy, dr, dg, db, r, g, b){
	var w = 1;
	var total = 255;
	for(var i = 0 ; i < total ; i++ ){
		box(dx+i*w, dy, w, 1, r+i*dr, g+i*dg, b+i*db);
	}
};

var core = function(){
	//dx, dy, dr, dg, db, r, g, b
	line(255*0,0, 1,0,1, 0,0,0);
	line(255*1,0, -1,0,0, 1,0,1);
	line(255*2,0, 0,1,0, 0,0,1);
	line(255*3,0, 0,0,-1, 0,1,1);
	line(255*4,0, 1,0,0, 0,1,0);
	line(255*5,0, 0,-1,0, 1,1,0);
	line(255*6,0, -1,0,0, 1,0,0);
	//--------------------------
	line(255*0,60, 1,0,0, 0,0,0);
	line(255*1,60, -1,1,0, 1,0,0);
	line(255*2,60, 1,0,0, 0,1,0);
	line(255*3,60, -1,-1,1, 1,1,0);
	line(255*4,60, 1,0,0, 0,0,1);
	line(255*5,60, -1,1,0, 1,0,1);
	line(255*6,60, 1,0,0, 0,1,1);
	//--------------------------
	line(255*0,120, 1,0,0, 0,0,0);
	line(255*1,120, 0,1,0, 1,0,0);
	line(255*2,120, -1,0,0, 1,1,0);
	line(255*3,120, 1,-1,1, 0,1,0);
	line(255*4,120, 0,0,-1, 1,0,1);
	line(255*5,120, -1,0,0, 1,0,0);
	//--------------------------
	
	var colors = [
		[0,0,0],
		[1,0,0],
		[0,1,0],
		[1,1,0],
		[0,0,1],
		[1,0,1],
		[0,1,1],
		[1,1,1]
	];
	var color_1 = [0,0,0];
	var color_2 = [0,0,0];
	for(var j = 0; j < 7; j++){
		for(var i = 0; i < (7-j); i++){
			color_1 = colors[j];
			color_2 = colors[j+1+i];
			line(260*i,180+60*j, color_2[0]-color_1[0],color_2[1]-color_1[1],color_2[2]-color_1[2], color_1[0],color_1[1],color_1[2]);
		}
	}
};