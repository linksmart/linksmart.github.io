$(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    navigation: true,
    anchors: anchors,
    menu: '#menu',
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
      .addClass('navbar-dark bg-dark')
      .css('top', 0);

    $('.navbar-brand')
      .fadeIn();

    $('.logo-container')
      .fadeOut();

  }
  else {
    $('.navbar')
      .removeClass('navbar-dark bg-dark')
      .css('top', '80px');

    $('.navbar-brand')
      .fadeOut();

    $('.logo-container')
      .fadeIn();
  }
  console.log(index);
};
