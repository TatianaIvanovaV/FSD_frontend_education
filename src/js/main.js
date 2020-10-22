
'use strict';

import $ from 'jquery'
import 'slick-carousel'
import noUiSlider from 'nouislider'
import 'air-datepicker'

/*-- range-slider --*/
$( document ).ready(function() {
  var slider = document.getElementById('unconstrained');
  var sliderValues = document.getElementById('unconstrained-values');
  
  noUiSlider.create(slider, {
  start: [5000, 10000],
  behaviour: 'unconstrained-tap',
  connect: true,
  range: {
      'min': 0,
      'max': 15000,
  },
  format: {
    from: function(value) {
          return parseInt(value);
        },
    to: function(value) {
          return parseInt(value).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')+ "₽";
        }
    },
    
  });
  slider.noUiSlider.on('update', function (values) {
    sliderValues.innerHTML = values.join(' - ');
  });
});




/*--- carousel-in-cards  --*/
$('.rooms__photos').slick({
  dots: true,
  speed: 200,
  arrows: true
});


/*--- air-datepicker calendar --*/
/*$('.datepicker-here').datepicker({
  inline: true,
  multipleDates: 2,
  
})*/

