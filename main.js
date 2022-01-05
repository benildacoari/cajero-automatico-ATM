class Cuenta {
    constructor(nombre, cantidad, password) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.password = password;
    }
    
    ingresar(cantidad){
        if(cantidad === parseInt(cantidad,10) && cantidad > 0){
            if (this.cantidad + cantidad > 900) {
                return "Estas superando el limite de $900; operacion cancelada";
            } else {
                this.cantidad += cantidad;
                return `Operación exitosa...
   
                Tu saldo es de $ ${this.cantidad}`;
            }
        }
        return "Debe ingresar un número positivo...";
    }
    
    retirar(cantidad) {
        if(cantidad === parseInt(cantidad,10) && cantidad > 0){
            if (this.cantidad - cantidad < 10) {
                return "No tienes fondos suficientes; el mínimo es de $10";
            } else {
                this.cantidad -= cantidad;
                return `Has retirado $${cantidad} 

                Tu nuevo saldo es de: $${this.cantidad}`;
            }
        }
        return "Debe ingresar un número positivo...";
    }

    mostrar(){
        return "Tu saldo actual es de: $" + this.cantidad;
    }
}

let usuario = document.getElementById("usuario");
let password = document.getElementById("pass");

let cuentas = [
    new Cuenta("Gera",290, "l33t"),
    new Cuenta("Maui",67, "123" ),
    new Cuenta("Mali",200,"helloword"),
    new Cuenta("benilda", 100, "12345")
];

let usuarioActual;

function autenticar(){
    for(let i = 0; i < cuentas.length; i++){
        if(usuario.value === cuentas[i].nombre && password.value === cuentas[i].password ){
            usuarioActual = cuentas[i];
            document.getElementById("login").style.display = "none";
            document.getElementById("opciones").style.display = "block";
            document.getElementById("nombreUsuario").innerText = "Bienvenido(a) " + cuentas[i].nombre;
            return;
        }
    }
    alert('Su Usuario o Password es incorrecto ');
    location.reload();
}

function consultar(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("saldoActual").style.display = "block";
    document.getElementById("saldo").innerText = usuarioActual.mostrar();
}

function volver(){
    document.getElementById("login").style.display = "none";
    document.getElementById("opciones").style.display = "block";
    document.getElementById("saldoActual").style.display = "none";
    document.getElementById("nuevoMonto").style.display = "none";
    document.getElementById("ingresarCantidad").style.display = "none";
    document.getElementById("retirarCantidad").style.display = "none";
}

function ingresarMonto(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("ingresarCantidad").style.display = "block";
}

function validarMonto(){
    let nuevaCantidad = document.getElementById("cant");
    document.getElementById("opciones").style.display = "none";
    document.getElementById("ingresarCantidad").style.display = "none";
    document.getElementById("nuevoMonto").style.display = "block";
    document.getElementById("saldoNuevo").innerText = usuarioActual.ingresar(nuevaCantidad.value*1);
    nuevaCantidad.value = "";
    // nuevaCantidad.focus();
}

function retirarMonto(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("retirarCantidad").style.display = "block";
}

function validarMontoRetiro(){
    let nuevaCantidadRetiro = document.getElementById("cantRetiro");
    document.getElementById("opciones").style.display = "none";
    document.getElementById("retirarCantidad").style.display = "none";
    document.getElementById("nuevoMonto").style.display = "block";
    document.getElementById("saldoNuevo").innerText = usuarioActual.retirar(nuevaCantidadRetiro.value*1);
    nuevaCantidadRetiro.value = "";
}

function salir(){
    if (window.confirm("¿Estas seguro(a) de salir de la página?")) {
        location.reload();
    }
}

