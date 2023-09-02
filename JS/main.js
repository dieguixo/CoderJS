// Pre Entrega 2 - Diego Mata  
// Se definen variables globales
let respuesta = true
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
const listaProductos = []
class NuevoProducto {
    constructor (nombre, costo, precio, margen, rentabilidad) {
      this.nombre = nombre
      this.costo = costo
      this.precio = precio
      this.margen = margen
      this.rentabilidad = rentabilidad
    }
  }
//Ciclo para agregar productos con dato de costo y precio. Funcion margenRentabilidad calcula el margen y la rentabilidad con los datos ingresados
function cuestionario () {
    while (respuesta) {
        let nombre = prompt ("Ingrese el nombre del producto: ");
        if (nombre === '') {
            respuesta = false
          } else {
            costo = parseFloat(prompt ("Ingrese el costo del producto " + nombre));
            while (isNaN(costo)) {
                alert("No está ingresando un valor válido, vuelva a intentarlo");
                costo = parseFloat(prompt ("Ingrese el costo del producto " + nombre));
            }
            precio = parseFloat(prompt ("Ingrese el precio de venta del producto " + nombre));
            while (isNaN(precio)) {
                alert("No está ingresando un valor válido, vuelva a intentarlo");
                precio = parseFloat(prompt ("Ingrese el precio de venta del producto " + nombre));
            }
            margenRentabilidad ();
            const prod = new NuevoProducto (nombre.toUpperCase(), costo, precio, margen, rentabilidad)
            listaProductos.push(prod)
          }
        }
    }
cuestionario ();

//Se declara un nuevo Array para contener la lista reducida con solamente datos de margen y rentabilidad, ordenada alfabeticamente
const listaChica = listaProductos.map((item) => {
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
const listaChicaAlfabetico = listaChica.toSorted(porNombre)

//Se muestra la lista de productos ingresados 
console.log("Lista completa: ")
console.log(listaProductos);
//Se muestra lista de margen y rentabilidad de productos ordenados alfabéticamente
console.log("Lista de margen y rentabilidad: ")
console.log(listaChicaAlfabetico);

