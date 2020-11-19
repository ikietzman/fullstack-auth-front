<template>
  <div>
    <h3>Edit Game</h3>
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
      game: {}
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
        axios.get('http://localhost:3000/game/' + this.$route.params.gameid)
          .then(results => {
            this.game = results.data[0]
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
