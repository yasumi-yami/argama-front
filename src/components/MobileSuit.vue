<template>
  <div class="container">
    <h1>機体情報</h1>

    <div class="buttons" id="list" v-for="suit in suits" :key="suit.id">
      <b-button type="is-info">{{ suit.id }}{{ suit.name }}</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MobileSuits',
  data() {
    return {
      currentSuit: '',
      currentId: '',
      suits: {}
    }
  },
  mounted() {
    var now = new Date()
    if (localStorage.suits && localStorage.getItem('fetchedAt') > now.getTime()/1000) {
      this.suits = JSON.parse(localStorage.getItem('suits'))
    } else {
      this.axios
        .get(process.env.VUE_APP_API_BASE_URL + '/mbon/suits')
        .then(response => {
          this.suits = response.data.items
          localStorage.setItem('suits', JSON.stringify(this.suits))
          localStorage.setItem('fetchedAt',now.getTime()/1000+864*7) // デバッグ用に短時間
        })
    }
  },
  methods: {
    unset() {
      this.$delete(this.suits)
      localStorage.setItem('suits', JSON.stringify(this.suits))
    },
    selectSuit (id) {
      this.currentId = id
      this.currentSuit = this.suits[id]
    }
  }
}
</script>

<style scoped>
</style>
