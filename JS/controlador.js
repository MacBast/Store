
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
    let carrito=[]
    let botonadd = document.getElementById("btnAdd")
    botonadd.addEventListener('click',function(event){

        let cantidadproducto=document.getElementById("cantidadProducto").value
        
        producto.cantidad=cantidadproducto
        
        carrito.push(producto)
        
        let suma=0
        carrito.forEach(function (producto) {
         
            suma=suma+Number(producto.cantidad)
        })

       pintarCarrito(suma);
       Modalinfoproducto.hide();

    })

    let limpiar =document.getElementById("btnLimpiar")
    limpiar.addEventListener('click', function(event){
        carrito=[]
        capsula.classList.add("invisible")
    })



    //4 ver resumen de venta 
    //if(event.target.classList.contains("btn")){
    let btnCarrito = document.getElementById("resumencarrito")

    btnCarrito.addEventListener('click', function (event) {

    let contenedor = document.getElementById("contenedorVenta")
    let contotal = document.getElementById("contenedorTotal")
    let modalventa = new bootstrap.Modal(document.getElementById('ModalCarrito'))
    let subtotal=0
    //borrar el contenido de html
    contenedor.innerHTML = ""
    //recorrer el carrito para pintar los productos en la factura
    carrito.forEach(function (producto) {
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
        precio.textContent = producto.precio

        let cantidad = document.createElement("p")
        cantidad.classList.add("text-center")
        cantidad.textContent = "Cantidad: " + producto.cantidad

        let Tsubtotal = document.createElement("p")
        Tsubtotal.classList.add("text-center")
        Tsubtotal.textContent = "Subtotal: " + subtotal
        
        subtotal = producto.cantidad * producto.precio
        contotal.textContent = "El total es: " + subtotal + subtotal
        
        //padres e hijos
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)

    })
    modalventa.show()

       
    /*carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row", "mt-2")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")

        let totalCompra=document.createElement("p")
        totalCompra.classList.add("text-center")
        totalCompra.textContent="total compra"
                    
        //padres e hijos
        fila.appendChild(columna1)
        columna1.appendChild(totalCompra)
        contenedor.appendChild(fila)
    })*/

})