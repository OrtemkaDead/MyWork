const tabsBtn = document.querySelectorAll(".accordion__item");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

document.querySelector('.tabs__nav-btn').click();