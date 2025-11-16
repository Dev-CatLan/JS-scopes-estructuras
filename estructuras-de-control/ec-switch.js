let color="Danger";

//Inicio switch
switch (color){
    case "Primary": //Opciones
        console.log("Azul");//Display
        break;
    case "Warning":
        console.log("Amarillo");
        break;
    case "Danger":
        console.log("Rojo");
        break;
    default: //Todo lo demás (Función similar a else en estructura if)
        console.log("Ingresa un Color Válido") //Colores inesperados/Datos no validos
} //Fin SWitch