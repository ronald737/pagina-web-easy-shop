import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showToast } from "./toast.js"


const gbBoton = document.querySelector('#loginGithub')

gbBoton.addEventListener('click', async () => {
    // el new googleprovider es una instancia pq es una clase y devuelve objetos 
    const provider = new GithubAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#entrarModal'))
        modal.hide()
        showToast('Bienvenido ' + credentials.user.displayName, 'success')


    } catch (error) {
        console.log(error)
    }
})