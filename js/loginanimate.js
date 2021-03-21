//animate登录页面动画js

window.onload=function(){
	cssw(".animates");
	cssw2(".animates2");
}

//flip动画
var cssw =function(a){
	$(a).css({
            "animation-duration":"1200ms"
    });
    $(a).addClass('animated flip')
}
//bounceInLeft动画
var cssw2 =function(a){
	$(a).css({
            "animation-duration":"2000ms"
    });
    $(a).addClass('animated bounceInLeft')
}
