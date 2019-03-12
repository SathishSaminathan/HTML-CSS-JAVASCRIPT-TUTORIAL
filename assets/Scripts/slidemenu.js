$(document).ready(function() {
  $(".section-area").hide();
  var count = 0;
  var counter = setInterval(function() {
    if (count < 101) {
      $(".count").text(count + "%");
      $(".c-loader").css("width", count + "%");
      count++;
    } else {
      $('.counter-loader').fadeOut(1500);
      $(".section-area").show();
      clearInterval(counter);
    }
  }, 35);
  $(".nav-icon").click(function() {
    $(".nav-bar").toggleClass("active");
    $(".nav-icon").toggleClass("active");
    $('.section-area').fadeToggle(500);
    var oldText = $(".menu-value").text();
    var newText = $(".menu-value").data("text");
    $(".menu-value")
      .text(newText)
      .data("text", oldText);
  });
});
