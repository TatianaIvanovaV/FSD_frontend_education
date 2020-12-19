
import 'air-datepicker';

const datepickers = $('.calendar');
[...datepickers].forEach((datepicker) => {initCalendar(datepicker)});

function initCalendar(datepickerArea) {
  const monthes = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  
  const minDate = new Date();
  const maxDate  = new Date();
  maxDate.setFullYear(minDate.getFullYear() + 1);
  
  
  
  const parseDate = (date) => {
    const YYYY = date.getFullYear();
    const MM = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const DD = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${DD}.${MM}.${YYYY}`;
  }
  
  const parsePeriod = (dates) => {
    const period = dates.map((date) => `${date.getDate()} ${monthes[date.getMonth()]}`);
    return period.join(' – ');
  }

  const handleApplyDates = (dp) => {
    const dpInputs = dp.$datepicker.closest('.date-picker').find('.input__datepickers');
    if (dpInputs.length === 2) {
      dp.selectedDates.forEach((date, index) => {
        const dateString = parseDate(date);
        dpInputs.eq(index).val(dateString);
      });
    } else if (dpInputs.length === 1) {
      const period = parsePeriod(dp.selectedDates);
      dpInputs.eq(0).val(period);
    }
  }
  const getDatesPeriod = (date) => {
    const period = date.split(' – ');
    const dates = period.map((datePeriod) => {
      const [day, month] = datePeriod.split(' ');
      const monthNumber = monthes.findIndex((monthWord) => month === monthWord);
      const currentDate = new Date();
      const selectDate = new Date(currentDate.getFullYear(), monthNumber, day);
      if (selectDate < currentDate) {
        selectDate.setFullYear(currentDate.getFullYear() + 1)
      }
      return selectDate;
    });
    return dates
  }
    
  const readInputs = (dp) => {
    const dpInputs = dp.$datepicker.closest('.date-picker').find('.input__datepickers');
    const arrivalDate = dpInputs.eq(0).val();
    const departureDate = dpInputs.eq(1).val();
    if (arrivalDate || departureDate) {
      dpInputs.length === 2
        ? dp.selectDate([arrivalDate, departureDate])
        : dp.selectDate(getDatesPeriod(arrivalDate));
    }
  }

  const addApplyButton = (dp) => {
    const applyButton = '<span class="datepicker--button apply-button" data-action="apply">Применить</span>';
    $(datepickerArea).find('.datepicker--buttons').append(applyButton);

    $(datepickerArea).find('.apply-button').on('click', (event) => {
      handleApplyDates(dp);
    }); 
  }

  const datepicker = $(datepickerArea).datepicker({
    range: true,
    minDate,
    maxDate,
    language: {
      dateFormat: 'dd.mm.yyyy'
      },
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM <i>yyyy</i>'},
    inline: true,
    clearButton: true,
  });

  addApplyButton(datepicker.data('datepicker'));
  readInputs(datepicker.data('datepicker'));
}