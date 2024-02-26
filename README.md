Script 1:
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

Script 2:
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

Script 3:
## Documentacion de Parrafos Inteligentes

*Este código JavaScript genera 5 parrafos inteligentes con una funcion para generar los textos aleatorios de 50 a 100 palabras con un arreglo determinado,mostrando en consola la cantidad de caracteres de cada parrafo*


**Documentacion del codigo:**
*: Define una función llamada generarTextoAleatorio que toma dos parámetros, minPalabras y maxPalabras, que representan el rango de palabras que se generarán en el texto. Dentro de la función*
>function generarTextoAleatorio(minPalabras, maxPalabras) { ... }

*Se crea un array llamado palabras que contiene palabras individuales que se utilizarán para construir el texto.*
>const palabras = ["el", "sol", "camino", "viento", "para",
     "amar", "siempre", "julio", "entonces", "pensamiento", 
     "amigo", "lunes", "la", "genial", "fresco", 
     "unir", "tener", "que", "vino"];

*Se genera aleatoriamente la longitud del texto (número de palabras) entre minPalabras y maxPalabras.*
>const longitud = Math.floor(Math.random() * (maxPalabras - minPalabras + 1)) + minPalabras;

*Se inicializa una cadena vacía llamada textoAleatorio.*
>let textoAleatorio = "";

*Se inicia un bucle que se ejecuta la cantidad de veces igual a la longitud generada aleatoriamente,en cada iteración, se elige aleatoriamente una palabra del array palabras y se agrega a la cadena textoAleatorio.*
>for (let i = 0; i < longitud; i++) {
        const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
        textoAleatorio += palabraAleatoria + " ";
    }

*En cada iteración, se elige aleatoriamente una palabra del array palabras y se agrega a la cadena textoAleatorio,finalmente, la función devuelve la cadena textoAleatorio después de eliminar los posibles espacios en blanco adicionales al principio o al final*
> return textoAleatorio.trim();

*Selecciona el elemento body del documento HTML y lo almacena en la variable body.*
>const body = document.querySelector('body');

*Inicia un bucle que se ejecuta cinco veces.*
>for (let i = 0; i < 5; i++) { ... }

*Se crea un nuevo elemento de párrafo (<p>) y se almacena en la variable parrafo,se genera un texto aleatorio llamando a la función generarTextoAleatorio con valores de rango entre 50 y 100 palabras, y se almacena en la variable texto*
>const parrafo = document.createElement('p');
const texto = generarTextoAleatorio(50, 100);

*Se establece el contenido de texto del párrafo (textContent) con el texto aleatorio generado.*
>parrafo.textContent = texto;

*Se calcula y muestra en la consola la longitud total de caracteres en el texto del párrafo*
>const longitudCaracteres = texto.length;
console.log(`Párrafo ${i + 1}: ${longitudCaracteres} caracteres`);

*El párrafo se agrega al final del body del documento HTML*
>body.appendChild(parrafo);
