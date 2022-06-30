const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = "100vh";
    if(i%2 == 0) items[i].style.background = "black";
    else items[i].style.background = "skyblue";
  }  
  cssScrollSnapPolyfill();
};

init();