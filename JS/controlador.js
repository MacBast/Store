
import {pintarTienda} from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"
//crear objeto bacio
let producto={}

//llamando al modulo de pintar
pintarTienda();

//llamando al modulo ampliarinfo
let contenedorTienda=document.getElementById("fila")
 
contenedorTienda.addEventListener("click",function(event){
        if(event.target.classList.contains("btn")){
        let Modalinfoproducto = new bootstrap.Modal(document.getElementById('Modalinfoproducto'))
        producto=ampliarInformacion(event)
        Modalinfoproducto.show()
        }
    })


    //call acction add buycar
    //carrito es un arreglo de productos (arreglo de objetos)
    let carrito=[]
    let button = document.getElementById("btnAdd")
    button.addEventListener('click',function(event){
        //console.log("añadicion al car")
        //1. capturar la cantidad of product
        let cantidadproducto=document.getElementById("cantidadProducto").value
        
        //2. agregar la cantidad al objeto en este caso producto
        producto.cantidad=cantidadproducto
        
        // 3. agregar lo capturado en el paso 2 al carrito
        //palabra reserbada PUSH para agregar un elemento a un arreglo
        //push agrega un elemento a un arreglo
        carrito.push(producto)
        

        //tarea calcular la sumatoria de cantidades
        //recorrer el arreglo y sacar la cantidad se rrecorre con un foreach
        let suma=0
        carrito.forEach(function (producto) {
        
            //console.log(producto.cantidad)    
            suma=suma+Number(producto.cantidad)
        })
        let capsula=document.getElementById("capsula")
        capsula.textContent=suma
        capsula.classList.remove("invisible")
        //el .value solo es para los imputs
    })

    let limpiar =document.getElementById("btnLimpiar")
    limpiar.addEventListener('click', function(event){

        carrito=[]
        capsula.classList.add("invisible")
    })