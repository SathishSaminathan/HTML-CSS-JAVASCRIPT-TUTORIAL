$(document).ready(function() {
  $(".nav-icon").click(function() {
    $(".nav-bar").toggleClass("active");
    $(".nav-icon").toggleClass("active");
    // $('.section-area').toggle();
    var oldText = $(".menu-value").text();
    var newText = $(".menu-value").data("text");
    $(".menu-value")
      .text(newText)
      .data("text", oldText);
  });
});
