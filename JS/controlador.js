
import {pintarTienda} from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"

//llamando al modulo de pintar
pintarTienda();

//llamando al modulo ampliarinfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    
    let Modalinfoproducto = new bootstrap.Modal(document.getElementById('Modalinfoproducto'))
    //console.log(event.target)
    ampliarInformacion(event)
    Modalinfoproducto.show()

})