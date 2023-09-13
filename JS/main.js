// Pre Entrega 3 - Diego Mata  
// Se definen variables globales
let costo;
let precio;
let margen;
let rentabilidad;

const formIngreso = document.querySelector('#formIngreso')
const inputProducto = document.querySelector('#inputProd')
const inputCosto = document.querySelector('#inputCosto')
const inputPrecio = document.querySelector('#inputPrecio')
const listaProd = document.querySelector('#listaProd')

const listaProductos = []

//función para el cálculo del margen y de la rentabilidad de los productos a ingresar
function margenRentabilidad () {
    margen = (precio - costo).toFixed(2);
    rentabilidad = ((margen / costo) * 100).toFixed(2);
}
//Se crea una función constructora de nuevos productos y se delcara un array para contenerlos
class NuevoProducto {
    constructor (nombre, costo, precio, margen, rentabilidad) {
      this.nombre = nombre
      this.costo = costo
      this.precio = precio
      this.margen = margen
      this.rentabilidad = rentabilidad
    }
  }
formIngreso.addEventListener('submit', e => {
    e.preventDefault();
    costo = parseFloat(inputCosto.value)
    precio = parseFloat(inputPrecio.value)  
    margenRentabilidad ()
    const nuevoProducto = new NuevoProducto(inputProducto.value, costo, precio, margen, rentabilidad)
    listaProductos.push(nuevoProducto)

})


// salida


//Se declara un nuevo Array para contener la lista reducida con solamente datos de margen y rentabilidad, ordenada alfabeticamente

const listaChica = listaProductos.map((item) => {
    return {
        nombre: item.nombre,
        margen: item.margen, 
        rentabilidad: item.rentabilidad
    }
})

//document.createElement("li")
console.log(listaProductos)
console.log(listaChica)
//listaProd.innerHTML = listaChica

function porNombre(prod1, prod2) {
    let result
    if (prod1.nombre < prod2.nombre) {
        result = -1
    } else if (prod1.nombre > prod2.nombre) {
        result = 1
    } else {
        result = 0
    }
    return result
} 
const listaChicaAlfabetico = listaChica.toSorted(porNombre)

//Se muestra la lista de productos ingresados 

//Se muestra lista de margen y rentabilidad de productos ordenados alfabéticamente
//console.log("Lista de margen y rentabilidad: ")
//console.log(listaChicaAlfabetico); 