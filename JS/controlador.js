
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
        console.log(cantidadproducto)
    })