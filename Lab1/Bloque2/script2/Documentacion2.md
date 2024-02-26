
## Documentacion de Contenedores 1.2

*Este código JavaScript crea 10 elementos div y agregarlos al body de un documento HTML, se le asigna una altura de 100 píxeles y un color a cada contenedor que es generado al azar de un arreglo predeterminado de 20 colores, con la funcionalidad de evitar que los colores de los contenedores se repitan*


**Documentacion del codigo:**
*Selecciona el elemento body del documento HTML y lo almacena en la variable body.*
>const body = document.querySelector('body');

*Define un array llamado colores que contiene diferentes colores en formato de cadena. Estos colores se utilizarán para establecer el fondo de los elementos div.*
>const colores = ['pink', 'red', 'yellow', ...];

*Inicia un bucle for que se ejecuta 10 veces.*
>for(let i = 0; i < 10; i++): 

*Crea un nuevo elemento div y lo almacena en la variable div.*
>const div = document.createElement('div');

*Crea un nuevo elemento p (párrafo) y lo almacena en la variable parrafo.*
>const parrafo = document.createElement('p');

*Establece el contenido de texto del párrafo con el valor actual de i + 1.*
>parrafo.textContent = i + 1;

*Establece la altura del div en 100 píxeles.*
>div.style.height = '100px';

*Genera un número aleatorio para seleccionar un índice aleatorio dentro del array colores.*
>const color = Math.floor(Math.random() * colores.length);: 

*Utiliza splice para eliminar un elemento del array colores en la posición aleatoria generada y lo almacena en colorElegido.*
>const colorElegido = colores.splice(color, 1)[0];

*Establece el color de fondo del div con el color elegido aleatoriamente.*
>div.style.backgroundColor = colorElegido;

*Agrega el elemento div al final del elemento body.*
>body.appendChild(div);

*Agrega el elemento parrafo como hijo del elemento div.*
>div.appendChild(parrafo);
