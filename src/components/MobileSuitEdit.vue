<template>
  <section class="section">
    <router-link :to="{name: 'List', params: {version: $route.params.version}}">一覧</router-link> |
    <router-link :to="{name: 'Detail', params: {version: $route.params.version, id: $route.params.id}}">詳細</router-link>

    <h2>基本情報</h2>
    <div class="container">
      <section>
        <h3>機体名</h3>
        <b-input v-model.trim="suit.name"></b-input>
      </section>
      <section>
        <h3>換装元機体</h3>
        <b-input v-model="suit.parentId"></b-input>
      </section>
      <section>
        <h3>換装先機体</h3>
        <div v-for="(childId, index) in suit.childIds" :key="childId" class="form">
          <b-input v-bind:value="childId"></b-input>
          <b-button @click="deleteChild(index)" class="is-danger">削除</b-button>
        </div>
        <b-input v-model="newChildId"></b-input>
        <b-button @click="addChild" class="is-info">追加</b-button>
      </section>
      <section>
        <h3>出典作品</h3>
        <b-input v-model.trim="suit.from"></b-input>
      </section>
      <section>
        <h3>コスト</h3>
        <b-input v-model.number="suit.cost"></b-input>
      </section>
      <section>
        <h3>耐久値</h3>
        <b-input v-model.number="suit.hp"></b-input>
      </section>
      <section>
        <h3>耐久値(復活/回復)</h3>
        <b-input v-model.number="suit.subHP"></b-input>
      </section>
      <section>
        <h3>タグ</h3>
        <div v-for="(tag, index) in suit.tags" :key="tag" class="form">
          <b-input v-bind:value="tag"></b-input>
          <button v-on:click="deleteTag(index)">削除</button>
        </div>
        <b-input v-model="newTag"></b-input>
        <button v-on:click="addTag">追加</button>
      </section>
      <section>
        <b-button @click="save" class="is-primary">基本情報保存</b-button>
      </section>
    </div>
    <h2>詳細解説</h2>
    <section>
      <h2>機体概要</h2>
      <p>{{ summary }}</p>
    </section>
    <section>
      <h2>基本戦術</h2>
      <p>{{ tactics }}</p>
    </section>
    <section>
      <h2>武装解説</h2>
    </section>
    <section>
      <h2>コンボ表</h2>
    </section>
    <section>
      <h2>僚機考察</h2>
    </section>
  </section>
</template>

<script>
export default {
  name: 'MobileSuitDetail',
  data() {
    return {
      suit: {
        name: "",
        from: "",
        cost: 0,
        hp: 0,
        subHP: 0,
        childIds: [],
        detail: {},
      },
      newChildId: null,
      newTag: null,
    }
  },
  mounted() {
    let key = this.$route.params.version + '/suits/' + this.$route.params.id
    this.axios
      .get(process.env.VUE_APP_API_BASE_URL + '/' + key)
      .then(response => {
        this.suit = response.data
      })
  },
  computed: {
    summary: function() {
      if (this.suit.detail != null) {
        return this.suit.detail.summary
      }
      return ""
    },
    tactics: function() {
      if (this.suit.detail != null) {
        return this.suit.detail.tactics
      }
      return ""
    },
    arms: function() {
      if (this.suit.detail != null) {
        return this.suit.detail.arms
      }
      return []
    },
    combos: function() {
      if (this.suit.detail != null) {
        return this.suit.detail.combos
      }
      return []
    },
    partnerCandidates: function() {
      if (this.suit.detail != null) {
        return this.suit.detail.partnerCandidates
      }
      return []
    },

  },
  methods: {
    savedDialog() {
      this.$buefy.dialog.alert("更新しました")
    },
    addChild() {
      if (this.suit.childIds === null) {
        this.suit.childIds = []
      }
      this.suit.childIds.push(this.newChildId)
      this.newChildId = null
    },
    deleteChild(id) {
      this.suit.childIds.splice(id, 1)
    },
    addTag() {
      if (this.suit.tags === null) {
        this.suit.tags = []
      }
      this.suit.tags.push(this.newTag)
      this.newTag = null
    },
    save() {
      this.axios
        .put(process.env.VUE_APP_API_BASE_URL + '/' + this.$route.params.version + '/suits/' + this.$route.params.id, this.suit)
        .then(response => { 
          this.suit = response.data
          this.savedDialog()
        })
        .catch(error => {
          alert("更新失敗")
          console.log(error)
        })
    },
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
