$(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    navigation: true,
    slidesNavigation: true,
    anchors: anchors,
    menu: '#menu',
    slideSelector: 'fp-slide',
    responsiveWidth: 768,
    scrollOverflow: true,
    onLeave: function (index, nextIndex, direction) {
      sectionHandler(nextIndex);
    },
    afterLoad: function (anchorLink, index) {
      sectionHandler(index);
    }
  });

  $('#world').load('img/world.svg', function (a) {
    $(this).children()[0].setAttribute('viewBox', "0 0 1000 1000");
    selectCountries(firstSelectedCountries);
  });  
});

function sectionHandler(index) {
  if (index > 1) {
    $('.navbar')
      .removeClass('highlighted');
  }
  else {
    $('.navbar')
      .addClass('highlighted');
  }

  //only animate once, remove animation classes
  var toBeRemoved = $('.fp-section.active .reveal');
  window.setTimeout(function(){toBeRemoved.removeClass('reveal')}, 2000);
}

function selectCountries(codes) {
  $('#world path').css({ fill: "" });
  codes.split(',').forEach(function (e) {
    document.getElementById(e).style.fill = '#fca730';
  });
}