//Сцена
var stage = function(back, width, height){
	var div_stage = div();
	div_stage.x = 0;
	div_stage.y = 0;
	div_stage.width = width;
	div_stage.height = height;	
	div_stage.background = back;
	div_stage.cursor = "auto";
	div_stage.overflow = "hidden";
	return div_stage;
}
//Сетка
var grid = function(back, width, height){
	var div_grid = div();
	div_grid.background = back;
	div_grid.width = width;
	div_grid.height = height;
	div_grid.cursor = "auto";
	return div_grid;	
}
//Фишка
var chip = function(back, width, height, index){
	var div_chip = div();
	div_chip.index = index;
	div_chip.background = back;
	div_chip.width = width;
	div_chip.height = height;	
	div_chip.cursor = "pointer";
	return div_chip;
};
//Подсказка
var tip = function(back, width, height, index){
	var div_tip = div();
	div_tip.index = index;
	div_tip.background = back;
	div_tip.width = width;
	div_tip.height = height;
	return div_tip;	
}