var core = function(){
	//Сцена
	var _stage = stage("#D4D4D4", 800, 600);
	//Игра
	//var _map = [1, 9, 2, 3, 4, 5, 11, 6, 8, 13, 14, 0, 12, 10, 7, -1];
	var _map = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, -1];
	var _game = createGame(55, 55, "url(raw/cells.png)", "url(raw/cells_inactive.png)", 220, 220, _map);
	_game.x = (800-220)/2;
	_game.y = (600-220)/2;
	_stage.appendChild(_game);
};