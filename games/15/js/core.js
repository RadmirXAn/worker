var mouseX = 0;
var mouseY = 0;

function updateCoords(event) {
  mouseX = event.clientX - event.currentTarget.x;
  mouseY = event.clientY - event.currentTarget.y;
}

var cells = [1, 9, 2, 3, 4, 5, 11, 6, 8, 13, 14, 0, 12, 10, 7, -1];

var checkWin = function(){
	for(var i=0; i<15; i++){
		if(cells[i]!=i){
			return;
		}
	}
	alert("YOU WIN!!!");
};

var cellDown = function(event){
	var ct = event.currentTarget;
	var x = ct.x;
	var y = ct.y;
	var dx = Math.floor(x/55);
	var dy = Math.floor(y/55);
	var cx = dx+1;
	var cy = dy;
	var index = 0;
	var oldIndex = 0;
	function checkAndMoveCell(){
		index = cx + cy*4;
		if(cells[index]==-1){
			oldIndex = dx + dy*4;
			cells[index]=cells[oldIndex];
			cells[oldIndex]=-1;
			ct.x = cx*55;
			ct.y = cy*55;
			//checkWin();
			setTimeout(checkWin, 100);
			return true;
		}
		return false;				
	};

	if(cx<=3){
		if(checkAndMoveCell()){
			return;
		};
	}

	cx = dx-1;
	cy = dy;			
	if(cx>=0){
		if(checkAndMoveCell()){
			return;
		};			
	}

	cx = dx;
	cy = dy-1;			
	if(cy>=0){
		if(checkAndMoveCell()){
			return;
		};			
	}

	cx = dx;
	cy = dy+1;			
	if(cy<=3){
		if(checkAndMoveCell()){
			return;
		};			
	}	
}

var core = function(){
	var div_back = div();
	var div_back_x = 0;
	var div_back_y = 0;
	//div_back.background = "#D4D4D4";
	div_back.background = "url(raw/cells_inactive.png)";
	div_back.overflow = "hidden";
	div_back.width = 220;
	div_back.height = 220;	
	div_back.x = (800-220)/2;
	div_back.y = (600-220)/2;
	div_back.onmousemove = updateCoords;
	div_back.cursor = "auto";

	for(var i = 0 ; i<15; i++){
		var cell = div();
		var index = cells[i];
		var dy = Math.floor(index/4);
		var dx = index - dy*4;
		cell.background = "url(raw/cells.png)";
		cell.width = 55;
		cell.height = 55;
		cell.x = 55*(i%4);
		cell.y = 55*(Math.floor(i/4));
		cell.backgroundPosition(-dx*55, -dy*55);
		cell.cursor = "pointer";
		cell.onmousedown = cellDown;
		div_back.appendChild(cell);
	}
	
};