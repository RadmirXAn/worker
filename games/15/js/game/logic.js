var chips = [];
var cells = [];
var chipH = 0;
var chipW = 0;

var checkWin = function(){
	for(var i=0; i<16; i++){
		if(cells[i]!=-1 && cells[i]!=i){
			return;
		}
	}
	setTimeout(alert, 100, "YOU WIN!!!");
};

var cellDown = function(event){
	var ct = event.currentTarget;
	var x = ct.x;
	var y = ct.y;
	
	var oldIndex = cells.indexOf(ct.index);
	var dy = Math.floor(oldIndex/4);
	var dx = oldIndex - dy*4;

	var cx = dx+1;
	var cy = dy;
	var index = 0;
	
	function checkAndMoveCell(){
		index = cx + cy*4;
		if(cells[index]==-1){
			cells[index]=cells[oldIndex];
			cells[oldIndex]=-1;
			ct.x = cx*chipW;
			ct.y = cy*chipH;
			checkWin();
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

var createGame = function(chipWidth, chipHeight, activeChips, inactiveChips, gridWidth, gridHeight, map){
	cells = map;
	chipW = chipWidth;
	chipH = chipHeight;
	//Сетка
	var _grid = grid(inactiveChips, gridWidth, gridHeight);	
	//Фишки
	for(var i = 0 ; i<16; i++){		
		var index = map[i];		
		if(index>=0){
			var _chip = chip(activeChips, chipWidth, chipHeight, index);
			var dy = Math.floor(index/4);
			var dx = index - dy*4;
			_chip.x = chipWidth*(i%4);
			_chip.y = chipWidth*(Math.floor(i/4));
			_chip.backgroundPosition(-dx*chipWidth, -dy*chipHeight);
			_chip.onmousedown = cellDown;
			_grid.appendChild(_chip);			
			chips[index]=_chip;			
		}	
	}
	return _grid;
};