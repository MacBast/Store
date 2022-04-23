import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let btnregistro=document.getElementById("btnRegistro");
let modalinformativo = new bootstrap.Modal(document.getElementById('modalinfo'))

btnregistro.addEventListener("click", function(event){
    //para no reiniciar el formulario se usa lo siguiente
    event.preventDefault()

    let correo = document.getElementById("correo").value
    let pass = document.getElementById("password").value

    const auth = getAuth();
        createUserWithEmailAndPassword(auth, correo, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            let textinfo = document.getElementById("infogeneral")
            let formulario = document.getElementById("formularioregistro")
            formulario.reset()
            textinfo.textContent="Exito registrandote"
            modalinformativo.show()
            setTimeout(function(){
                modalinformativo.hide()
            }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            let textinfo = document.getElementById("infogeneral")
            textinfo.textContent = "Falla: " + errorMessage
            modalinformativo.show()
            setTimeout(function () {
                modalinformativo.hide()
            }, 2000);
        });


})

/*retro 
recargar pagina, y pintar un icono de una persona mas el correo de la persona
*/