'use strict';
import 'air-datepicker'

$( document ).ready(function() {
  var now = new Date();
  var endDate = new Date(now.getTime() + 365*24*60*60*1000);
  var $start = $('#start');
  var $end = $('#end');
  var $twofields = $('.input__datepickers');
  var $onefield = $('.input__date');

  $onefield.datepicker({
    multipleDates: 2,
    inline: false,
    offset: 5,
    minDate: now,
    maxDate: endDate,
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

  $twofields.datepicker({
    offset: 5,
    multipleDatesSeparator: ' - ',
    language: {
      dateFormat: 'dd.mm.yyyy'
      },
    clearButton: true,
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    minDate: now,
    maxDate: endDate,
    range: true,
      onSelect: function (fd, data) {
        $end.data('datepicker')
                .update('selectedDates', $start.data('datepicker').selectedDates);
        var start = fd.split('-')[0];
        var end = fd.split('-')[1];
        if (end) {
          $start.val(start);
          $end.val(end);
        } else {
          $end.val('')
        }
    } 
  });
  let applyButton = '<span class="datepicker--button apply-button" data-action="hide">Применить</span>';
  $('.datepicker--button[data-action="clear"]').each(function( index ) { $(applyButton).insertAfter($(this)); 
  });
  var datesW=$('#dates').width();
  $('.datepicker').attr('style', 'width: '+datesW+'px !important');
})
