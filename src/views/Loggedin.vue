<template>
  <div class="loggedin">
    <button class="logout" @click="logout">Log Out </button>
    <nav>
      <router-link :to="{name: 'Dashboard'}">Dashboard</router-link> |
      <router-link :to="{name: 'Account'}">Account</router-link> |
      <router-link :to="{name: 'Crud'}">CRUD</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Loggedin',
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

<style>
  .loggedin {
    position:relative;
  }
  .logout {
    position:absolute;
    top:0;
    right:0.25em;
  }
</style>
