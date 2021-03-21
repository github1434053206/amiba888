//animate动画js，页面过渡动画

window.onload=function(){
	cssw(".cssw");
}

//淡入淡出动画
var cssw =function(a){
	$(a).css({
            "animation-duration":"2500ms"
    });
    $(a).addClass('animated fadeIn')
}

