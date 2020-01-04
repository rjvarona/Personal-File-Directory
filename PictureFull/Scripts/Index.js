
var controller = new ScrollMagic.Controller();


//-------------------------------------------------all scenes for images on page--------------------------------------------
//var scene = new ScrollMagic.Scene({

//    triggerElement: '.headerImage'

//})
//    .setClassToggle('.headerImage', 'show')
//    .addIndicators()
//    .addTo(controller);

var newscene = new ScrollMagic.Scene({

    triggerElement: '.youtube'

})
    .setClassToggle('.youtube', 'show')
    .addTo(controller);

var newscene2 = new ScrollMagic.Scene({

    triggerElement: '.instagram'

})
    .setClassToggle('.instagram', 'show')
    .addTo(controller);


var newscene3 = new ScrollMagic.Scene({

    triggerElement: '.avacado'

})
    .setClassToggle('.avacado', 'show')
    .addTo(controller);


var newscene5 = new ScrollMagic.Scene({

    triggerElement: '.spotify'

})
    .setClassToggle('.spotify', 'show')
    .addTo(controller);


//----------------------title edits------

//var newscene4 = new ScrollMagic.Scene({

//    triggerElement: '.kanyeWest'

//})
//    .setClassToggle('.kanyeWest', 'makeKanyeBigger')
//    .addIndicators()
//    .addTo(controller);


$(".headerImage").each(function () {
    var tween = TweenMax.from(this, .6, {
        y: -10,
        autoAlpha: 0,
        fontSize: 100,
        delay: 0,
        ease: Power2.easeOut
    }, .1);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -10,
        fontSize: 100,
        reverse: true
    })
        .setTween(tween)
        .addTo(controller)

        ;
});
$(".kanyeWest").each(function () {
    var tween = TweenMax.from(this, .6, {
        y: -10,
        autoAlpha: 0,

        delay: 0,
        ease: Power2.easeOut
    }, .1);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -10,
    
        fontSize: 100,
        reverse: true
    })
        .setTween(tween)
        .addTo(controller)
        ;
});



$(".single-tween-item").each(function () {

    var tween = TweenMax.from(this, .6, {
        y: -10,
        autoAlpha: 0,
        delay: 0,
        ease: Power2.easeOut
    }, .1);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -100,
        reverse: true
    })
        .setTween(tween)
        .addTo(controller)
        ;
});

