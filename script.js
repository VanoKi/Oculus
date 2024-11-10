'use strict'

const tabItem = document.querySelectorAll('.tabs__btn__item')
const tabContent = document.querySelectorAll('.tabs__content__item')

tabItem.forEach(function (elem) {
    elem.addEventListener('click', open)
})

function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn__item--active');
    })

    tabContent.forEach(function (item) {
        item.classList.remove('tabs__btn__item--active')
    })

    tabTarget.classList.add('tabs__btn__item--active')
    document.querySelectorAll(`#${button}`).classList.add('tabs__btn__item--active')
}