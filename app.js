let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeromaximo = 10;


function asignatTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   /* document.getElementById("valorUsuario").addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es "Enter" (código 13)
        if (event.key === "Enter") {
            // Evitar el comportamiento por defecto (como enviar un formulario)
            event.preventDefault();
            // Llamar a la función verificarIntento
            verificarIntento();
        }
    });*/
         if(numeroDeUsuario === numeroSecreto){
            asignatTextoElemento('p', `Acertaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
            document.getElementById('intentar').setAttribute('disabled',true);
            document.getElementById('reiniciar').removeAttribute('disabled');
            cambiarImagen("./img/robot.png");          
        } else 
            //El usuariono acerto
            if (numeroDeUsuario > numeroSecreto) {
            asignatTextoElemento('p', `El número secreto es menor, intento:${intentos}`);
        }       else {
            asignatTextoElemento('p', `El número secreto es mayor, intento:${intentos}`);
        }
        intentos++;
        limpiarCaja();
    return;
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    let nuemeroGenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(nuemeroGenerado);
    console.log (listaNumerosSorteados);
    // si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeromaximo) {
        ////////cambiarImagen("./img/ruido.png");
        asignatTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    // si el número generado esta en la lista
        if (listaNumerosSorteados.includes(nuemeroGenerado)){
         return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(nuemeroGenerado);
            return nuemeroGenerado;
            }
        }
}
function condicionesIniciales(){
asignatTextoElemento('h1', 'Juego del número secreto');
asignatTextoElemento('p', `Indica un número del 1 al ${numeromaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el número aleatorio    
    //Inicializar el núumero de intentos
    condicionesIniciales();
    //deabilitar el boto de nuevo juego
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    cambiarImagen("./img/ia.png");
    }
function cambiarImagen(rutaImagen){
    var imagen = document.getElementById('miImagen');
    imagen.src = rutaImagen ;
}
condicionesIniciales();

