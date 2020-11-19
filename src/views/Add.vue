<template>
  <div>
    <h3>Add Game</h3>
    <div class="form-container">
      <div>
        Team A: <input v-model="newGame.teama">
      </div>
      <div>
        Team B: <input v-model="newGame.teamb">
      </div>
      <div>
        Date: <input v-model="newGame.date" type="date">
      </div>
      <div>
        Location: <input v-model="newGame.location">
      </div>
      <div>
        Completed: <input type="checkbox" v-model="newGame.completed">
      </div>
      <div>
        Team A Score: <input v-model.number="newGame.teamascore">
      </div>
      <div>
        Team B: <input v-model.number="newGame.teambscore">
      </div>
      <div>
        <button @click="saveteam">Save</button>
      </div>
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
      newGame: {
        teama: '',
        teamb: '',
        date: '',
        location: '',
        completed: false,
        teamascore: 0,
        teambscore: 0,
        uid: ''
      }
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
    },
    saveteam () {
      axios.post('http://localhost:3000/usergames', { game: this.newGame, uid: this.user.uid })
        .then(results => {
          console.log(results)
          if (results.status === 200) {
            this.$router.push({ name: 'List' })
          }
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.newGame.uid = this.user.uid
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
  .form-container div {
    padding:0.5em;
    text-align:left;
  }
</style>
