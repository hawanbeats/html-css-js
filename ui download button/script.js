// ICONS CALLBACK
hicon.replace();

// SVGs
$("#svgDribbble").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #dribbble");
$("#svgTwitter").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #twitter");
$("#svgHicon").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #hicon");


/*

ADD NEW ICONS
Took it from
http://hicon.cosm.ws/

And then replace the icon name in load-hicon.
<i load-hicon="heart"></i>

*/

// NEW CODE HERE

var btn = $("#btn");
var btns = $(".buttons");
var time = 299*3;

btn.click(() => {
  btns.toggleClass("d2");
  $(".cover").toggleClass("on");
  setTimeout(() => {
    btns.toggleClass("d3").toggleClass("d2");
  },time*2.2); 
  setTimeout(() => {
    btns.toggleClass("d3").toggleClass("d4");
  },time*6);
  setTimeout(() => {
    btns.toggleClass("d4");
    $(".cover").toggleClass("on");
  },time*6.8);
});

// Feedback
$(".buttons-wrap").click(function( e ) {
  var parentOffset = $(this).offset();
  var dot = 20;
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  var X = parseInt(relX, 10);
  var Y = parseInt(relY, 10); 


  if (X >= 0 && X <= 215 && Y >= 0 && Y <= 50) {
    $(".feedback").transition({
      y: Y - dot*1.5,
      x: X - dot*1.3
    }, 0, "snap");

    $(".fb-wv-1") .addClass("fb-wv-1-a");
    setTimeout(function() {
      $(".fb-wv-1").removeClass("fb-wv-1-a");
    },399);
  }
});