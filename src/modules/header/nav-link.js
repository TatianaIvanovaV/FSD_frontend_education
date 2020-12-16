'use strict';
import $ from 'jquery'
$('.header__link').click(function(e){ 
  
  e.preventDefault(); 
  $(this).children('.header__icon--down').toggleClass('header__icon--rotate');               
  var item = $(this).closest('li'); 
  var sub = item.find('.header__sub-list');
  sub.slideToggle();
  
 });