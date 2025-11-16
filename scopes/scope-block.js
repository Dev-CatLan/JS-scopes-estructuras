// Inicio de Block scope
if (true){
    let usuario = prompt('Ingrese su Usuario: ');

    while (usuario !== 'DevCatLAn'){
        alert('Intente nuevamente');
        usuario = prompt('Ingrese su Usuario: ');
    }
    alert('Bienvenido');
} //Fin de Block scope

console.log(usuario); //Error al llamar variable fuera del bloque