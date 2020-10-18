
'use strict';

import $ from 'jquery'
import 'slick-carousel'
import noUiSlider from 'nouislider'
import 'air-datepicker'
/*import Chart from 'chart.js'*/

/*--- chart --*/

 /* var myDoughnut = new Chart( document.getElementById('don'), 
  {	
    type: 'doughnut',
    data: {
      datasets: [{
        data: [25, 25, 50],
        labels: [
          'Red',
          'Yellow',
          'Blue'
      ],backgroundColor: [
      ],
      }],
    },
    options: {
  }});*/

/*-- range-slider --*/
var unconstrainedSlider = document.getElementById('unconstrained');
var unconstrainedValues = document.getElementById('unconstrained-values');
noUiSlider.create(unconstrainedSlider, {
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
unconstrainedSlider.noUiSlider.on('update', function (values) {;
  unconstrainedValues.innerHTML = values.join(' - ');
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


/*---  like ---*/
/*document.addEventListener('click', ({ target: t }) => {
  if (t.classList.contains('.reviews__like')) {
    const index = [...document.querySelectorAll('.reviews__like')].indexOf(t);
    const count = document.querySelectorAll('.reviews__like-num')[index];
    count.classList.toggle('.active');
    count.textContent -= [ 1, -1 ][+count.classList.contains('.active')];
  }
});*/
