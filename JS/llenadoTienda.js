export function pintarTienda() {
    
    //Arreglo que objetos
    let productos=[
        {nombre:"Bugatti Super sport+",precio:"3000000",foto:"../img/superSport02.jpg",descripcion:"Bugatti que rompio el record de los 400km/h"},
        {nombre: "Bugatti The Voiture Noire", precio: "25000000", foto: "../img/Foto1.jpg", descripcion:"La mejor obra de arte moderna de Bugatti"},
        {nombre:"Bugatti Veyron",precio:"3500000",foto:"../img/veyron_04.jpg",descripcion:"Uno de los mas lujosos"},
        {nombre:"Bugatti EB 110",precio:"5000000",foto:"../img/EB110_09.jpg",descripcion:"Bugatti que consigio ser el mas rapido en su epoca"},
        {nombre:"Bugatti The Bolid",precio:"20000000",foto:"../img/bolid_05.png",descripcion:"Es todo un Bolido"},
        {nombre:"Bugatti Centodieci",precio:"15000000",foto:"../img/centidieci_01.jpg",descripcion:"El mas Elegante de la familia"},
        {nombre:"Bugatti Chiron",precio:"7000000",foto:"../img/chiron03.jpg",descripcion:"Bugatti para el diario"},
        {nombre:"Bugatti Divo",precio:"18000000",foto:"../img/Divo_06.jpg",descripcion:"Bugatti para conquistar nena he ir de fiesta"},
        {nombre:"Bugatti Chiron GT",precio:"10000000",foto:"../img/GT_08.jpg",descripcion:"Bugatti para cuando quieras correr solo un poquito"},
        {nombre: "Bugatti Type 57 Atlantic", precio: "35M dollars", foto: "../img/atlantic_07.jpg", descripcion:"La mejor obra de arte de Ettore Bugatti"}
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

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
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