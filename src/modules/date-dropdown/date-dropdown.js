import '../calendar/calendar.js';

const $dropdowns = $('.date-picker');
[...$dropdowns].forEach((dropdown) => {initCalendarToggler(dropdown)});


function initCalendarToggler(datepickerArea) {
  const visible = { close: 'close', open: 'open'};

  const $inputs = $(datepickerArea).find('.input__area');

  $(document).on('keydown', (e) => {
    if (e.keyCode === 27 && $(datepickerArea).is(':visible')) {
      toggleDatepicker(visible.close);
    }
  })

  const toggleDatepicker = (action) => {
    const $datepicker = $(datepickerArea).find('.calendar');
    if (action === visible.open) {
      $datepicker.fadeIn(100);
      $(document).on('click', onOutsideCalendarClick);
    }
    if (action === visible.close) {
      $datepicker.fadeOut(100);
      $(document).off('click', onOutsideCalendarClick);
    }
  }
  
  const onOutsideCalendarClick = (e) => {
    const isDatepickerClick = !!$(e.target).closest('.calendar').length;
    const isDatepickerInputClick = !!$(e.target).closest('.input__area').length;
    const isDatepickerNav = !!$(e.target).closest('.datepicker--nav').length;
    const isDatepickerNavAction = !!$(e.target).closest('.datepicker--nav-action').length;
    const isDatepickerDays = !!$(e.target).closest('.datepicker--cell').length;
    const isDatepickerArea = isDatepickerClick || isDatepickerInputClick || isDatepickerNav || isDatepickerDays || isDatepickerNavAction;
  
    if (!$(datepickerArea).is(e.target) && $(datepickerArea).has(e.target).length === 0 && !isDatepickerArea) {
      toggleDatepicker(visible.close);
    }
  }
  
  toggleDatepicker(visible.close);
  
  $inputs.on('click', (e) => {
    e.preventDefault();
    const $datepicker = $(datepickerArea).find('.calendar');

    if (!$datepicker || $($datepicker).is(':hidden')) {
      toggleDatepicker(visible.open);
    } else {
      toggleDatepicker(visible.close);
    }
  });

  $(datepickerArea).find('.apply-button').on('click', () => {
    toggleDatepicker(visible.close);
  })
}
