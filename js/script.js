// const currentLocation = location.href;
// const menuItem = document.querySelector("a");

// const menuLength = menuItem.length;
// console.log(menuItem);
// for (let i = 0; i < menuLength; i++) {
//   if (menuLength[i].href === currentLocation) {
//     menuItem[i].className = "active";
//   }
// }

var header = document.getElementById("active-list");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
