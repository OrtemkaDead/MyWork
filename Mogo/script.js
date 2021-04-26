const tabsBtn = document.querySelectorAll(".accordion__item")

tabsBtn.forEach(el => {
   el.onclick = () => {
      let tabId = el.getAttribute('data-tab')
      let currentTab = document.querySelector(tabId)

      if (!el.classList.contains('active')) {
         tabsBtn.forEach(elem => elem.classList.remove('active'))

         el.classList.add('active')
         currentTab.classList.add('active')
      }
   }
})