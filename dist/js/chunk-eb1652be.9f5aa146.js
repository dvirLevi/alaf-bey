(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb1652be"],{"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a90":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),s=i("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!s||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},"75aa":function(t,e,n){"use strict";var r=n("bca0"),o=n.n(r);o.a},a380:function(t,e,n){"use strict";var r=n("3a90"),o=n.n(r);o.a},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),s=n("5135"),u=n("c6b6"),c=n("7156"),d=n("c04e"),f=n("d039"),l=n("7c73"),p=n("241c").f,v=n("06cf").f,b=n("9bf2").f,h=n("58a8").trim,x="Number",m=o[x],y=m.prototype,w=u(l(y))==x,I=function(t){var e,n,r,o,i,a,s,u,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+c}for(i=c.slice(2),a=i.length,s=0;s<a;s++)if(u=i.charCodeAt(s),u<48||u>o)return NaN;return parseInt(i,r)}return+c};if(i(x,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(w?f((function(){y.valueOf.call(n)})):u(n)!=x)?c(new m(I(e)),n,E):I(e)},S=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)s(m,A=S[N])&&!s(E,A)&&b(E,A,v(m,A));E.prototype=y,y.constructor=E,a(o,x,E)}},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("5135"),a=Object.defineProperty,s={},u=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,d=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return s[t]=!!n&&!o((function(){if(c&&!r)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,d,f)}))}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),s=n("65f0"),u=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,d=4==t,f=6==t,l=5==t||f;return function(p,v,b,h){for(var x,m,y=i(p),w=o(y),I=r(v,b,3),A=a(w.length),E=0,S=h||s,N=e?S(p,A):n?S(p,0):void 0;A>E;E++)if((l||E in w)&&(x=w[E],m=I(x,E,y),t))if(e)N[E]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return E;case 2:u.call(N,x)}else if(d)return!1;return f?-1:c||d?d:N}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},bca0:function(t,e,n){},dc67:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"row center"},[n("div",{staticClass:"col-md-4"},[t._l(t.letterAndSound,(function(e,r){return n("parts",{key:e.id,attrs:{item:e,index:t.index,correntIndex:r},on:{customEvent:t.playSound}})})),n("audio",{ref:"sound"})],2)]),n("div",{staticClass:"row center mt-4 pt-4 border-top"},[n("ButtonLink",{staticClass:"center col-md-1 col-3 h3 p-0",attrs:{text:"",link:""},on:{customEvent:function(e){t.playList=!t.playList}}},[n("i",{staticClass:"m-2",class:t.playList?"fas fa-stop":"fas fa-play"})])],1)])])},o=[],i=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"c-p mt-md-4 mt-1",class:{"active-color":t.ifCorrentPart},on:{click:function(e){return t.$emit("customEvent",t.correntIndex)}}},[t._v(" "+t._s(t.item.text)+" ")])}),a=[],s=(n("a9e3"),{name:"",components:{},props:{item:Object,correntIndex:Number,index:Number},data:function(){return{}},methods:{},computed:{ifCorrentPart:function(){return this.index===this.correntIndex}}}),u=s,c=(n("a380"),n("2877")),d=Object(c["a"])(u,i,a,!1,null,"5673c51b",null),f=d.exports,l=n("fd96"),p={name:"partsOfRead",components:{parts:f},props:{},data:function(){return{index:0,playList:!1}},mounted:function(){this.playSound(0)},methods:{playSound:function(t){var e=this;this.index=t,this.$refs.sound.src="../"+this.letterAndSound[t].sound,this.$refs.sound.play(),this.$refs.sound.onended=function(){e.playList&&(e.letterAndSound.length-1===e.index?e.playSound(0):e.playSound(t+1))}}},computed:{correntPart:function(){var t=this,e=l["a"].filter((function(e){return e.id==t.$route.params.id}));return e[0]},letterAndSound:function(){return this.correntPart.partsOfRead}},watch:{playList:function(){this.playList?this.playSound(this.index):this.$refs.sound.pause()}}},v=p,b=(n("75aa"),Object(c["a"])(v,r,o,!1,null,"134513fd",null));e["default"]=b.exports},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fd96:function(t,e,n){"use strict";var r=[{partsOfRead:[{text:"בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים",sound:"audio/bareshis-boro/1.wav",id:1},{text:"אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ:",sound:"audio/bareshis-boro/2.wav",id:2},{text:"וְהָאָ֗רֶץ הָֽיְתָ֥ה תֹ֨הוּ֙ וָבֹ֔הוּ",sound:"audio/bareshis-boro/3.wav",id:3},{text:"וְחֹ֖שֶׁךְ עַל-פְּנֵ֣י תְה֑וֹם",sound:"audio/bareshis-boro/4.wav",id:4},{text:"וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל-פְּנֵ֥י הַמָּֽיִם:",sound:"audio/bareshis-boro/5.wav",id:5}],id:1},{partsOfRead:[{text:"בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים",sound:"audio/bareshis-boro/1.wav",id:1},{text:"אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ:",sound:"audio/bareshis-boro/2.wav",id:2},{text:"וְהָאָ֗רֶץ הָֽיְתָ֥ה תֹ֨הוּ֙ וָבֹ֔הוּ",sound:"audio/bareshis-boro/3.wav",id:3},{text:"וְחֹ֖שֶׁךְ עַל-פְּנֵ֣י תְה֑וֹם",sound:"audio/bareshis-boro/4.wav",id:4},{text:"וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל-פְּנֵ֥י הַמָּֽיִם:",sound:"audio/bareshis-boro/5.wav",id:5}],id:2}];e["a"]=r}}]);
//# sourceMappingURL=chunk-eb1652be.9f5aa146.js.map