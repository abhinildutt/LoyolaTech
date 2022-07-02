// let items = documents.getElementsByClassName("node");
// var ind = 0;
// // document.addEventListener('scroll', () => {
// //   if (document.body.scrollTop > 50) {
// //     items[1].style.background = "blue";
// //   }
// // })
const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = "100vh";
    items[i].style.background = "black";
  }  
  cssScrollSnapPolyfill();
  const scrollEvent = () => {
    if (window.scrollTop > 50) {
        document.getElementById("node_here").style.opacity = "0";
    } 
  }
  window.addEventListener('scroll', scrollEvent);
};

init();


