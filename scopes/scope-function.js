//Inicio function scope
function mensaje(){ 
    var contenido = "Hola, esta variable solo puede usarse dentro de la función"
    console.log(contenido) //variable se llama e imprime dentro de la función
} // Fin function scope

mensaje() //Ejecuta la función
console.log(contenido); //Error al intentar acceder a la variable fuera de la función