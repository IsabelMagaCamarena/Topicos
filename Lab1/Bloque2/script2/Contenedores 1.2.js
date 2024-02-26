const body = document.querySelector('body');

const colores = ['pink','red','yellow','blue','aqua','teal',
'olive','beige','azure','burlywood','darkgrey','lightsalom',
'mistyrose','peru','orchid','palegreen','moccasin','mediumturquoise',
'oldlace','mintcream'];

for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.textContent = i + 1;

    div.style.height = '100px';

    const color = Math.floor(Math.random() * colores.length);
    const colorElegido = colores.splice(color, 1)[0];

    div.style.backgroundColor = colorElegido;
    
    body.appendChild(div);
    div.appendChild(parrafo);
}
