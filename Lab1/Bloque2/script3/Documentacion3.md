
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