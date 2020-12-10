'use strict';
import $ from 'jquery'
import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css';

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
  nextHtml: '<span class="material-icons">arrow_forward</span>',
  
});

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

  /*
  var $start = $('.start-one'),
$end = $('.end-one');

$start.datepicker({
  onSelect: function (fd, date) {
    $end.data('datepicker')
    .update('minDate', date);

    $end.focus();
  }
})
$end.datepicker({
  onSelect: function (fd, date) {
    $start.data('datepicker')
    .update('maxDate', date)
  }
})
*/