import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let btnregistro=document.getElementById("btnRegistro");

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
            // ...
            console.log("exito")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("upss fallo")
        });


})