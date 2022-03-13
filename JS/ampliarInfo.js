export function ampliarInformacion(event) {
    let producto={}
    //console.log(event.target.classList)
    if(event.target.classList.contains("btn")){
        //console.log("Estoy haciendo clic en el boton")
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent
        }

        console.log(producto)

        let foto=document.getElementById("fotoInfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nameInfo")
        nombre.textContent=producto.nombre
    }



}