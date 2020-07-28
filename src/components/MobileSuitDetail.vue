<template>
  <div class="container overview">
    <router-link :to="{name: 'List', params: {version: $route.params.version}}">一覧</router-link> |
    <router-link :to="{name: 'Edit', params: {version: $route.params.version, id: $route.params.id}}">編集</router-link>
    <template v-if="!suit">
      <p>
      {{ $route.params.id }} の情報は未登録です。編集画面から登録を行ってください。
      </p>
    </template>
    <template v-else>
      <article class="panel is-primary">
        <p class="panel-heading">
        {{ suit.name }}
        </p>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-film" aria-hidden="true"></i>
          </span>
          登場作品: {{ suit.from }}
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-user" aria-hidden="true"></i>
          </span>
           搭乗者: {{ suit.pilot }}
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-battery-full" aria-hidden="true"></i>
          </span>
          コスト: {{ suit.cost }}
        </a>

        <template v-if="suit.subHP === 0">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            耐久値: {{ suit.hp }}
          </a>
        </template>
        <template v-else>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-exhange-alt" aria-hidden="true"></i>
            </span>
            耐久値: {{ suit.hp }} + {{ suit.subHP }}
          </a>
        </template>

        <template v-if="suit.parentId || suit.childIds">
          <template v-if="suit.parentId">
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              </span>
              換装元機体: {{ suit.parentId }}
            </a>
          </template>
          <template v-if="suit.childIds">
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              </span>
              換装先: {{ suit.childIds.join("/") }}
            </a>
          </template>
        </template>
        <template v-else>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
            </span>
            換装: -
          </a>
        </template>

        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-tags" aria-hidden="true"></i>
          </span>
          <template v-if="suit.tags">
            タグ: {{ suit.tags.join("/") }}
          </template>
          <template v-else>
          </template>
        </a>
      </article>
      <section>
        <b-collapse
          aria-id="summary"
          class="panel"
          animation="slide"
          :open.sync="summaryOpen">
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="summary">
            <strong>
              <i class="fas fa-robot"></i> 機体概要
            </strong>
          </div>
          <div class="panel-block">
            {{ summary }}
          </div>
        </b-collapse>
      </section>
      <br>
      <section>
        <b-collapse
          aria-id="tactics"
          class="panel"
          animation="slide"
          :open.sync="tacticsOpen">
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="tactics">
            <strong>
              <i class="fas fa-file-alt"></i> 基本戦術・立ち回り
            </strong>
          </div>
          <div class="panel-block">
            {{ tactics }}
          </div>
        </b-collapse>
      </section>
      <br>
      <section>
        <b-collapse
          aria-id="arms"
          class="panel"
          animation="slide"
          :open.sync="armsOpen">
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="arms">
            <strong>
              <i class="fas fa-bomb"></i> 武装解説
            </strong>
          </div>
          <div class="panel-block">
            {{ arms }}
          </div>
        </b-collapse>
      </section>
      <br>
      <section>
        <b-collapse
          aria-id="combos"
          class="panel"
          animation="slide"
          :open.sync="combosOpen">
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="combos">
            <strong>
              <i class="fas fa-fast-forward"></i> コンボ表
            </strong>
          </div>
          <div class="panel-block">
            {{ combos }}
          </div>
        </b-collapse>
      </section>
      <br>
      <section>
        <b-collapse
          aria-id="partners"
          class="panel"
          animation="slide"
          :open.sync="partnersOpen">
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="partners">
            <strong>
              <i class="fas fa-bomb"></i> 僚機考察
            </strong>
          </div>
          <div class="panel-block">
          </div>
        </b-collapse>
      </section>
    </template>
    </div>
</template>

<script>
export default {
  name: 'MobileSuitDetail',
  data() {
    return {
      suit: {},
      summaryOpen: false,
      tacticsOpen: false,
      armsOpen: false,
      combosOpen: false,
      partnersOpen: false,
    }
  },
  mounted() {
    let now = new Date()
    let key = this.$route.params.version + '/suits/' + this.$route.params.id
    let fetchedAtKey = key + '/fetchedAt'
    if (process.env.NODE_ENV == 'production' && localStorage.getItem(key) && localStorage.getItem(fetchedAtKey) > (now.getTime()/1000-3)) {
      this.suit = JSON.parse(localStorage.getItem(key))
    } else {
      this.axios
        .get(process.env.VUE_APP_API_BASE_URL + '/' + key)
        .then(response => {
          this.suit = response.data
          localStorage.setItem(key, JSON.stringify(this.suit))
          localStorage.setItem(fetchedAtKey,now.getTime()/1000)
        })
    }
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
    unset() {
      this.$delete(this.suit)
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
