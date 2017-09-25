$(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    navigation: true,
    slidesNavigation: true,
    anchors: anchors,
    menu: '#menu',
    slideSelector:'fp-slide',
    onLeave: function(index, nextIndex, direction){
      sectionHandler(nextIndex);
    },
    afterLoad: function(anchorLink, index){
      sectionHandler(index);
    }
  });
});

function sectionHandler(index) {
  if (index > 1) {
    $('.navbar')
      .addClass('navbar-dark bg-primary')
      .css('top', 0);

    $('.navbar-brand')
      .fadeIn();

    $('.logo-container')
      .fadeOut();

  }
  else {
    $('.navbar')
      .removeClass('navbar-dark bg-primary')
      .css('top', '80px');

    $('.navbar-brand')
      .fadeOut();

    $('.logo-container')
      .fadeIn();
  }
  console.log(index);
};

var brickCarousel = $('#brickCarousel').carousel({
  interval: false,
  keyboard: false
})

function selectBrick(element, i){
  $('.brick-wrapper').removeClass('active');
  $(element).parent().addClass('active');
  brickCarousel.carousel(i);

  // var scaleTransform = ' scale(1.2)';
  // $('.brick').each(function( index ) {
  //   var transform = $(this).css('transform').replace(scaleTransform, '');
  //   console.log(transform);
  //   $(this).css('transform', transform);
  // });
  // $(element).css('transform', $(element).css('transform') + scaleTransform);
}

