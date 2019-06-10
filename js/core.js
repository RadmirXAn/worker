var core = function(){
	
	var sprite_1 = sprite();
	sprite_1.imageURL("raw/icon.png");
	sprite_1.width(32);
	sprite_1.height(32);
	sprite_1.setX(100);
	sprite_1.setY(100);
	
	var sprite_2 = sprite();
	sprite_2.imageURL("raw/icon.png");
	sprite_2.width(32);
	sprite_2.height(32);
	sprite_2.setX(120);
	sprite_2.setY(120);
	
	sprite_1.appendChild(sprite_2);
};