const navLink = document.querySelectorAll('.nav_link');
const tabsItem = document.querySelectorAll('.some_text');



navLink.forEach(function(item){
    item.addEventListener("click", function() {
        let currentLink = item;
        let tabId = currentLink.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        navLink.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItem.forEach(function(item){
            item.classList.remove("active");
        });

        item.classList.add("active");
        currentTab.classList.add("active");
    });
});





// выбираем все кнопки с конкретным классом с пом метода querySelectorAll чтобы повесить на них обработчик события
// мы будем проходится по нашей колекции с пом метода forEach на каждую кнопку вешаем обработчик события клика

//
//
//
//
// Мы должны при нажатии на кнопку выдавать ей класс и показывать конкретный таб