/*Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
Retornar true o false en caso de que una oración contenga una palabra dada, es decir,
si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un
false. En cambio si mando "mundo" entonces debe retornar true.*/

function findWord (sentence, word) {
    sentence = sentence.toLowerCase()
    word = word.toLowerCase()
    x = sentence.indexOf(word)
    if (x == -1) 
        return false
    else 
        return true
}

var result = findWord ("Hola mundo", "perro")
console.log (result)