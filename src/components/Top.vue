<template>
  <div class="top">
    <h1>{{ msg }}</h1>
    <li>
      <ul><router-link :to="{name: 'List', params: {version: 'mbon'}}">マキオン</router-link></ul>
      <ul><router-link :to="{name: 'List', params: {version: 'exvs2'}}">EXVS2</router-link></ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
