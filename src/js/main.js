
'use strict';

import $ from 'jquery'
import 'slick-carousel'
import noUiSlider from 'nouislider'
import 'air-datepicker'

/*-- range-slider --*/
$( document ).ready(function() {
  var slider = document.querySelector('#unconstrained');
  var sliderValues = document.querySelector('#unconstrained-values');
  
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

  /*--- air-datepicker calendar --*/
  $('.date').datepicker({
    multipleDates: 2,
    minDate: new Date(),
    range: true,
    multipleDatesSeparator: ' - ',
    toggleSelected: true,
    language: {
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
    dateFormat: 'dd' + ' ' + 'M',
    },
    clearButton: true,
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
  })
  let datepickersBtns = $('.datepicker--buttons');
  let btnApply = $(
    '<span class="datepicker--button" data-action="select">применить</span>'
    );
    btnApply.appendTo(datepickersBtns);

  /*$('double-datepicker').datepicker({ 
    onSelect: function (fd, d, picker) { 
      $("#start_one").val(fd.split("-")[0]);
      $("#end_one").val(fd.split("-")[1]);
    }
  });*/
});




/*--- carousel-in-cards  --*/
$('.rooms__photos').slick({
  dots: true,
  speed: 200,
  arrows: true
});




