var mouseX = 0;
var mouseY = 0;
function updateCoords(event) {
  mouseX = event.clientX - event.currentTarget.x;
  mouseY = event.clientY - event.currentTarget.y;
}

var core = function(){
	
	var div_back = div();
	var div_back_x = 0;
	var div_back_y = 0;
	//div_back.background = "#D4D4D4";
	div_back.background = "url(raw/back.jpg)";
	div_back.overflow = "hidden";
	div_back.width = 800;
	div_back.height = 600;	
	div_back.x = 100;
	div_back.y = 50;
	div_back.onmousemove = updateCoords;

	function move(){
		div_back.backgroundPosition(div_back_x, div_back_y);
		div_back_x++;
		div_back_x%=416;
		div_back_y++;
		div_back_y%=416;
	};
	addFrameAction(move);

	var div_1 = div();
	div_1.background = "url(raw/icon.png)";
	div_1.width = 32;
	div_1.height = 32;
	div_1.x = 0;
	div_1.y = 0;
	div_back.appendChild(div_1);
	
	var div_2 = div();
	div_2.background = "url(raw/icon.png)";
	div_2.width = 32;
	div_2.height = 32;
	div_2.x = div_back.height - 16;
	div_2.y = 120;
	div_2.opacity = 0.5;
	div_back.appendChild(div_2);
	
	function moveDiv2(){
		div_2.x = mouseX-16;
		div_2.y = mouseY-16;
	};
	
	addFrameAction(moveDiv2);
};