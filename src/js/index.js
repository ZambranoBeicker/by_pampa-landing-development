import '../sass/index.scss'
import 'swiper/swiper.scss'

import Swiper from 'swiper'

var changeValue = (element, maximun, add) => {
    let currentValue = parseInt(element.innerText)
    if (add) currentValue += 1
    else currentValue -= 1

    if (currentValue >= maximun) {
        console.info('CurrentValue is greater than maximun: ', currentValue)
        return maximun
    } else if (currentValue < maximun && currentValue > 0) {
        console.info('CurrentValue is smaller than maximun: ', currentValue)
        return currentValue
    } else if (currentValue <= 1) {
        console.info('CurrentValue is equal to 0: ', currentValue)

        return 1
    }
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 100,
})
var mobileSwiper = new Swiper('.swiper-container--mobile', {
    slidesPerView: 2,
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 0,
})

var $blackCounter = document.getElementById('black-counter')
var $whiteCounter = document.getElementById('white-counter')

var whiteSlider = document.getElementById('white-slider')
var $whiteNext = document.getElementById('white-next')
var $whitePrev = document.getElementById('white-prev')

var blackSlider = document.getElementById('black-slider')
var $blackNext = document.getElementById('black-next')
var $blackPrev = document.getElementById('black-prev')

$whitePrev.addEventListener('click', () => {
    const whiteCounterValue = parseInt($whiteCounter.innerText)
    $whiteCounter.innerText = whiteCounterValue - 1
    whiteSlider.swiper.slidePrev()
})
$whiteNext.addEventListener('click', () => {
    const whiteCounterValue = parseInt($whiteCounter.innerText)
    $whiteCounter.innerText = whiteCounterValue + 1
    whiteSlider.swiper.slideNext()
})

$blackPrev.addEventListener('click', () => {
    $blackCounter.innerText = changeValue($blackCounter, 3, false)
    blackSlider.swiper.slidePrev()
})
$blackNext.addEventListener('click', () => {
    $blackCounter.innerText = changeValue($blackCounter, 3, true)
    blackSlider.swiper.slideNext()
})

var popupElements = Array.from(document.querySelectorAll('.popup'))
var popupOpenButtons = Array.from(document.querySelectorAll('.popup-open'))
var popupCloseButtons = Array.from(document.querySelectorAll('.popup-close'))

popupOpenButtons.forEach((openButton, index) => {
    openButton.addEventListener('click', () => {
        popupElements[index].classList.remove('hidden')
    })
    popupCloseButtons[index].addEventListener('click', () => {
        popupElements[index].classList.add('hidden')
    })
})
