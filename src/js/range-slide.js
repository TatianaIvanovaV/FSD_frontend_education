/*-- range-slider --*/
import noUiSlider from 'nouislider'
import $ from 'jquery'

  var rangeSlider = $('#unconstrained');
  var sliderValues = $('#unconstrained-values');
$(document).ready(function(){
  noUiSlider.create(rangeSlider[0], {
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
  rangeSlider[0].noUiSlider.on('update', function (values) {
    sliderValues[0].innerHTML = values.join(' - ');
  });
});