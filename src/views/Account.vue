<template>
  <div>
    <h2>Account</h2>
    <div>
      Display Name: <input v-model="user.displayName"> <button @click="saveName">Save</button>
    </div>
    <div>
      New Password: <input v-model="user.password"> <button @click="savePassword">Save</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Account',
  data () {
    return {
      user: {},
      password: ''
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
    },
    saveName () {

    },
    savePassword () {

    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        window.location.href = 'http://127.0.0.1:8080'
      }
    })
  }
}
</script>
