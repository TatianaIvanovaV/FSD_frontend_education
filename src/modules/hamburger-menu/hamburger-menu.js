'use strict';
import $ from 'jquery'
$('.hamburger__menu').on('click', function (e) {
  $(e.currentTarget).closest('.header')
    .find('.header__sidebar')
    .toggleClass('header__sidebar--visible')
});
$(".header__overlay, .header__close-button").on("click", function() {
    $(".header__sidebar").removeClass("header__sidebar--visible");
  });

