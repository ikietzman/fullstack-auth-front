<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Home',
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location.href = 'http://127.0.0.1:8080/loggedin'
      }
    })
    const ui = new firebaseui.auth.AuthUI(firebase.auth())

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/loggedin'
    })
  }
}
</script>
