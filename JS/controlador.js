
import {pintarTienda} from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"
import {pintarCarrito} from "./pintarCarrito.js"
//crear objeto bacio
let producto={}
let total1 = 0
let contotal = document.getElementById("contenedorTotal")


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

    //limpiar carrito
    let limpiar =document.getElementById("btnLimpiar")
    limpiar.addEventListener('click', function(event){
        carrito=[]
        capsula.classList.add("invisible")
        total1=0
        document.getElementById("contenedorVenta").innerHTML=""
        contotal.textContent = "El total es: 0";
    })
    

    
    let limpiarInputNumber = document.getElementById("btnAdd");
    let cero = document.getElementById("cantidadProducto");
    limpiarInputNumber.addEventListener('click', function(event){
        cero.value=1;
    })



    //4 ver resumen de venta 
    //if(event.target.classList.contains("btn")){
    let btnCarrito = document.getElementById("resumencarrito")

    btnCarrito.addEventListener('click', function (event) {
        
        let contenedor = document.getElementById("contenedorVenta")
        let modalventa = new bootstrap.Modal(document.getElementById('ModalCarrito'))
        let subtotal = 0
        let total2=0
    //borrar el contenido de html
    //contenedor.innerHTML = ""


    if (carrito.length==0 ) {

        let fila = document.createElement("div")
        fila.classList.add("row", "mt-2")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")

        let texto = document.createElement("h1")
        texto.classList.add("text-center")
        texto.textContent = "No hay productos!"

        columna1.appendChild(texto)
        fila.appendChild(columna1)
        contenedor.appendChild(fila)

        modalventa.show()

        console.log("carrito vacio")
        
        }else{    //recorrer el carrito para pintar los productos en la factura
        carrito.forEach(function (producto) {

        let cantpro= producto.cantidad
        let preciopro= producto.precio


        subtotal = cantpro * preciopro
        total1 = subtotal
        total2= total1+total2
        contotal.textContent = "El total es: " + total2;
    
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
})
    
//boton convertir 

    let btnconvertir =document.getElementById("btnConv")
    btnconvertir.addEventListener('click',function (event) {
        console.log("btn USD")
        
    })
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
