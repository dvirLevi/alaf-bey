(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-874eb680"],{"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3475:function(t,e,r){"use strict";var n=r("f326"),o=r.n(n);o.a},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),s=i("filter"),u=a("filter");n({target:"Array",proto:!0,forced:!s||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5451:function(t,e,r){"use strict";var n=r("7f82"),o=r.n(n);o.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},"7f82":function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("6eeb"),s=r("5135"),u=r("c6b6"),d=r("7156"),c=r("c04e"),f=r("d039"),l=r("7c73"),p=r("241c").f,m=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,x="Number",b=o[x],y=b.prototype,w=u(l(y))==x,I=function(t){var e,r,n,o,i,a,s,u,d=c(t,!1);if("string"==typeof d&&d.length>2)if(d=v(d),e=d.charCodeAt(0),43===e||45===e){if(r=d.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(i=d.slice(2),a=i.length,s=0;s<a;s++)if(u=i.charCodeAt(s),u<48||u>o)return NaN;return parseInt(i,n)}return+d};if(i(x,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(w?f((function(){y.valueOf.call(r)})):u(r)!=x)?d(new b(I(e)),r,E):I(e)},S=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)s(b,A=S[N])&&!s(E,A)&&h(E,A,m(b,A));E.prototype=y,y.constructor=E,a(o,x,E)}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,s={},u=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var r=[][t],d=!!i(e,"ACCESSORS")&&e.ACCESSORS,c=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return s[t]=!!r&&!o((function(){if(d&&!n)return!0;var t={length:-1};d?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,c,f)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),s=r("65f0"),u=[].push,d=function(t){var e=1==t,r=2==t,d=3==t,c=4==t,f=6==t,l=5==t||f;return function(p,m,h,v){for(var x,b,y=i(p),w=o(y),I=n(m,h,3),A=a(w.length),E=0,S=v||s,N=e?S(p,A):r?S(p,0):void 0;A>E;E++)if((l||E in w)&&(x=w[E],b=I(x,E,y),t))if(e)N[E]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return E;case 2:u.call(N,x)}else if(c)return!1;return f?-1:d||c?c:N}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},dc67:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"row center"},[r("div",{staticClass:"col-md-8 parts"},[t._l(t.letterAndSound,(function(e,n){return r("parts",{key:e.id,attrs:{item:e,index:t.index,correntIndex:n},on:{customEvent:t.playSound}})})),r("audio",{ref:"sound"})],2)]),r("div",{staticClass:"row center mt-4 pt-4 border-top"},[r("ButtonLink",{staticClass:"center col-md-1 col-3 h3 p-0",attrs:{text:"",link:""},on:{customEvent:function(e){t.playList=!t.playList}}},[r("i",{staticClass:"m-2",class:t.playList?"fas fa-stop":"fas fa-play"})])],1)])])},o=[],i=(r("4de4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"c-p mt-md-4 mt-1",class:{"active-color":t.ifCorrentPart},on:{click:function(e){return t.$emit("customEvent",t.correntIndex)}}},[t._v(" "+t._s(t.item.text)+" ")])}),a=[],s=(r("a9e3"),{name:"",components:{},props:{item:Object,correntIndex:Number,index:Number},data:function(){return{}},methods:{},computed:{ifCorrentPart:function(){return this.index===this.correntIndex}}}),u=s,d=(r("5451"),r("2877")),c=Object(d["a"])(u,i,a,!1,null,"1b92b8e6",null),f=c.exports,l=r("fd96"),p={name:"partsOfRead",components:{parts:f},props:{},data:function(){return{index:0,playList:!1}},mounted:function(){this.playSound(0)},methods:{playSound:function(t){var e=this;this.index=t,this.$refs.sound.src="../"+this.letterAndSound[t].sound,this.$refs.sound.play(),this.$refs.sound.onended=function(){e.playList&&(e.letterAndSound.length-1===e.index?e.playSound(0):e.playSound(t+1))}}},computed:{correntPart:function(){var t=this,e=l["a"].filter((function(e){return e.id==t.$route.params.id}));return e[0]},letterAndSound:function(){return this.correntPart.partsOfRead}},watch:{playList:function(){this.playList?this.playSound(this.index):this.$refs.sound.pause()}}},m=p,h=(r("3475"),Object(d["a"])(m,n,o,!1,null,"0c06f11e",null));e["default"]=h.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f326:function(t,e,r){},fd96:function(t,e,r){"use strict";var n=[{partsOfRead:[{text:"בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים",sound:"audio/bareshis-boro/1.wav",id:1},{text:"אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ:",sound:"audio/bareshis-boro/2.wav",id:2},{text:"וְהָאָ֗רֶץ הָֽיְתָ֥ה תֹ֨הוּ֙ וָבֹ֔הוּ",sound:"audio/bareshis-boro/3.wav",id:3},{text:"וְחֹ֖שֶׁךְ עַל-פְּנֵ֣י תְה֑וֹם",sound:"audio/bareshis-boro/4.wav",id:4},{text:"וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל-פְּנֵ֥י הַמָּֽיִם:",sound:"audio/bareshis-boro/5.wav",id:5}],id:1},{partsOfRead:[{text:"וּלְלֵוִ֣י אָמַ֔ר תֻּמֶּ֥יךָ וְאוּרֶ֖יךָ לְאִ֣ישׁ חֲסִידֶ֑ךָ אֲשֶׁ֤ר נִסִּיתוֹ֙ בְּמַסָּ֔ה תְּרִיבֵ֖הוּ עַל-מֵ֥י מְרִיבָֽה:",sound:"audio/lelewy-omar/1.mp3",id:1},{text:"הָֽאֹמֵ֞ר לְאָבִ֤יו וּלְאִמּוֹ֙ לֹ֣א רְאִיתִ֔יו וְאֶת-אֶחָיו֙ לֹ֣א הִכִּ֔יר וְאֶת בָּנָ֖יו לֹ֣א יָדָ֑ע כִּ֤י שָֽׁמְרוּ֙ אִמְרָתֶ֔ךָ וּבְרִֽיתְךָ֖ יִנְצֹֽרוּ:",sound:"audio/lelewy-omar/2.mp3",id:2},{text:"יוֹר֤וּ מִשְׁפָּטֶ֨יךָ֙ לְיַֽעֲקֹ֔ב וְתוֹרָֽתְךָ֖ לְיִשְׂרָאֵ֑ל יָשִׂ֤ימוּ קְטוֹרָה֙ בְּאַפֶּ֔ךָ וְכָלִ֖יל עַל-מִזְבְּחֶֽךָ:",sound:"audio/lelewy-omar/3.mp3",id:3},{text:"בָּרֵ֤ךְ יְהֹוָה֙ חֵיל֔וֹ וּפֹ֥עַל יָדָ֖יו תִּרְצֶ֑ה מְחַ֨ץ מָתְנַ֧יִם קָמָ֛יו וּמְשַׂנְאָ֖יו מִן-יְקוּמֽוּן:",sound:"audio/lelewy-omar/4.mp3",id:4},{text:"לְבִנְיָמִ֣ן אָמַ֔ר יְדִ֣יד יְהֹוָ֔ה יִשְׁכֹּ֥ן לָבֶ֖טַח עָלָ֑יו חֹפֵ֤ף עָלָיו֙ כָּל-הַיּ֔וֹם וּבֵ֥ין כְּתֵפָ֖יו שָׁכֵֽן:",sound:"audio/lelewy-omar/5.mp3",id:5}],id:2},{partsOfRead:[{text:"וּלְאָשֵׁ֣ר אָמַ֔ר בָּר֥וּךְ מִבָּנִ֖ים אָשֵׁ֑ר",sound:"audio/olosher-omar/1.mp3",id:1},{text:"יְהִ֤י רְצוּי֙ אֶחָ֔יו וְטֹבֵ֥ל בַּשֶּׁ֖מֶן רַגְלֽוֹ:",sound:"audio/olosher-omar/2.mp3",id:2},{text:"בַּרְזֶ֥ל וּנְח֖שֶׁת מִנְעָלֶ֑ךָ",sound:"audio/olosher-omar/3.mp3",id:3},{text:"וּכְיָמֶ֖יךָ דָּבְאֶֽךָ:",sound:"audio/olosher-omar/4.mp3",id:4},{text:"אֵ֥ין כָּאֵ֖ל יְשֻׁר֑וּן",sound:"audio/olosher-omar/5.mp3",id:5},{text:"רֹכֵ֤ב שָׁמַ֨יִם֙ בְּעֶזְרֶ֔ךָ וּבְגַֽאֲוָת֖וֹ שְׁחָקִֽים:",sound:"audio/olosher-omar/6.mp3",id:6}],id:3},{partsOfRead:[{text:"תּוֹרָה צִוָּה לָנוּ מֹשֶׁה מוֹרָשָׁה קְהִלַּת יַעֲקֹב",sound:"audio/toro-siwo/1.mp3",id:1},{text:"וְזֹאת הַתּוֹרָה אֲשֶׁר שָׂם מֹשֶׁה לִפְנֵי בְּנֵי יִשְׂרָאֵל",sound:"audio/toro-siwo/3.mp3",id:2},{text:"כִּי לֶקַח טוֹב נָתַתִּי לָכֶם תּוֹרָתִי אַל תַּעֲזֹבוּ",sound:"audio/toro-siwo/4.mp3",id:3},{text:"וְחֵפַץ יְהוָה בְּיָדֵנוּ יִצְלָח",sound:"audio/toro-siwo/5.mp3",id:4},{text:"בָּרוּךְ אַתָּה יְהוָה לַמְּדֵנִי חֻקֶּיךָ",sound:"audio/toro-siwo/6.mp3",id:5}],id:4}];e["a"]=n}}]);
//# sourceMappingURL=chunk-874eb680.e5b0b5bd.js.map