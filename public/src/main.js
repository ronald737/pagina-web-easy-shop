import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth} from './app/firebase.js'
import {loginCheck} from './app/loginCheck.js'

import './app/registroForm.js'
import './app/logout.js'
import './app/signinForm.js'
import './app/loginGoogle.js'
import './app/ghLogin.js'


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    //if (user) {   
    //} else {
      //  loginCheck(user)
    //}
})
 







