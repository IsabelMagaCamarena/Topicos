const body = document.querySelector('body')

const colores = ['pink','red','yellow','blue','aqua']

for(let i=0; i<10; i++){
    const div = document.createElement('div')
    const parrafo = document.createElement('p')
    parrafo.textContent = i+1

    div.style.height = '100px'
    div.style.backgroundColor = colores[[Math.floor(Math.random()*colores.length)]]

    body.appendChild(div)
    div.appendChild(parrafo)
}

