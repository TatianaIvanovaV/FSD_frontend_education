
const $selects = $('.input__select');
[...$selects].forEach((select) => {initSelectCounter(select)})

function initSelectCounter(select) {
  $(select).on('click', showDropdown);
  let initialItems = [];
  let items = [];

function showDropdown(e) {
  if (!$(e.currentTarget).hasClass('input__select--expanded')) {
    $(e.currentTarget).addClass('input__select--expanded');
    $(document).on('click', hideDropdown);
    addChangeEvents($(e.currentTarget))
  }
}

function hideDropdown(e) {
  /*const $isInlineSelect = !($(e.target).closest('.select-counter__items--inline').length === 0);*/
  const $isApplyButtonClick = $(e.target).data('action') === 'hide';
  const $isOutsideClick = !$(select).is(e.target) && $(select).has(e.target).length === 0;
  if ($isOutsideClick || $isApplyButtonClick /*&& !$isInlineSelect*/) {
    resetItemCountInitial();
    $(select).removeClass('input__select--expanded');
    $(document).off('click', hideDropdown);
    $('.dropdown__select-count-btn', $(select)).off('click', handleChangeCount);
    $('.dropdown__button-clear', $(select)).off('click', clearValues);
    $('.dropdown__button-apply', $(select)).off('click', applyValues);
    items = [];
  }
}
function handleChangeCount(e) {
  const liElement = $(e.currentTarget).closest('.dropdown__item');
  const isHaveFooterButtons = !!$(e.currentTarget).closest('.dropdown').find('.dropdown__footer').length;
  const liIndex = liElement.attr('data-index');
  const countType = $(e.currentTarget).attr('data-action');
  items[liIndex].count = countType === 'asc' ? items[liIndex].count + 1 : items[liIndex].count - 1;

  refreshItemCount(liElement, items[liIndex].count);

  if (isHaveFooterButtons) {
    verifyButtons($(e.currentTarget), items);
  } else {
    applyValues(e);
  }
}

function initValues(el) {
  const $liElements = [...$('.dropdown__item', $(el))];
  $liElements.forEach((li) => {
    const itemData = {};
    itemData.title = $('.dropdown__title', $(li)).text();
    itemData.count = Number($('.dropdown__count', $(li)).text());
    itemData.countWord = $(li).attr('data-countword') || itemData.title;
    items.push(itemData);
  });
  initialItems = JSON.parse(JSON.stringify(items));
}

function refreshItemCount(liElement, value) {
  const $descButton = $('.dropdown__select-count-btn[data-action="desc"]', $(liElement));
  const $ascButton = $('.dropdown__select-count-btn[data-action="asc"]', $(liElement));
  if (value === 0) {
    $descButton.prop('disabled', true);
    $ascButton.prop('disabled', false);
  }
  if (value >= 5) {
    $descButton.prop('disabled', false);
    $ascButton.prop('disabled', true);
  }
  if (value > 0 && value < 5) {
    $descButton.prop('disabled', false);
    $ascButton.prop('disabled', false);
  }
  $('.dropdown__count', $(liElement)).text(value);
}
function resetItemCountInitial() {
  const $liElements = $('.dropdown__item', $(select));
  initialItems.forEach((initValue, index) => {
    refreshItemCount($($liElements[index]), initValue.count);
  })
}
function addChangeEvents(el) {
  $('.dropdown__select-count-btn', el).on('click', handleChangeCount);
  $('.dropdown__button-clear', el).on('click', clearValues);
  $('.dropdown__button-apply', el).on('click', applyValues);

  if (initialItems.length) {
    items = JSON.parse(JSON.stringify(initialItems));
    verifyButtons($('.dropdown', el), items);
  } else {
    initValues(el)
  }
}
function clearValues(e) {
  const $liElements = $(e.currentTarget)
    .closest('.dropdown')
    .find('.dropdown__item');

  items.forEach((dataItem, index) => {
    dataItem.count = 0;
    refreshItemCount($($liElements[index]), dataItem.count);
  });

  verifyButtons($(e.currentTarget), items);
}
  
function applyValues(e) {
  const countData = getCountData(items);
  const countValue = getCountString(countData);
  $(e.target).closest('.input__select')
    .find('.input__input')
    .val(countValue);
  initialItems = JSON.parse(JSON.stringify(items));
  hideDropdown(e);
}

function verifyButtons(el, itemsData) {
  const $clearButton = $(el).closest('.dropdown').find('.dropdown__button-clear');
  const clearButtonWrapper = $clearButton.parent();
  const $applyButton = $(el).closest('.dropdown').find('.dropdown__button-apply');
  const isEveryEmpty = itemsData.every((item) => item.count === 0);
  if (isEveryEmpty) {
    if (!clearButtonWrapper.hasClass('dropdown__buttons--hide')) {
      clearButtonWrapper.addClass('dropdown__buttons--hide');
    }
    $applyButton.prop('disabled', true);
  } else {
    clearButtonWrapper.removeClass('dropdown__buttons--hide');
    $applyButton.prop('disabled', false);
  }
}

function getCountData(dataItems) {
  const countData = [];
  dataItems.forEach((item) => {
    const sameCountWordIndex = countData.findIndex((data) => data.countWord === item.countWord);
    if (sameCountWordIndex !== -1) {
      countData[sameCountWordIndex].count += item.count;
    } else {
      const dataItem = {
        countWord: item.countWord,
        count: item.count,
      };
      countData.push(dataItem)
    }
  })
  return countData;
}
function getCountString(countData) {
  const filteredCountData = countData.filter((countItem) => countItem.count !== 0)
  const value = filteredCountData.reduce((string, countItem, index) => {
    const declOfCount = declOfNum(countItem.count, findDeclArray(countItem.countWord));
    const stringOfCount = `${countItem.count} ${declOfCount}`;
    return index === (filteredCountData.length - 1) ? `${string}${stringOfCount}` : `${string}${stringOfCount}, `;
  },"")
  return value.toLowerCase();
}
function declOfNum(number, titles) {
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10: 5]];
}
function findDeclArray(word) {
  const dictionary = {
    'Гости': ['Гость', 'Гостя', 'Гостей'],
    'Младенцы': ['Младенец', 'Младенца', 'Младенцев'],
    "спальни": ['Спальня', 'Спальни', 'Спален'],
    'Кровати': ['Кровать', 'Кровати', 'Кроватей'],
    'Ванные комнаты': ['Ванная комната', 'Ванные комнаты', 'Ванных комнат'],
  };
  return dictionary[word];
}
}