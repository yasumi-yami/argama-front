<template>
  <div class="container">
    <b-input v-model="name" placeholder="機体名"></b-input>
    <b-field>
      <b-checkbox-button  v-for="title in titles" :key="title" v-model="selectedTitles" v-bind:native-value="title" type="is-success">
        <span>{{title}}</span>
      </b-checkbox-button>
    </b-field>
    <b-field>
      <b-checkbox-button  v-for="cost in costs" :key="cost" v-model="selectedCosts" v-bind:native-value="cost" type="is-success">
        <span>{{cost}}</span>
      </b-checkbox-button>
    </b-field>
    <b-checkbox v-for="tag in tags" :key="tag" size="small" v-bind:native-value="tag" v-model="selectedTags">{{tag}}</b-checkbox>
    <div id="list" v-for="suit in search" :key="suit.id">
      <article class="panel is-primary is-active">
        <p class="panel-heading">
        {{ suit.name }}
        </p>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-battery-full" aria-hidden="true"></i>
          </span>
          {{ suit.cost }}
        </a>

        <template v-if="suit.subHP === 0">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            {{ suit.hp }}
          </a>
        </template>
        <template v-else>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            {{ suit.hp }} + {{ suit.subHP }}
          </a>
        </template>
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
  </div>
</template>

<script>
export default {
  name: 'MobileSuits',
  data() {
    return {
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
    if (process.env.NODE_ENV == 'production' && localStorage.suits && localStorage.getItem('fetchedAt') > (now.getTime()/1000-3)) {
      this.suits = JSON.parse(localStorage.getItem('suits'))
    } else {
      this.axios
        .get(process.env.VUE_APP_API_BASE_URL + '/mbon/suits')
        .then(response => {
          this.suits = response.data.items
          localStorage.setItem('suits', JSON.stringify(this.suits))
          localStorage.setItem('fetchedAt',now.getTime()/1000)
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
          this.titles = Array.from(titleSet)
        })

    }
  },
  computed: {
    search: function() {
      var searched = Object.values(this.suits)
      searched = searched.filter(
        suit => suit.name.includes(this.name)
      )
      console.log(this.selectedTitles)
      if (this.selectedTitles.length > 0) {
        searched = searched.filter(
          suit => this.selectedTitles.includes(suit.from)
        )
      }
      if (this.selectedCosts.length > 0) {
        searched = searched.filter(
          suit => this.selectedCosts.includes(suit.cost)
        )
      }
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
</style>
