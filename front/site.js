$(document).ready(function() {

    var registerCount = function() {
        $.post({
            url: "",
            async: true,
            success: function (data) {
                updateOutput(data)
            },
            cache: false
        });
    };

    var getCount = function() {
        $.post({
            url: "",
            async: true,
            success: function (data) {
                updateOutput(data);
            },
            cache: false
        });
    };

    var updateOutput = function(count) {
        $("#counter").html(count)
    };

    var $button = document.querySelector("#no-button");
    $button.addEventListener('click', function() {
      var duration = 0.3,
          delay = 0.08;
      TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
      TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
      TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
    });

    // get current count on an interval
    setInterval(getCount(), 1000);

    $("body").fadeIn(1000);
    $("#no-button").click(function() {

        registerCount();
    });
});