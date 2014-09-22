//run this function on page load; $(document).ready does not wait for all images to load before firing
$(document).ready(function() {
  $(".level-one").on('click', function() {

    $(".level-two").addClass("hide");

    if ($(this).parents("section").hasClass("hide")) {
      $(this).parents().siblings("section").addClass("hide");
      $(this).parents("section").removeClass("hide");
    } else {
      $(this).parents("section").addClass("hide");
    }
  });

  $(".level-two").on('click', function(e) {
    if ($(this).hasClass("hide")) {
      $(this).removeClass("hide");
      $(this).siblings(".level-two").addClass("hide");
    } else {
      $(this).addClass("hide");
    }
  });
})(jQuery);
