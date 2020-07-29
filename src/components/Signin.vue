<template>
  <div class="signin">
    <h2>ログイン</h2>
    <div class="mt-2"><b-button block variant="primary" @click="googleLogin">Google ログイン</b-button></div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user)
        result.user.getIdToken().then(idToken => {
          localStorage.setItem("idToken", idToken.toString())
        })
        router.push('/')
      }).catch(error => {
        console.log(error)
        this.errorMessage = error.message
        this.showError = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
