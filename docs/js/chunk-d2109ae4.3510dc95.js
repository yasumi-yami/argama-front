(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2109ae4"],{"25f0":function(t,n,e){"use strict";var o=e("6eeb"),a=e("825a"),i=e("d039"),r=e("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&o(RegExp.prototype,s,(function(){var t=a(this),n=String(t.source),e=t.flags,o=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?r.call(t):e);return"/"+n+"/"+o}),{unsafe:!0})},"59ca":function(t,n,e){"use strict";function o(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var a=o(e("c23d")),i="firebase",r="7.17.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
a.registerVersion(i,r,"app"),t.exports=a},"5d7f":function(t,n,e){"use strict";var o=e("9c03"),a=e.n(o);a.a},"6f6c":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"signin"},[e("h2",[t._v("ログイン")]),e("div",{staticClass:"mt-2"},[e("b-button",{attrs:{block:"",variant:"primary"},on:{click:t.googleLogin}},[t._v("Google ログイン")])],1)])},a=[],i=(e("d3b7"),e("25f0"),e("59ca")),r=e.n(i),s=e("a18c"),c={name:"Signin",data:function(){return{username:"",password:""}},methods:{googleLogin:function(){var t=this,n=new r.a.auth.GoogleAuthProvider;r.a.auth().signInWithPopup(n).then((function(t){console.log(t.user),t.user.getIdToken().then((function(t){localStorage.setItem("idToken",t.toString())})),s["a"].push("/")})).catch((function(n){console.log(n),t.errorMessage=n.message,t.showError=!0}))}}},u=c,l=(e("5d7f"),e("2877")),f=Object(l["a"])(u,o,a,!1,null,"caef8a20",null);n["default"]=f.exports},"9c03":function(t,n,e){},ad6d:function(t,n,e){"use strict";var o=e("825a");t.exports=function(){var t=o(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}}}]);
//# sourceMappingURL=chunk-d2109ae4.3510dc95.js.map