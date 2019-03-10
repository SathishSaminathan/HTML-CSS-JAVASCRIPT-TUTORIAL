$(document).ready(function() {
  var right = 0;
  var position = 0;
  // $(".chat-box").fadeIn(1000);
  $(".msg-box").hide();
  $('.compose-message-box').hide();
  $("#chat-head").click(function() {
    $("#chat-body").slideToggle(200);
  });

  $(".msg-head").click(function() {
    $(".msg-wrap").slideToggle(100);
  });

  $(".close-button").click(function() {
    right -= 280;
    console.log("right value...", right);
    $(".msg-box").hide();
  });

  $(".user").click(function() {
    right += 280;
    console.log("right value...", right);
    $(".msg-wrap").show();
    // $(".msg-box").css("right",right);
    $(".msg-box").show();
  });

    $('.compose-message').click(function(e){
      e.stopPropagation();
      $('.compose-message-box').show();
      $(".compose-message-wrap").show();
    })

    $('.compose-message-close-button').click(function(){
      $('.compose-message-box').hide();
    })

  $(".compose-message-head").click(function() {
    $(".compose-message-wrap").slideToggle(100);
  });

  $(".msg-input").keypress(function(e) {
    if (e.keyCode == 13) {
      var msg = $(this).val();
      console.log("entered msg...", msg);
      $(".msg-input").val(null);
    }
  });
});
