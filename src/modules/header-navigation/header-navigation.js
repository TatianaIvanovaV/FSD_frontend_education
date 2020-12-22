'use strict';

var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
var body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let links = document.querySelectorAll(".nav-head__link");
  
  for (let i = 0; i < links.length; i++) {
      let listLink = links[i].parentElement;
      let subMenu = links[i].nextElementSibling;
      let thisArrow = links[i].firstElementChild;

      listLink.classList.add("parent")
      links[i].addEventListener("click", function() {
        subMenu.classList.toggle("open");
        thisArrow.classList.toggle("rotate");
    })
  }
} else {
  body.classList.add("mouse");
}