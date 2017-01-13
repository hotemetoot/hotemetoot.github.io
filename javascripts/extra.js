$(document).ready(function(){
    var speed = Math.floor(Math.random()* 8 + 1) *10;
    var multiplier = Number(Math.round(Math.random()+"e+1")+"e-1")+ Math.floor(Math.random()*3+1);
    var distance = +(multiplier*speed).toFixed(2) ;
    var time = +(distance/speed).toFixed(2);
    $("#speed").text(speed);
    $("#distance").text(distance);
    //$("#time").text(time);
    $("#answer").text(time*60+" minutes"); 
    $("#answer").hide(); 
  $("#new").click(function(){
    var speed = Math.floor(Math.random()* 8 + 1) *10;
    var multiplier = Number(Math.round(Math.random()+"e+1")+"e-1")+ Math.floor(Math.random()*3+1);
    var distance = +(multiplier*speed).toFixed(2) ;
    var time = +(distance/speed).toFixed(2);
    $("#speed").text(speed);
    $("#distance").text(distance);
    //$("#time").text(time);
    $("#answer").text(time*60+" minutes"); 
    $("#answer").hide(); 
  });
  $("#show").click(function(){
    $("#answer").show();        
  });
});
