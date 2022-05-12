
import {pintarTienda} from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"
import {pintarCarrito} from "./pintarCarrito.js"
    //crear objeto bacio
    let producto={}

    //llamando al modulo de pintar
    pintarTienda();

    let Modalinfoproducto = new bootstrap.Modal(document.getElementById('Modalinfoproducto'))
   
    //llamando al modulo ampliarinfo
    let contenedorTienda=document.getElementById("fila")
    contenedorTienda.addEventListener("click",function(event){
        if(event.target.classList.contains("btn")){
        producto=ampliarInformacion(event)
        Modalinfoproducto.show()
        }
    })

        

    //call acction add buycar

    let botonadd = document.getElementById("btnAdd")
    let cero = document.getElementById("cantidadProducto");
    let carrito = []
    
    //se ejecuta las intruscciones dle boton 
    botonadd.addEventListener('click',function(event){
        
        let cantidadproducto=document.getElementById("cantidadProducto").value

        producto.cantidad=cantidadproducto
        
        carrito.push(producto)
        
        let suma=0
        carrito.forEach(function (producto) {
        
            suma=suma+Number(producto.cantidad)
        })

    pintarCarrito(suma);
    cero.value = 1;
    Modalinfoproducto.hide();

    })
 
//4 ver resumen de venta 

let total1 = 0
let btnCarrito = document.getElementById("resumencarrito")
let contotal = document.getElementById("contenedorTotal")

btnCarrito.addEventListener('click', function (event) {

    let contenedor = document.getElementById("contenedorVenta")
    let modalventa = new bootstrap.Modal(document.getElementById('ModalCarrito'))
    let total2 = 0

    let FunVacio = function nohay() {
        let fila = document.createElement("div")
        fila.classList.add("row", "mt-2")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-12")

        let texto = document.createElement("h1")
        texto.classList.add("text-center")
        texto.textContent = "No hay productos!"

        columna1.appendChild(texto)
        fila.appendChild(columna1)
        contenedor.appendChild(fila)
    }
    
    //borrar el contenido de html
    contenedor.innerHTML = ""

    if (carrito.length == 0) {
        FunVacio()
        modalventa.show()
    } else {
        //recorrer el carrito para pintar los productos en la factura
        carrito.forEach(function (producto) {
            let subtotal = 0
            let cantpro = producto.cantidad
            let preciopro = producto.precio

            subtotal = cantpro * preciopro
            total1 = subtotal
            total2 = total1 + total2
            contotal.textContent = "El total es: " + new Intl.NumberFormat('es-CO').format(total2) + " Cop"

            //traversing
            let fila = document.createElement("div")
            fila.classList.add("row", "mt-2")

            let columna1 = document.createElement("div")
            columna1.classList.add("col-12", "col-md-4")


            let columna2 = document.createElement("div")
            columna2.classList.add("col-12", "col-md-8")

            let foto = document.createElement("img")
            foto.classList.add("img-fluid", "w-100")
            foto.src = producto.foto

            let nombre = document.createElement("h4")
            nombre.classList.add("text-center")
            nombre.textContent = producto.nombre

            let precio = document.createElement("h5")
            precio.classList.add("text-center")
            precio.textContent = new Intl.NumberFormat('es-CO').format(producto.precio) + " Cop"

            let cantidad = document.createElement("p")
            cantidad.classList.add("text-center")
            cantidad.textContent = "Cantidad: " + producto.cantidad

            let Tsubtotal = document.createElement("h6")
            Tsubtotal.classList.add("text-center")
            Tsubtotal.textContent = "Subtotal: " + new Intl.NumberFormat('es-CO').format(subtotal) + " Cop"
            //padres e hijos
            columna1.appendChild(foto)
            fila.appendChild(columna1)
            fila.appendChild(columna2)

            contenedor.appendChild(fila)

            columna2.appendChild(nombre)
            columna2.appendChild(precio)
            columna2.appendChild(cantidad)
            columna2.appendChild(Tsubtotal)

        })
        modalventa.show()
    }//cierre else

    //boton convertir 
    const usd = 4000;
    let total3 = 0;
    let btnconvertir = document.getElementById("btnConv")
    //accion para convertir al tocar el boton USD
    btnconvertir.addEventListener('click', function (event) {
        total3 = total2/usd;
        contotal.textContent = "El total en USD es: " + new Intl.NumberFormat('de-DE').format(total3) + " USD"
    })
    
    
    //limpiar carrito
    let limpiar =document.getElementById("btnLimpiar")
    limpiar.addEventListener('click', function(event){
        carrito=[]
        capsula.classList.add("invisible")
        total1=0
        total2=0
        document.getElementById("contenedorVenta").innerHTML=""
        contotal.textContent = ""
        FunVacio()
        setTimeout(function () {
            modalventa.hide()
        }, 1000);
    })
    
}) //cierre boton
    
    
