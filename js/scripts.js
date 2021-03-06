// Everything OK?
console.log('OK');

/* Lettering JS Plugin
* Reference: https://github.com/davatron5000/Lettering.js/wiki
*/

// default
// $('h1').lettering();

// with Words options
$('firstword').lettering('words');

// with Lines options
// $('h1').lettering('lines');

/* Burger Menu
* Reference: https://github.com/mblode/burger
*/
//$('#burger-nav').burger();

/* Media Element Player Plugin
* Reference: https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md
*/
$('video').mediaelementplayer();

// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );

/* Slick Carousel
* Reference: https://github.com/kenwheeler/slick/blob/master/README.markdown
*/
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

/* lightGallery
* Reference: https://github.com/sachinchoolur/lightGallery/blob/master/README.md
*/
$('#thumbnails').lightGallery({
  // lightGallery core
  mode:'lg-zoom-out',
  cssEasing: 'ease',
  speed: 500,
  // thumbnail plugin
  thumbnail:true,
  thumbnailWidth: 100,
  animateThumb: false,
  showThumbByDefault: false,
  // zoom plugin
  zoom:true
}); 
