(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b95e952"],{"0006":function(t,s,a){"use strict";var e=a("64ce"),i=a.n(e);i.a},"64ce":function(t,s,a){},c84b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("MobileSuitDetail")],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container overview"},[a("router-link",{attrs:{to:{name:"List",params:{version:t.$route.params.version}}}},[t._v("一覧に戻る")]),a("article",{staticClass:"panel is-primary"},[a("p",{staticClass:"panel-heading"},[t._v(" "+t._s(t.suit.name)+" ")]),a("a",{staticClass:"panel-block"},[t._m(0),t._v(" 登場作品: "+t._s(t.suit.from)+" ")]),a("a",{staticClass:"panel-block"},[t._m(1),t._v(" コスト: "+t._s(t.suit.cost)+" ")]),0===t.suit.subHP?[a("a",{staticClass:"panel-block"},[t._m(2),t._v(" 耐久値: "+t._s(t.suit.hp)+" ")])]:[a("a",{staticClass:"panel-block"},[t._m(3),t._v(" 耐久値: "+t._s(t.suit.hp)+" + "+t._s(t.suit.subHP)+" ")])],t.suit.parentId||t.suit.childIds?[t.suit.parentId?[a("a",{staticClass:"panel-block"},[t._m(4),t._v(" 換装元機体: "+t._s(t.suit.parentId)+" ")])]:t._e(),t.suit.childIds?[a("a",{staticClass:"panel-block"},[t._m(5),t._v(" 換装先: "+t._s(t.suit.childIds.join("/"))+" ")])]:t._e()]:[t._m(6)],a("a",{staticClass:"panel-block"},[t._m(7),t.suit.tags?[t._v(" タグ: "+t._s(t.suit.tags.join("/"))+" ")]:void 0],2)],2),a("section",[a("h2",[t._v("機体概要")]),a("p",[t._v(t._s(t.summary))])]),a("section",[a("h2",[t._v("基本戦術")]),a("p",[t._v(t._s(t.tactics))])]),t._m(8),t._m(9),t._m(10)],1)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-film",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-battery-full",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-exhange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-exchange-alt",attrs:{"aria-hidden":"true"}})]),t._v(" 換装: - ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-tags",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("武装解説")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("コンボ表")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("僚機考察")])])}],r={name:"MobileSuitDetail",data:function(){return{suit:{}}},mounted:function(){var t=this,s=new Date,a=this.$route.params.version+"/suits/"+this.$route.params.id,e=a+"/fetchedAt";localStorage.getItem(a)&&localStorage.getItem(e)>s.getTime()/1e3-3?this.suit=JSON.parse(localStorage.getItem(a)):this.axios.get("https://argama-283817.an.r.appspot.com/versions/"+a).then((function(i){t.suit=i.data,localStorage.setItem(a,JSON.stringify(t.suit)),localStorage.setItem(e,s.getTime()/1e3)}))},computed:{summary:function(){return null!=this.suit.detail?this.suit.detail.summary:""},tactics:function(){return null!=this.suit.detail?this.suit.detail.tactics:""},arms:function(){return null!=this.suit.detail?this.suit.detail.arms:[]},combos:function(){return null!=this.suit.detail?this.suit.detail.combos:[]},partnerCandidates:function(){return null!=this.suit.detail?this.suit.detail.partnerCandidates:[]}},methods:{unset:function(){this.$delete(this.suit)}}},c=r,u=(a("0006"),a("2877")),o=Object(u["a"])(c,n,l,!1,null,"64e673f5",null),_=o.exports,f={name:"Detail",components:{MobileSuitDetail:_}},h=f,m=Object(u["a"])(h,e,i,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2b95e952.4cbf4f3c.js.map