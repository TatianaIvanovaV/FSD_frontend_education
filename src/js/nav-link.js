$('.header__link').click(function(e){ 
  e.preventDefault();                
  var item = $(this).closest('li'); 
  var sub = item.find('.header__sub-list');
  sub.slideToggle();
 });