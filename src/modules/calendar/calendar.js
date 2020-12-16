'use strict';
import 'air-datepicker'


$( document ).ready(function() {

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
});