var core = function(){
	
	var div_back = div();
	div_back.background = "#D4D4D4";
	div_back.overflow = "hidden";
	div_back.width = 800;
	div_back.height = 600;	
	div_back.x = 100;
	div_back.y = 50;
	
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
	div_back.appendChild(div_2);
	
};