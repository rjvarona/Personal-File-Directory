// init Isotope
// init Isotope

var $grid = $('.grid').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});


var filters = {};



$('.filters').on('change', function (event) {
    var $select = $(event.target);
    // get group key
    var filterGroup = $select.attr('value-group');
    // set filter for group
    filters[filterGroup] = event.target.value;
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    filteredResult = filters;

    $grid.isotope({ filter: filterValue });
});



$('.button-reset').on('click', function () {
    // reset filters

    filters = {};

    $grid.isotope({ filter: '*' });
});



// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}
// this is for ecko light picture slide show
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



var controller = new ScrollMagic.Controller();

$(".headerEffect").each(function () {

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

$(".test1").each(function () {

    var tween = TweenMax.from(this, .6, {
        y: -20,
        autoAlpha: 0,
        opacity: 1,
        delay: 0,
        ease: Power2.easeOut
    }, .1);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -100,
        opacity: 1,
        reverse: true
    })
        .setTween(tween)
        .addTo(controller)
    
        ;
});