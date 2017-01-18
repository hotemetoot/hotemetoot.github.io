// upon loading
$(document).ready(function() {
  var speed = Math.floor(Math.random() * 8 + 1) * 10;
  var travelMin = Math.floor(Math.random() * 3 + 1) * 60 + Math.floor(Math.random() * 10) * 6;
  var distance = +(travelMin * speed / 60).toFixed(2);
  var startMin = Math.floor(Math.random() * 120 + 420);
  var h0 = Math.floor(startMin / 60);
  var m0 = startMin % 60;
  if (m0 < 10) {
    m0 = "0" + m0;
  } else {
    m0 = m0;
  }
  pause = Math.floor(Math.random() * 50 + 10);
  var endMin = travelMin + startMin + pause;
  var h1 = Math.floor(endMin / 60);
  var m1 = endMin % 60;
  if (m1 < 10) {
    m1 = "0" + m1;
  } else {
    m1 = m1;
  }
  $("#speed").text(speed);
  $("#distance").text(distance);
  $("#t0").text(h0 + "." + m0);
  $("#t1").text(h1 + "." + m1);
  $("#solution").text(pause + " minutes");
  $("#solution").hide();
});
// the check answer button
$("#check").click(function() {
  var answer = $("#input").val();
  if (answer == pause) {
    alert("Your answer is correct");
  } else {
    alert("Oops, try again");
  }
});
// the new question button
$("#new").click(function() {
  var speed = Math.floor(Math.random() * 8 + 1) * 10;
  var travelMin = Math.floor(Math.random() * 3 + 1) * 60 + Math.floor(Math.random() * 10) * 6;
  var distance = +(travelMin * speed / 60).toFixed(2);
  var startMin = Math.floor(Math.random() * 120 + 420);
  var h0 = Math.floor(startMin / 60);
  var m0 = startMin % 60;
  if (m0 < 10) {
    m0 = "0" + m0
  };
  pause = Math.floor(Math.random() * 50 + 10);
  var endMin = travelMin + startMin + pause;
  var h1 = Math.floor(endMin / 60);
  var m1 = endMin % 60;
  if (m1 < 10) {
    m1 = "0" + m1
  };
  $("#speed").text(speed);
  $("#distance").text(distance);
  $("#t0").text(h0 + "." + m0);
  $("#t1").text(h1 + "." + m1);
  $("#solution").text(pause + " minutes");
  $("#solution").hide();
});
// the show answer button
$("#show").click(function() {
  $("#solution").show();
});