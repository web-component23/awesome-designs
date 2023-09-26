// Javascript code

const slides = document.querySelectorAll('.slide')

let index = 0

function next() {
    index ++
    if (index >= slides.length) {
        index = 0
    }
    slider(index)
}

function previous() {
    index --
    if(index < 0) {
        index = slides.length - 1
    }
    slider(index)
}

function slider(index) {
    slides.forEach(ele => {
        ele.classList.remove('active')
    })

    slides[index].classList.add('active')
}