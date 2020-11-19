<template>
  <div>
    <h2>CRUD</h2>
    <router-link :to="{name: 'List'}">Games List</router-link> |
    <router-link :to="{name: 'Add'}">Add Game</router-link>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'

export default {
  name: 'Crud',
  data () {
    return {
      user: {},
      games: []
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
        axios.get('http://localhost:3000/usergames/' + this.user.uid)
          .then(results => {
            this.games = results.data
          })
          .catch(err => {
            throw err
          })
      } else {
        window.location.href = 'http://127.0.0.1:8080'
        console.log('ain\'t no user')
      }
    })
  }
}
</script>
