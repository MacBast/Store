export function ampliarInformacion(event) {
    let producto={}
    //console.log(event.target.classList)
    if(event.target.classList.contains("btn")){
        //console.log("Estoy haciendo clic en el boton")
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h2").textContent,
            descripcion: event.target.parentElement.querySelector("p").textContent
        }

        let foto=document.getElementById("fotoInfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nameInfo")
        nombre.textContent=producto.nombre
        let precio=document.getElementById("precioInfo")
        precio.textContent=producto.precio
        let descripcion = document.getElementById("descripInfo")
        descripcion.textContent = producto.descripcion

    }



}