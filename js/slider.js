const slides = document.querySelectorAll('.slider__item');
const sliderNumber = document.querySelector('.slider__current');
const sliderTotal = document.querySelector('.slider__total');
const prevBtn = document.querySelector('.slider__btn_prev');
const nextBtn = document.querySelector('.slider__btn_next');

let currentSliderItemIndex = 0;

const currentSlide = (number) => {
  for (const slide of slides) {
    slide.classList.remove('slider__item_current');
  }
  slides[number].classList.add('slider__item_current');
  number + 1 < 10 ? sliderNumber.textContent = `0${number+1}` : sliderNumber.textContent = `${number+1}`;
};
  
const nextSlide = () => {
  if (currentSliderItemIndex === slides.length - 1) {
    currentSliderItemIndex = 0;
    currentSlide(currentSliderItemIndex);
  } else {
    currentSliderItemIndex += 1;
    currentSlide(currentSliderItemIndex);
  }
};

const prevSlide = () => {
  if (currentSliderItemIndex === 0) {
    currentSliderItemIndex = slides.length - 1;
    currentSlide(currentSliderItemIndex);
  } else {
    currentSliderItemIndex -= 1;
    currentSlide(currentSliderItemIndex);
  }
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

slides.length < 10 ? sliderTotal.textContent = `0${slides.length}` : sliderTotal.textContent = `${slides.length}`;