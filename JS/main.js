// Pre Entrega 3 - Diego Mata  
// Se definen variables globales

let costo;
let precio;
let margen;
let rentabilidad;

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
const listaProductos = []

const form = document.querySelector('#form');
form.addEventListener('submit', enviarFormulario);

function enviarFormulario (e) {
    e.preventDefault();
    nombreProd = document.querySelector('#nombreProd');
    nombre = nombreProd.value
    costoProd = document.querySelector('#costoProd');
    costo = parseFloat(costoProd.value);
    
    precioProd = document.querySelector('#precioProd');
    precio = parseFloat(precioProd.value);
    margenRentabilidad ();
   
    const prod = new NuevoProducto (nombre, costo, precio, margen, rentabilidad)
    listaProductos.push(prod)
    console.log("Lista completa: ")
    console.log(listaProductos);
}
console.log(listaProductos.length)
if (listaProductos.length == 0) {
    let aviso = document.createElement ("p");
    aviso.innerHTML = ("Aún no hay productos cargados");
    document.body.appendChild(aviso);
} else {
    let aviso = document.createElement ("p");
    aviso.innerHTML = ("Mira la consola");
    document.body.appendChild(aviso);
}


//Se declara un nuevo Array para contener la lista reducida con solamente datos de margen y rentabilidad, ordenada alfabeticamente

/*const listaChica = listaProductos.map((item) => {
    return {
        nombre: item.nombre,
        margen: item.margen, 
        rentabilidad: item.rentabilidad
    }
})
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
const listaChicaAlfabetico = listaChica.toSorted(porNombre)*/

//Se muestra la lista de productos ingresados 

//Se muestra lista de margen y rentabilidad de productos ordenados alfabéticamente
//console.log("Lista de margen y rentabilidad: ")
//console.log(listaChicaAlfabetico); 