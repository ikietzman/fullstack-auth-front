<template>
  <div>
    <h2>Dashboard</h2>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Dashboard',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        this.user = user
      } else {
        window.location.href = 'http://127.0.0.1:8080'
        console.log('ain\'t no user')
      }
    })
  }
}
</script>
