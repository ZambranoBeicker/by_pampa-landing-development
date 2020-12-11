import '../sass/index.scss'
import 'swiper/swiper.scss'

import Swiper from 'swiper'

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    speed: 400,
    spaceBetween: 100,
})

var whiteSlider = document.getElementById('white-slider')
var $whiteNext = document.getElementById('white-next')
var $whitePrev = document.getElementById('white-prev')

$whitePrev.addEventListener('click', () => {
    whiteSlider.swiper.slidePrev()
})
$whiteNext.addEventListener('click', () => {
    whiteSlider.swiper.slideNext()
})
