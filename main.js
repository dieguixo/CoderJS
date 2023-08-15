// Pre Entrega 1 - Diego Mata  
let respuesta = "Si";
let costo;
let precio;
let margen;
let rentabilidad;

function margenRentabilidad () {
    margen = precio - costo;
    rentabilidad = (margen / costo) * 100;
}
function cuestionario () {
    while (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {
        let producto = prompt ("Ingrese el nombre del producto: ");
        costo = prompt ("Ingrese el costo del producto: ");
        precio = prompt ("Ingrese el precio de venta: ");
        margenRentabilidad ();
        console.log ("El margen de la venta de " + producto + " es de $ " + margen);
        console.log ("Esto significa una rentabilidad del " + rentabilidad + "%");
        respuesta = prompt ("Desea hacer el cálculo para otro producto? Si/No ");
        }
        if (respuesta == "No" || respuesta == "no" || respuesta == "NO") {
            console.log (respuesta + "? Entonces... hasta la próxima!");
            } else {
                console.log ("La respuesta ingresada es incorrecta. Vuelva a intentarlo.");
                respuesta = prompt ("Desea hacer el cálculo para otro producto? Si/No ");
                cuestionario ();
            }
}   
cuestionario ();

