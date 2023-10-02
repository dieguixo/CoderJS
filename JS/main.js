// Pre Entrega 3 - Diego Mata  
let costo;
let rentabilidad;

const formIngreso = document.querySelector('#formIngreso');
const inputProducto = document.querySelector('#inputProd');
const inputCosto = document.querySelector('#inputCosto');
const inputPrecio = document.querySelector('#inputPrecio');
const list = document.querySelector('#cargado');
const menuCompleto = document.querySelector('#completa');

let listaProductos = [];
let listaGuardada = localStorage.getItem("listaStorage");

if (listaGuardada) {
    listaProductos = JSON.parse(listaGuardada);
}

//Se crea una función constructora de nuevos productos
class NuevoProducto {
    constructor (nombre, costo, precio, margen, rentabilidad) {
      this.nombre = nombre;
      this.costo = costo;
      this.precio = precio;
      this.margen = margen;
      this.rentabilidad = rentabilidad;
    }
  }

//Acciones que se disparan en el evento "submit" al hacer click en botón "Agregar" del formulario
formIngreso.addEventListener('submit', e => {
    e.preventDefault();
    if (inputProducto.value == "") {
        nombre = "Sin nombre";
    } else {
        nombre = inputProducto.value;
    }
    
    costo = parseFloat(inputCosto.value);
    validarCosto ();
    precio = parseFloat(inputPrecio.value); 
    validarPrecio ();
    margenRentabilidad ();

    const nuevoProducto = new NuevoProducto(nombre.toUpperCase(), costo, precio, margen, rentabilidad);
    listaProductos.push(nuevoProducto);
    localStorage.setItem("listaStorage", JSON.stringify(listaProductos));
    mostrarCarga();
    mostrarMargenRentab();
    inputProducto.value = "";
    inputCosto.value = "";
    inputPrecio.value = "";

})
// ---------   Funciones   ---------

//función para el cálculo del margen y de la rentabilidad de los productos a ingresar
function margenRentabilidad () {
    margen = (precio - costo).toFixed(2);
    rentabilidad = ((margen / costo) * 100).toFixed(2);
}

function validarCosto () {
    while (isNaN(costo) || costo <= 0) {
        alert ("Por favor ingrese un número válido")
        costo = parseFloat(prompt ("Vuelva a ingresar el costo del producto: ")) 
    }
    return costo;
}

function validarPrecio () {
    while (isNaN(precio) || precio <= 0) {
        alert ("Por favor ingrese un número válido")
        precio = parseFloat(prompt ("Vuelva a ingresar el precio del producto: ")) 
    }
    return precio;
}

function mostrarCarga() {
    let mostrar = document.querySelector('#cargado');
    list.innerHTML = "";
    let lista = document.createElement("p")
    lista.innerHTML = nombre + " -->  costo: $"+ costo + " precio: $" + precio;
    mostrar.append(lista);
    }

/*
function mostrarCarga() {
    const cargados = listaProductos.map((item) => {
        return {
            nombre: item.nombre,
            costo: item.costo,
            precio: item.precio,
        }
    })
    let mostrar = document.querySelector('#cargado');
    list.innerHTML = "";
    for (const item of cargados) {
        let list = document.createElement("li")
        list.innerHTML = item.nombre + " -->  costo: $"+ item.costo + " precio: $" + item.precio;
        mostrar.append(list);
    }
}
*/

function mostrarMargenRentab() {
    let listaCompleta = document.querySelector('#completa');
    menuCompleto.innerHTML = "";
    for (const items of listaProductos) {
        let menuCompleto = document.createElement("li");
        menuCompleto.innerHTML = items.nombre + " -- margen: $" + items.margen + " -- rentabilidad: " + items.rentabilidad + "%";
        listaCompleta.append(menuCompleto);
    }
}
console.log(listaProductos);


