// Anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.onclick = event => {
      event.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   }
}

// Tabs
const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsContent = document.querySelectorAll('.tabs__item')

tabsBtn.forEach((el, i) => {
   el.onclick = () => {
      if (!el.classList.contains('active')) {
         tabsBtn.forEach((el, i) => {
            el.classList.remove('active')
            tabsContent[i].classList.remove('active')
         })

         el.classList.add('active')
         tabsContent[i].classList.add('active')
      }
   }
})

tabsBtn[0].click()

// Slider
//TODO: Fix

// Собираем все img в slider
let slides = document.querySelectorAll('.slider__item');
let slider = [];

for (let i = 0; i < slides.length; i++) {
   slider[i] = slides[i].src;
   slides[i].remove();
}

let step = 0;
let offset = 0;

// Достаем один img из slider
function drawNext() {
   let img = document.createElement('img');
   img.src = slider[step];
   img.classList.add('slider__item');
   img.style.left = offset * 525 + 'px';
   document.querySelector('.slider__container').appendChild(img);

   if (step + 1 == slider.length) {
      step = 0;
   }
   else {
      step++;
   }
   offset = 1;
}

function drawPrev() {
   let img = document.createElement('img');
   img.src = slider[step];
   img.classList.add('slider__item');
   img.style.right = offset / 525 + 'px';
   document.querySelector('.slider__container').appendChild(img);

   if (step + 1 == slider.length) {
      step = 0;
   }
   else {
      step++;
   }
   offset = 1;
}

const sliderBtnNext = document.querySelectorAll(".slider__btn-next");
const sliderBtnPrev = document.querySelectorAll(".slider__btn-prev");

function next(e) {
   e.preventDefault();
   console.log('e');
   let slides2 = document.querySelectorAll('.slider__item');
   let offset2 = 0;

   for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.left = offset2 * 525 - 525 + 'px';
      offset2++;
   }
   setTimeout(function () {
      slides2[0].remove();
      drawNext();
   }, 500);
}

function prev(e) {
   e.preventDefault();
   console.log('e');
   let slides2 = document.querySelectorAll('.slider__item');
   let offset2 = 0;

   for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.left = offset2 * 525 + 525 + 'px';
      offset2++;
   }
   setTimeout(function () {
      slides2[0].remove();
      drawPrev();
   }, 500);
}


drawNext(); drawPrev();
sliderBtnNext[0].onclick = next;
sliderBtnPrev[0].onclick = prev;