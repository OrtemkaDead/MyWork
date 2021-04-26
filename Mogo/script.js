const tabsBtn = document.querySelectorAll('.accordion__item')

tabsBtn.forEach(el => {
   el.onclick = () => {
      if (!el.classList.contains('active')) {
         tabsBtn.forEach(elem => elem.classList.remove('active'))
         el.classList.add('active')
      }
   }
})

tabsBtn[0].click()