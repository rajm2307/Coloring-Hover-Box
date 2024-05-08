const container = document.getElementById('container-box')
const random_colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const squares = document.createElement('div')
    squares.classList.add('squares')

    squares.addEventListener('mouseover', () => setColor(squares))

    squares.addEventListener('mouseout', () => removeColor(squares))

    container.appendChild(squares)
}


function setColor(element) {
   const random_colors = getRandomColor()
   element.style.background = random_colors
   element.style.boxShadow = `0 0 112px ${random_colors}, 0 0 10px ${random_colors}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return random_colors[Math.floor(Math.random() * random_colors.length)]
}