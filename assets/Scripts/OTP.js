$(document).ready(function() {
  var charLimit = 1;
  $(".otp_container").click(() => {
    $("#input_1").focus();
  });
  $(".inputs")
    .keydown(function(e) {
      var keys = [
        8,
        9,
        /*16, 17, 18,*/ 19,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        45,
        46,
        144,
        145,
        105,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104
      ];
      if (e.which == 8 && this.value.length == 0) {
        $(this)
          .prev(".inputs")
          .focus();
      } else if ($.inArray(e.which, keys) >= 0) {
        return true;
      } else if (this.value.length >= charLimit) {
        $(this)
          .next(".inputs")
          .focus();
        return false;
      } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
        return false;
      }
    })
    .keyup(function() {
      if (this.value.length >= charLimit) {
        if ($(this).is(":last-child")) {
          $(".inputs").val("");
          $("#input_1").focus();
        } else {
          $(this)
            .next(".inputs")
            .focus();
          return false;
        }
      }
    });
});
