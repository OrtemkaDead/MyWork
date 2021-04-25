// Anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}


// Tabs
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active-tabs__btn')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active-tabs__btn');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active-tabs__btn');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

document.querySelector('.tabs__btn').click();


// Slider

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