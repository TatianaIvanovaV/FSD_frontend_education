
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

  


  /*--- carousel-in-cards  --*/
  $('.rooms__photos').slick({
    dots: true,
    speed: 200,
    arrows: true
  });

});


/*--- air-datepicker calendar --*/
$('.date').datepicker({
  multipleDates: 2,
  inline: false,
  offset: 5,
  /*minDate: new Date(),*/
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
  prevHtml: '<span class="material-icons">arrow_back</span>',
  nextHtml: '<span class="material-icons">arrow_forward</span>'
});



/*let applyButtons = document.querySelectorAll('.apply-button');
let datepickers = document.querySelectorAll('.datepicker');
let dateDropdowns = document.querySelectorAll('.datedropdown__container');
  for (let i = 0; i < dateDropdowns.length; i++) {

      dateDropdowns[i].addEventListener('click', (e) => {
          if (!e.target.classList.contains('input__label') && e.target != dateDropdowns[i]) {
              dateDropdowns[i].querySelector('.datedropdown__input_first').focus();
          }
      })

      applyButtons[i].addEventListener('click', () => {
          datepickers[i].classList.remove('active');
          datepickers[i].style.left = '-100000px';
          datepickers[i].style.top = '1601px';
      })

      $('.datedropdown__input_first').eq(i).datepicker({ 
          onSelect: function (fd, d, picker) { 
            $('.datedropdown__input_first').eq(i).val(fd.split(",")[0]);
            $('.datedropdown__input_second').eq(i).val(fd.split(",")[1]);
          }
      });
  }*/

$('.start-one').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $(".start-one").val(fd.split("-")[0]);
    $(".end-one").val(fd.split("-")[1]);
  },
  offset: 5,
  range: true,
  multipleDatesSeparator: ' - ',
  language: {
    dateFormat: 'dd.mm.yyyy'
    },
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
  prevHtml: '<span class="material-icons">arrow_back</span>',
  nextHtml: '<span class="material-icons">arrow_forward</span>'
});
let applyButton = '<span class="datepicker--button apply-button" data-action="hide">Применить</span>';
$('.datepicker--button[data-action="clear"]').each(function( index ) { $(applyButton).insertAfter($(this)); 
});