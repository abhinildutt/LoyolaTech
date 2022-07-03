// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);

const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = "100vh";
    items[i].style.background = "black";
  }  
};
console.log(document.getElementById("2page").offsetTop);
var scrollbar = () => {

  for(let i = 1; i <= 3; i++) {
    $("#" + i + "node").click(function() {
      $("#cont").css("scroll-snap-type", "none");
      $(".container").animate({
          scrollTop: document.getElementById(i + "page").offsetTop}, 'slow');
    });
      $("#cont").css("scroll-snap-type", "y mandatory");

  }
};



init();
scrollbar();

