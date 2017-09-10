$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $(".ad-full").show();
}
function PopUpHide(){
    $(".ad-full").hide();
}


jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".ad-full"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
});