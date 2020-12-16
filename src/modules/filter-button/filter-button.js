'use strict';
import $ from 'jquery'
$('.filter__button').on('click', function (e) {
  $(e.currentTarget).closest('.filter')
    .find('.filter__wrapper')
    .toggleClass('filter__wrapper--visible')
});
