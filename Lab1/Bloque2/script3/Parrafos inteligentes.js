function generarTextoAleatorio(minPalabras, maxPalabras) {
    const palabras = ["el", "sol", "camino", "viento", "para",
     "amar", "siempre", "julio", "entonces", "pensamiento", 
     "amigo", "lunes", "la", "genial", "fresco", 
     "unir", "tener", "que", "vino"];
    
    const longitud = Math.floor(Math.random() * (maxPalabras - minPalabras + 1)) + minPalabras;
    let textoAleatorio = "";

    for (let i = 0; i < longitud; i++) {
        const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
        textoAleatorio += palabraAleatoria + " ";
    }

    return textoAleatorio.trim();
}

const body = document.querySelector('body');

for (let i = 0; i < 5; i++) {
    const parrafo = document.createElement('p');
    const texto = generarTextoAleatorio(50, 100);

    parrafo.textContent = texto;
    
    const longitudCaracteres = texto.length;
    console.log(`Párrafo ${i + 1}: ${longitudCaracteres} caracteres`);

    body.appendChild(parrafo);
}
