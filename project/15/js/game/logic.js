var chips = [];
var cells = [];
var tips = [];
var tipsRes = [];
var chipH = 0;
var chipW = 0;

var updateTip = function(index){
	if(index<0){
		return;
	}
	
	var oldIndex = cells.indexOf(index);
	var dy = Math.floor(oldIndex/4);
	var dx = oldIndex - dy*4;
	
	var check = checkMovement(oldIndex);
	
	var tip_div = tips[index];
	
	switch(check){
		case 1:{
			tip_div.background = tipsRes[1];
			tip_div.x = chipW;
			tip_div.y = 0;
			break;
		}
		case 2:{
			tip_div.background = tipsRes[2];
			tip_div.x = -chipW;
			tip_div.y = 0;
			break;
		}
		case 3:{
			tip_div.background = tipsRes[3];
			tip_div.x = 0;
			tip_div.y = chipW;
			break;
		}
		case 4:{
			tip_div.background = tipsRes[4];
			tip_div.x = 0;
			tip_div.y = -chipW;
			break;
		}
		default: {
			tip_div.background = tipsRes[0];
			tip_div.x = 0;
			tip_div.y = 0;
			break;
		};
	}
	
};

var updateTips = function(){
	for(var i=0; i<16; i++){
		updateTip(cells[i]);
	}
};

var checkWin = function(){
	for(var i=0; i<16; i++){
		if(cells[i]!=-1 && cells[i]!=i){
			return;
		}
	}
	setTimeout(alert, 100, "YOU WIN!!!");
};

var checkMovement = function(chipIndex){
	var dy = Math.floor(chipIndex/4);
	var dx = chipIndex - dy*4;
	
	var cx = dx;
	var cy = dy;
	var index = 0;
	
	cx=dx+1;
	if(cx<=3){
		index = cx + cy*4;
		if(cells[index]==-1){
			return 1;
		}
	}
	
	cx=dx-1;
	if(cx>=0){
		index = cx + cy*4;
		if(cells[index]==-1){
			return 2;
		}
	}
	
	cx = dx;
	
	cy=dy+1;
	if(cy<=3){
		index = cx + cy*4;
		if(cells[index]==-1){
			return 3;
		}
	}
	
	cy=dy-1;
	if(cy>=0){
		index = cx + cy*4;
		if(cells[index]==-1){
			return 4;
		}
	}	
	
	return -1;
};

var cellDown = function(event){
	var ct = event.currentTarget;

	var oldIndex = cells.indexOf(ct.index);
	var dy = Math.floor(oldIndex/4);
	var dx = oldIndex - dy*4;
	var check = checkMovement(oldIndex);
	var cx = dx;
	var cy = dy;
	var index = 0;
	
	switch(check){
		case 1:{
			cx = dx + 1;
			break;
		}
		case 2:{
			cx = dx - 1;
			break;
		}
		case 3:{
			cy = dy + 1;
			break;
		}
		case 4:{
			cy = dy - 1;
			break;
		}
		default: return;
	}

	index = cx + cy*4;
	cells[index]=cells[oldIndex];
	cells[oldIndex]=-1;
	ct.x = cx*chipW;
	ct.y = cy*chipH;
	checkWin();
	updateTips();
}

var createGame = function(chipWidth, chipHeight, activeChips, inactiveChips, gridWidth, gridHeight, map, tipMapRes){
	tipsRes = tipMapRes;
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

			var _tip = tip(tipsRes[0], chipWidth, chipHeight, index);
			_tip.x = 0;
			_tip.y = 0;
			_tip.pointerEvents = "none";
			_chip.appendChild(_tip);
			tips[index]=_tip;
		}	
	}
	updateTips();
	return _grid;
};