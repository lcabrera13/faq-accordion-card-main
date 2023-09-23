const items = document.querySelectorAll('[id^="accordion-item-"]')
let i = -1

items.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        if(i >= 0) {
            items[i].querySelector('h2').classList.toggle('font-bold')
            toggleElement(items[i].querySelector('p'))
            items[i].querySelector('img').classList.toggle('rotate-180')
        }

        toggleElement(item.querySelector('p'))

        item.querySelector('h2').classList.toggle('font-bold')
        item.querySelector('img').classList.toggle('rotate-180')

        i = index

        event.preventDefault()
    })
})

function toggleElement(element) {
    element.style.display = element.style.display === 'block' ? 'none' : 'block'
}