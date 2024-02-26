
## Documentacion de Contenedores

*Este código JavaScript crea 10 elementos div y agregarlos al body de un documento HTML, se le asigna una altura de 100 píxeles y un color a cada contenedor que es generado al azar de un arreglo predeterminado*


**Documentacion del codigo:**

*Selecciona el elemento body del documento HTML y lo almacena en la variable body.*
>const body = document.querySelector('body'): 

*Crea un array llamado colores que contiene cinco colores diferentes.*
>const colores = ['pink','red','yellow','blue','aqua']: 

*Inicia un bucle for que se ejecutará 10 veces.*
>for(let i=0; i<10; i++) { ... }: 
*Dentro del bucle:*

*Crea un nuevo elemento div y lo almacena en la variable div.*
>const div = document.createElement('div'): 

*Crea un nuevo elemento p (párrafo) y lo almacena en la variable parrafo.*
>const parrafo = document.createElement('p'): 

*Establece el contenido de texto del párrafo con el valor actual de i + 1 (los números del 1 al 10).*
>parrafo.textContent = i + 1: 

*Establece la altura del div en 100 píxeles.*
>div.style.height = '100px':

*Establece el color de fondo del div seleccionando un color al azar de la lista de colores utilizando Math.random().*
>div.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]: 

*Agrega el div al final del elemento body del documento.*
>body.appendChild(div): 

*Agrega el párrafo como hijo del div creado.*
>div.appendChild(parrafo): 
