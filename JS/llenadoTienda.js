export function pintarTienda() {
    
    //Arreglo que objetos
    let productos=[
        {nombre:"Bugatti Super sport+",precio:"3M dollars",foto:"../img/superSport02.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti The Voiture Noire",precio:"25M dollars",foto:"../img/Foto1.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Veyron",precio:"3.5M dollars",foto:"../img/veyron_04.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti EB 110",precio:"5M dollars",foto:"../img/EB110_09.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti The Bolid",precio:"20M dollars",foto:"../img/bolid_05.png",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Centodieci",precio:"15M dollars",foto:"../img/centidieci_01.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Chiron",precio:"7M dollars",foto:"../img/chiron03.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Divo",precio:"18M dollars",foto:"../img/Divo_06.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Chiron GT",precio:"10M dollars",foto:"../img/GT_08.jpg",descripcion:"Bugatti rapido"},
        {nombre:"Bugatti Type 57 Atlantic",precio:"35M dollars",foto:"../img/atlantic_07.jpg",descripcion:"Bugatti rapido"}
    ]
    //recorriendo un areglo con JS, buscar seleccionar esculcar, mirar 
    //forEach entrar y contar y recorrer lo de un arreglo, el numero de vces que tanga el arreglo
    let fila=document.getElementById("fila")

    productos.forEach(function (producto) {
       /* console.log(producto.nombre)
        console.log(producto.precio)
        console.log(producto.foto)*/
        //pintando con Js
        //1. comenzar a crear la estrucura necesaria
        let columna=document.createElement("div")
        columna.classList.add("col")

        //crear tarjeta
        let tarjeta= document.createElement("div")  
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let foto = document.createElement("img")
        foto.classList.add("card-img-top", "h-100")
        foto.src = producto.foto

        let nombre=document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre


        //precio
        let precio=document.createElement("h2")
        precio.classList.add("text-center")
        precio.textContent=producto.precio
        
        //descripcion
        let descripcion = document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent = producto.descripcion

        let boton = document.createElement("button")
        boton.setAttribute("type", "button")
        boton.classList.add("btn", "btn-info", "mx-4", "mb-2")
        boton.textContent = "Ver producto"

        
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)
        
        /*escuchando click in the button*/
        
    })
}
/*
let boton =document.getElementById("boton")

//detectanod el primer evento 
boton.addEventListener("click", cambiarfoto)

//creando una fucnion 
function cambiarfoto() {
    let foto=document.getElementById("fotoprueba")
    foto.src="img/centidieci_01.jpg"
    console.log("quio pana, que nejesita?")
}
*/