const videoItem = document.querySelectorAll('.video__content-item-video'),
      popup = document.querySelector('.popup'),
      video = document.querySelectorAll('.popup iframe'),
      close = document.querySelector('.popup-close'),
      mask = document.querySelector('.mask')

videoItem[0].addEventListener('click', function () {
  mask.classList.remove('hidden')
  popup.classList.remove('hidden')
  video[0].classList.remove('hidden')
})

videoItem[1].addEventListener('click', function () {
  mask.classList.remove('hidden')
  popup.classList.remove('hidden')
  video[1].classList.remove('hidden')
})

videoItem[2].addEventListener('click', function () {
  mask.classList.remove('hidden')
  popup.classList.remove('hidden')
  video[2].classList.remove('hidden')
})

close.addEventListener('click', function () {
  mask.classList.add('hidden')
  popup.classList.add('hidden')
  video.forEach(el => {
    el.classList.add('hidden')
  })
})