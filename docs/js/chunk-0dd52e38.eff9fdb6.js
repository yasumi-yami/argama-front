(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dd52e38"],{a808:function(t,a,s){},c84b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("MobileSuitDetail")],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container overview"},[s("router-link",{attrs:{to:{name:"List",params:{version:t.$route.params.version}}}},[t._v("一覧")]),t._v(" | "),s("router-link",{attrs:{to:{name:"Edit",params:{version:t.$route.params.version,id:t.$route.params.id}}}},[t._v("編集")]),t.suit?[s("article",{staticClass:"panel is-primary"},[s("p",{staticClass:"panel-heading"},[t._v(" "+t._s(t.suit.name)+" ")]),s("a",{staticClass:"panel-block"},[t._m(0),t._v(" 登場作品: "+t._s(t.suit.from)+" ")]),s("a",{staticClass:"panel-block"},[t._m(1),t._v(" コスト: "+t._s(t.suit.cost)+" ")]),0===t.suit.subHP?[s("a",{staticClass:"panel-block"},[t._m(2),t._v(" 耐久値: "+t._s(t.suit.hp)+" ")])]:[s("a",{staticClass:"panel-block"},[t._m(3),t._v(" 耐久値: "+t._s(t.suit.hp)+" + "+t._s(t.suit.subHP)+" ")])],t.suit.parentId||t.suit.childIds?[t.suit.parentId?[s("a",{staticClass:"panel-block"},[t._m(4),t._v(" 換装元機体: "+t._s(t.suit.parentId)+" ")])]:t._e(),t.suit.childIds?[s("a",{staticClass:"panel-block"},[t._m(5),t._v(" 換装先: "+t._s(t.suit.childIds.join("/"))+" ")])]:t._e()]:[t._m(6)],s("a",{staticClass:"panel-block"},[t._m(7),t.suit.tags?[t._v(" タグ: "+t._s(t.suit.tags.join("/"))+" ")]:void 0],2)],2),s("section",[s("h2",[t._v("機体概要")]),s("p",[t._v(t._s(t.summary))])]),s("section",[s("h2",[t._v("基本戦術")]),s("p",[t._v(t._s(t.tactics))])]),t._m(8),t._m(9),t._m(10)]:[s("p",[t._v(" "+t._s(t.$route.params.id)+" の情報は未登録です。編集画面から登録を行ってください。 ")])]],2)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-film",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-battery-full",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-exhange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"panel-block"},[s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})]),t._v(" 換装: - ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fas fa-tags",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("h2",[t._v("武装解説")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("h2",[t._v("コンボ表")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("h2",[t._v("僚機考察")])])}],l={name:"MobileSuitDetail",data:function(){return{suit:{}}},mounted:function(){var t=this,a=new Date,s=this.$route.params.version+"/suits/"+this.$route.params.id,e=s+"/fetchedAt";localStorage.getItem(s)&&localStorage.getItem(e)>a.getTime()/1e3-3?this.suit=JSON.parse(localStorage.getItem(s)):this.axios.get("https://argama-283817.an.r.appspot.com/versions/"+s).then((function(i){t.suit=i.data,localStorage.setItem(s,JSON.stringify(t.suit)),localStorage.setItem(e,a.getTime()/1e3)}))},computed:{summary:function(){return null!=this.suit.detail?this.suit.detail.summary:""},tactics:function(){return null!=this.suit.detail?this.suit.detail.tactics:""},arms:function(){return null!=this.suit.detail?this.suit.detail.arms:[]},combos:function(){return null!=this.suit.detail?this.suit.detail.combos:[]},partnerCandidates:function(){return null!=this.suit.detail?this.suit.detail.partnerCandidates:[]}},methods:{unset:function(){this.$delete(this.suit)}}},c=l,u=(s("ea69"),s("2877")),o=Object(u["a"])(c,n,r,!1,null,"70aeecba",null),_=o.exports,m={name:"Detail",components:{MobileSuitDetail:_}},d=m,f=Object(u["a"])(d,e,i,!1,null,null,null);a["default"]=f.exports},ea69:function(t,a,s){"use strict";var e=s("a808"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-0dd52e38.eff9fdb6.js.map