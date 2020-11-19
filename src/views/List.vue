<template>
  <div>
    <h3>Games List</h3>
    <div class="list-item" v-for="game in games" :key="game.gameid">
      {{ game.gameid }} - {{ game.teama }} vs. {{ game.teamb }} - {{ game.date}} <router-link :to="{name: 'Game', params: {gameid: game.gameid}}"><button>Edit</button></router-link> <button>Delete</button>
    </div>
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

<style scoped>
  .list-item {
    border:solid 1px;
    padding:0.5em;
  }
</style>
