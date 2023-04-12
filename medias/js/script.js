(function() {

  $(function() {
    var $container;
    $(".texte_article").fitVids({
      customSelector: "iframe[src^='http://www.dailymotion.com']"
    });
    if (window.innerWidth > 900) {
      $('img.full').each(function() {
        var urlBig;
        urlBig = $(this).data('big');
        return $(this).attr("src", urlBig);
      });
    }
    $(".collapse").each(function() {
      return $('button[data-target="' + $(this).attr('id') + '"]').on('click', function() {
        return $('#' + $(this).data('target')).toggleClass('in');
      });
    });
    if ($('.camera_wrap').length !== 0) {
      $('.camera_wrap').camera({
        fx: 'simpleFade',
        height: '61%',
        loaderOpacity: .4,
        overlayer: false,
        mobileAutoAdvance: false,
        thumbnails: true
      });
    }
    $container = $('.masonry');
    if ($('#programme').length) {
      $(window).bind('scrollstop ', function() {
        if ($(window).innerWidth() > 800) {
          return $('#fixed').animate({
            marginTop: $(window).scrollTop()
          }, 600, 'easeOutQuad');
        } else {
          return $('#fixed').css('marginTop', 0);
        }
      });
    }
    return $container.imagesLoaded(function() {
      return $container.masonry({
        itemSelector: '.box',
        columnWidth: function(containerWidth) {
          return containerWidth / 3;
        }
      });
    });
  });

}).call(this);
