
'use strict';

import $ from 'jquery'
import 'slick-carousel'
import noUiSlider from 'nouislider'
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
          return parseInt(value)+ "₽";
        }
    },
    
});
unconstrainedSlider.noUiSlider.on('update', function (values) {;
  unconstrainedValues.innerHTML = values.join(' - ');
});