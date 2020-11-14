'use strict';

let likeBtn = document.querySelectorAll('.reviews__like');

likeBtn.forEach(like => {
  let likeCount = like.querySelector('.reviews__like-num').innerHTML;
  
  like.addEventListener('click', () => {
    if(like.classList.contains('reviews__like--active')) {
      like.classList.remove('reviews__like--active');
      like.querySelector('.reviews__like-num').innerHTML = --likeCount;
      like.querySelector(".reviews__icon").innerHTML = "favorite_border";
    }
    else {
      like.classList.add('reviews__like--active');
      like.querySelector('.reviews__like-num').innerHTML = ++likeCount;
      like.querySelector(".reviews__icon").innerHTML = "favorite";
    }
  })
});