

var core = function(){
	//Сцена
	//var _stage = stage("#D4D4D4", 800, 600);
	var _stage = stage("url(raw/back.png)", 800, 600);
	var div_back_x = 0;
	var div_back_y = 0;
	function move(){
		_stage.backgroundPosition(div_back_x, div_back_y);
		div_back_x++;
		div_back_x%=256;
		div_back_y++;
		div_back_y%=256;
	};
	addFrameAction(move);
	//Игра
	//var _map = [1, 9, 2, 3, 4, 5, 11, 6, 8, 13, 14, 0, 12, 10, 7, -1];
	//var _map = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, -1];
	var _map = [-1, 4, 7, -1, 14, 1, 5, 2, 8, 13, 9, 3, 12, 10, 11, 6];
	var _tip = ["url(raw/tip_0.png)","url(raw/tip_1.png)","url(raw/tip_2.png)","url(raw/tip_3.png)","url(raw/tip_4.png)"];
	var _activeCells = "url(raw/cells.png)";
	var _inActiveCells = "url(raw/cells_inactive.png)";
	var _game = createGame(55, 55, _activeCells, _inActiveCells, 220, 220, _map, _tip);
	_game.x = (800-220)/2;
	_game.y = (600-220)/2;
	_stage.appendChild(_game);
};