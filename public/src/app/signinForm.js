import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showToast } from "./toast.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        //funcion para dar bienvenida al usuario
        const modal = bootstrap.Modal.getInstance(document.querySelector('#entrarModal'))
        modal.hide()

        showToast('Bienvenido ' + credentials.user.email)


    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showToast('Contraseña incorrecta', 'error')
        } else if (error.code === "auth/user-not-found") {
            showToast('Usuario no encontrado', 'error')
        } else {
            showToast(error.message, 'error')
        }
    }
})