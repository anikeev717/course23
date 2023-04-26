const slideShow = document.querySelector(".slide-show");
const slides = document.querySelectorAll(".slide-show__slide");
const [prevBtn, nextBtn] = document.querySelectorAll(".slide-show__control");
let activeSlideIndex = 0;
let intervalId;

const showSlide = () => {
  slides[activeSlideIndex].classList.add("active");
};

const hideSlide = () => {
  slides[activeSlideIndex].classList.remove("active");
};

const decreaseIndex = () => {
  activeSlideIndex - 1 < 0
    ? (activeSlideIndex = slides.length - 1)
    : (activeSlideIndex -= 1);
};

const increaseIndex = () => {
  activeSlideIndex + 1 > slides.length - 1
    ? (activeSlideIndex = 0)
    : (activeSlideIndex += 1);
};

const prevSlide = () => {
  hideSlide();
  decreaseIndex();
  showSlide();
};

const nextSlide = () => {
  hideSlide();
  increaseIndex();
  showSlide();
};

const startSlideShow = () => {
  intervalId = setInterval(nextSlide, 4000);
};

const stopSlideShow = () => {
  clearInterval(intervalId);
};

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
slideShow.addEventListener("mouseenter", stopSlideShow);
slideShow.addEventListener("mouseleave", startSlideShow);

showSlide();
startSlideShow();
