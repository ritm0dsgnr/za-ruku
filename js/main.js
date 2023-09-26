const videoItem = document.querySelectorAll('.video__content-item-video'),
      popup = document.querySelector('.popup'),
      popupTitle = document.querySelector('.popup__title'),
      close = document.querySelector('.popup-close'),
      mask = document.querySelector('.mask')


  videoItem.forEach(el => {
    el.addEventListener('click', function () {
      mask.classList.remove('hidden')
      popup.classList.remove('hidden')
    })
  })

  videoItem[0].addEventListener('click', function () {
    if (this.classList.contains('active')){
      return
    }
    this.classList.add('active')
    popupTitle.innerHTML = 'Лечение пациентов <nobr>с раком</nobr> мочевого пузыря'
    popup.insertAdjacentHTML('beforeEnd', '<iframe src="https://www.youtube.com/embed/aqGwO4o1sks?si=ctc45fMah1QSuPg7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    const video = document.querySelector('.popup iframe')
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  })

  videoItem[1].addEventListener('click', function () {
    if (this.classList.contains('active')){
      return
    }
    this.classList.add('active')
    popupTitle.innerHTML = 'Жизнь пациента <nobr>с раком</nobr> мочевого пузыря после противоопухолевого лечения или во время него'
    popup.insertAdjacentHTML('beforeEnd', '<iframe src="https://www.youtube.com/embed/4wkZtHJnzrg?si=lz45BLmjS_7EOOGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
  })

  videoItem[2].addEventListener('click', function () {
    if (this.classList.contains('active')){
      return
    }
    this.classList.add('active')
    popupTitle.innerHTML = 'Диспансерное наблюдение пациентов <nobr>с раком</nobr> мочевого пузыря после лечения'
    popup.insertAdjacentHTML('beforeEnd', '<iframe src="https://www.youtube.com/embed/DHQtHpOyHuo?si=mnrria_W8EwlMeKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
  })

  close.addEventListener('click', function () {
    mask.classList.add('hidden')
    popup.classList.add('hidden')
    videoItem.forEach(el => {
      el.classList.remove('active')
    })

    const video = document.querySelector('.popup iframe')
    video.remove()
  })


// if (document.documentElement.clientWidth < 768) {
//   videoItem[0].addEventListener('click', function () {
//     videoItem[0].insertAdjacentHTML('beforeEnd', '<iframe src="https://www.youtube.com/embed/aqGwO4o1sks?si=ctc45fMah1QSuPg7?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
//     const video = document.querySelector('.video__content-item-video iframe')
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) {
//       video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) {
//       video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//       video.msRequestFullscreen();
//     }
//   })
// }