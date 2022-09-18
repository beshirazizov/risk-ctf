AOS.init({once: true});

var countDownDate = new Date("Nov 8, 2022 00:00:00").getTime();

var countdown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  if (distance < 0) {
    clearInterval(countdown);
    $("#countdown-wrapper").addClass("d-none")
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#remaining-time").html(days + " gün " + hours + " saat " + minutes + " dəqiqə " + seconds + " saniyə")
  }
}, 1000);
