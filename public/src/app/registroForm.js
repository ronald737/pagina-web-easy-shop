import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { auth } from './firebase.js'
import { showToast } from './toast.js'
const registroForm = document.querySelector('#registro-form')

registroForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = registroForm['registro-email'].value
    const password = registroForm['registro-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        // cierre del registro modal
        const registroModal = document.querySelector('#registroModal')
        const modal = bootstrap.Modal.getInstance(registroModal)
        modal.hide()

        showToast("Bienvenido " + userCredentials.user.email)

        
    } catch (error) {

        if (error.code == 'auth/email-already-in-use') {
            showToast("El correo ya está en uso", "error")
        }
        else if (error.code === 'auth/invalid-email') {
            showToast("Email inválido", "error")
        }

        else if (error.code == 'auth/weak-password') {
            showToast("Contraseña débil, intenta de nuevo", "error")
        }
        else if (error.code) {
            showToast("Algo salió mal", "error")
        }
    }
})