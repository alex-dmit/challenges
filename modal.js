// @ts-check
// EventTarget.prototype.on = function (eventName, callback) {
//     this.addEventListener(eventName, callback)
// }

// /** @param {string} selector */
// function $(selector) {
//     return document.querySelector(selector)
// }

const modal = document.querySelector('.modal')
const body = document.querySelector('body')

document.querySelector('#open-modal').addEventListener('click', () => {
    modal.classList.add('modal_show')
    body.classList.add('disable-scroll')
})

// функция закрытия модального окна
function closeModal () {
    // вешаем класс запуска анимации закрытия (анимация начинается)
    modal.classList.add('modal_close-starting')
    // функция-слушатель окончания анимации (в нашем случае закрытия)
    function animationendCallback () {
        modal.classList.remove('modal_close-starting')
        modal.classList.remove('modal_show')
        body.classList.remove('disable-scroll')
        // Удаляем слушатель (нужно передать именно ту же функцию, что и в addEventListenter)
        modal.removeEventListener('animationend', animationendCallback)
    }
    // Вешаем слушатель через addEventListenter
    modal.addEventListener('animationend', animationendCallback)
}

document.querySelector('#close-modal').addEventListener('click', closeModal)
modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal()
})