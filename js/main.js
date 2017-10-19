$(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    navigation: true,
    slidesNavigation: true,
    anchors: anchors,
    menu: '#menu',
    slideSelector:'fp-slide',
    responsiveWidth:768,
    // scrollOverflow:true,
    onLeave: function(index, nextIndex, direction){
      sectionHandler(nextIndex);
    },
    afterLoad: function(anchorLink, index){
      sectionHandler(index);
    }
  });


  $('#world').load('img/world.svg', function(a) {
    $(this).children()[0].setAttribute('viewBox',"0 0 1000 1000");
  });  
});

function sectionHandler(index) {
  if (index > 1) {
    $('.navbar')
      .removeClass('highlighted')
      // .css('background-color', '#555555')
      // .css('top', 0);


  }
  else {
    $('.navbar')
       .addClass('highlighted');
      // .css('background-color', '')
      // .css('top', '60px');

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

