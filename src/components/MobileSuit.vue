<template>
  <div class="container">
    <h2>使用可能機体一覧</h2>
    <b-input v-model="name" placeholder="機体名で検索"></b-input>
    <b-collapse :open="false" aria-id="filter">
      <button class="button is-info" slot="trigger" aria-controls="filter">
        <i class="fas fa-search" aria-hidden="true"></i>
        検索条件を表示
      </button>
      <div class="block">
        <h4>コスト</h4>
        <b-checkbox  v-for="cost in costs" :key="cost" v-model="selectedCosts" v-bind:native-value="cost" type="is-info">{{cost}}</b-checkbox>
      </div>

      <div class="block">
        <h4>タイトル</h4>
        <b-checkbox  v-for="title in titles" :key="title" v-model="selectedTitles" v-bind:native-value="title" type="is-info">{{title}}</b-checkbox>
      </div>
      <div class="block">
        <h4>タグ(and条件)</h4>
        <b-checkbox v-for="tag in tags" :key="tag" size="small" v-bind:native-value="tag" v-model="selectedTags">{{tag}}</b-checkbox>
      </div>
    </b-collapse>
    <div id="list" v-for="suit in search" :key="suit.id">
      <article class="panel is-primary">
        <p class="panel-heading">
        <router-link :to="{name: 'Detail', params: {version: $route.params.version, id: suit.id}}">{{ suit.name }}</router-link> 
        </p>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-battery-full" aria-hidden="true"></i>
          </span>
          {{ suit.cost }}
          <template v-if="suit.subHP === 0">
            <span class="panel-icon" style="margin: 0 5px 0 10px">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            {{ suit.hp }}
          </template>
          <template v-else>
            <span class="panel-icon" style="margin: 0 5px 0 10px">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            {{ suit.hp }} + {{ suit.subHP }}
          </template>

        </a>

        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-tags" aria-hidden="true"></i>
          </span>
          <template v-if="suit.tags">
            {{ suit.tags.join("/") }}
          </template>
          <template v-else>
          </template>
        </a>
      </article>
    </div>
    <br>
    <div class="container">
      <b-field>
        <b-input v-model="newId" placeholder="追加する機体のID"></b-input>
        <router-link tag="button" :to="{name: 'Edit', params: {version: $route.params.version, id: newId}}">新規登録</router-link> 
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileSuits',
  data() {
    return {
      newId: '',
      version: '',
      currentSuit: '',
      currentId: '',
      suits: {},
      name: '',
      selectedTags: [],
      tags: [],
      selectedCosts: [],
      costs: [],
      titles: [],
      selectedTitles: [],
    }
  },
  mounted() {
    let now = new Date()
    let key = this.$route.params.version + '/suits'
    let fetchedAtKey = key + '/fetchedAt'
    if (localStorage.getItem(key) && localStorage.getItem(fetchedAtKey) > (now.getTime()/1000-3)) {
      this.suits = JSON.parse(localStorage.getItem(key))
    } else {
      this.axios
        .get(process.env.VUE_APP_API_BASE_URL + '/' + this.$route.params.version + '/suits')
        .then(response => {
          this.suits = response.data.items
          localStorage.setItem(key, JSON.stringify(this.suits))
          localStorage.setItem(fetchedAtKey, now.getTime()/1000)
          var tagSet = new Set()
          var costSet = new Set()
          var titleSet = new Set()
          for (var k in this.suits) {
            for (var idx in this.suits[k].tags) {
              tagSet.add(this.suits[k].tags[idx])
            }
            costSet.add(this.suits[k].cost)
            titleSet.add(this.suits[k].from)
          }
          this.tags = Array.from(tagSet)
          this.costs = Array.from(costSet)
          this.selectedCosts = Array.from(costSet)
          this.titles = Array.from(titleSet)
          this.selectedTitles = Array.from(titleSet)
        })

    }
  },
  computed: {
    search: function() {
      var searched = Object.values(this.suits)
      searched = searched.filter(
        suit => suit.name.includes(this.name)
      )
      searched = searched.filter(
        suit => this.selectedTitles.includes(suit.from)
      )
      searched = searched.filter(
        suit => this.selectedCosts.includes(suit.cost)
      )
      if (this.selectedTags.length > 0) {
        searched = searched.filter(
          suit => this.selectedTags.every(tag => suit.tags !== null && suit.tags.includes(tag))
        )
      }
      return searched
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
