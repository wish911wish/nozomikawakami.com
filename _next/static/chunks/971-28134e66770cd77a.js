(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{20292:function(t,e,r){"use strict";r.d(e,{d:function(){return u}});var n=r(50029),i=r(87794),c=r.n(i),o=r(59499);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:l({},r)});case 2:return n=t.sent,t.next=5,n.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("https://api.sheetson.com/v2/sheets/".concat(e),{Authorization:"Bearer ".concat("clNqk2fgkLko6Wu1dPIASEonLPGfnZtw2MnfRuPMuTv2swRWbMZ9YzhvmQn4Sw"),"X-Spreadsheet-Id":"1pSCDFezahTavrXiTOrI5vYmWKPK_s9JPPvh7OUJtK0k"});case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d("works");case 2:return e=t.sent,(r=e.map((function(t){return{id:Number(t.rowIndex),imageUrl:String(t.image_url),name:String(t.name),periodStart:new Date(t.period_start),periodEnd:t.period_end?new Date(t.period_end):null,projectScale:String(t.project_scale),role:String(t.role).split(","),summary:String(t.summary),technicalSkills:String(t.technical_skills).split(","),url:String(t.url)}}))).sort((function(t,e){return(t.periodEnd||new Date("9999-12-31"))>=(e.periodEnd||new Date("9999-12-31"))?-1:1})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},32651:function(t,e,r){"use strict";r(67294);var n=r(70917),i=r(35944);e.Z=function(t){var e="sm"===t.size?50:100,r="sm"===t.size?5:10,c=(0,n.F4)([{"0%":{height:.4*e}},{"40%":{height:.8*e}},{"80%":{height:.4*e}},{"100%":{height:.4*e}}]),o=(0,n.iv)({background:"currentColor",opacity:.5,width:r,height:.4*e,animation:"".concat(c," 1s infinite ease-in-out")},"",""),a=(0,n.iv)(o,"animation-delay:-0.16s;",""),l=o,s=(0,n.iv)(o,"animation-delay:-0.32s;",""),d=(0,n.iv)({height:e,display:"flex",alignItems:"center",justifyContent:"center",columnGap:r},"","");return(0,i.BX)("div",{css:d,children:[(0,i.tZ)("div",{css:s}),(0,i.tZ)("div",{css:a}),(0,i.tZ)("div",{css:l})]})}},32209:function(t,e,r){"use strict";var n=r(59499),i=(r(67294),r(59566)),c=r(48457),o=r(38848),a=r(14855),l=r(59339),s=r(35944);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}o.Zx.register({family:"Nasu-Regular",src:a}),o.Zx.register({family:"Nasu-Bold",src:l});var h="1px",p=o.mM.create({solid:{borderStyle:"solid",borderColor:"#000000",borderWidth:"".concat(h," ").concat(h," ").concat(h," ").concat(h)},grid:{borderRightStyle:"dashed",borderRightColor:"#000000",borderRightWidth:h}}),f=o.mM.create({grid:{display:"flex",alignItems:"center",padding:4}}),v=o.mM.create({page:{padding:"24px",fontFamily:"Nasu-Regular",fontSize:"10px"},title:{fontFamily:"Nasu-Bold",textAlign:"center",fontSize:"12px"},sectionTitle:{fontFamily:"Nasu-Bold"},section1:{fontSize:"12px",display:"flex",borderStyle:"solid",borderColor:"#000000",borderWidth:"1px 1px 1px 1px"},tableLow:u({flexDirection:"row"},p.solid),tableGrid:u(u(u({},f.grid),p.grid),{},{width:"100px",flexShrink:0}),tableGridGrow:u(u(u({},f.grid),p.grid),{},{flexGrow:1})}),b=[2,5,8,11,14,17,20,23,26,29,32];e.Z=function(t){var e=new Date;return(0,s.tZ)(o.BB,{children:(0,s.BX)(o.T3,{size:"A4",style:v.page,wrap:!0,children:[(0,s.tZ)(o.xv,{style:v.title,children:"\u8077\u52d9\u7d4c\u6b74\u66f8"}),(0,s.BX)(o.xv,{children:["".concat(e.getFullYear()),"\u5e74","".concat(e.getMonth()+1),"\u6708\u73fe\u5728"]}),(0,s.tZ)(o.xv,{children:"\u6c0f\u540d: \u5ddd\u4e0a \u671b"}),(0,s.tZ)(o.xv,{children:" "}),(0,s.BX)(o.xv,{children:["GitHub:"," ",(0,s.tZ)(o.rU,{src:"https://github.com/wish911wish",children:"https://github.com/wish911wish"})]}),(0,s.BX)(o.xv,{children:["Qiita:"," ",(0,s.tZ)(o.rU,{src:"https://qiita.com/nozomi53motomachi",children:"https://qiita.com/nozomi53motomachi"})]}),(0,s.tZ)(o.xv,{children:" "}),(0,s.tZ)(o.xv,{style:v.sectionTitle,children:"\u8077\u52d9\u7d4c\u6b74"}),(0,s.tZ)(o.xv,{children:"2020\u5e74 2\u6708 \u500b\u4eba\u4e8b\u696d\u4e3b\u3068\u3057\u3066\u958b\u696d"}),(0,s.tZ)(o.xv,{children:"2020\u5e74 1\u6708 \u682a\u5f0f\u4f1a\u793e\u30a2\u30b0\u30ec\u30c3\u30af\u30b9 \u9000\u8077"}),(0,s.tZ)(o.xv,{children:"2017\u5e74 4\u6708 \u682a\u5f0f\u4f1a\u793e\u30a2\u30b0\u30ec\u30c3\u30af\u30b9 \u5165\u793e"}),(0,s.tZ)(o.xv,{children:"2016\u5e74 3\u6708 \u57fc\u7389\u5927\u5b66\u5de5\u5b66\u90e8 \u5352\u696d"}),(0,s.tZ)(o.xv,{children:" "}),(0,s.tZ)(o.xv,{style:v.sectionTitle,children:"\u958b\u767a\u7d4c\u6b74"}),(0,s.BX)(o.G7,{style:u(u({},v.tableLow),{},{backgroundColor:"#dcdcdc"}),children:[(0,s.tZ)(o.G7,{style:v.tableGrid,children:(0,s.tZ)(o.xv,{children:"\u671f\u9593"})}),(0,s.tZ)(o.G7,{style:v.tableGridGrow,children:(0,s.tZ)(o.xv,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u304a\u3088\u3073\u696d\u52d9\u5185\u5bb9"})}),(0,s.tZ)(o.G7,{style:u(u({},v.tableGrid),{},{borderRightWidth:0}),children:(0,s.tZ)(o.xv,{children:"\u4f7f\u7528\u6280\u8853"})})]}),t.works.map((function(t,e){return(0,s.BX)(o.G7,{style:u(u({},v.tableLow),{},{borderTopWidth:b.includes(e)?h:0}),break:b.includes(e),children:[(0,s.BX)(o.G7,{style:v.tableGrid,children:[(0,s.tZ)(o.xv,{children:(0,i.Z)(t.periodStart,"yyyy/M")+" ~ "+(0,i.Z)(t.periodEnd||new Date,"yyyy/M")}),(0,s.tZ)(o.xv,{children:(0,c.Z)(t.periodEnd||new Date,t.periodStart)+"\u30ab\u6708"})]}),(0,s.BX)(o.G7,{style:u(u({},v.tableGridGrow),{},{alignItems:"flex-start"}),children:[(0,s.tZ)(o.xv,{children:"\u3010\u6982\u8981\u3011"}),(0,s.tZ)(o.xv,{children:t.name}),(0,s.tZ)(o.rU,{src:t.url,children:t.url}),(0,s.tZ)(o.xv,{children:" "}),(0,s.tZ)(o.xv,{children:"\u3010\u62c5\u5f53\u3011"}),t.role.map((function(t,e){return(0,s.tZ)(o.xv,{children:t},e)})),(0,s.tZ)(o.xv,{children:" "}),(0,s.tZ)(o.xv,{children:"\u3010\u696d\u52d9\u5185\u5bb9\u3011"}),(0,s.tZ)(o.xv,{children:t.summary}),(0,s.tZ)(o.xv,{children:" "}),(0,s.tZ)(o.xv,{children:"\u3010\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u898f\u6a21\u3011"}),(0,s.tZ)(o.xv,{children:t.projectScale})]}),(0,s.tZ)(o.G7,{style:u(u({},v.tableGrid),{},{alignItems:"flex-start",borderRightWidth:0}),children:t.technicalSkills.map((function(t,e){return(0,s.tZ)(o.xv,{children:t},e)}))})]},t.id)}))]})})}},59339:function(t,e,r){"use strict";t.exports=r.p+"static/media/Nasu-Bold.ce7b756b.ttf"},14855:function(t,e,r){"use strict";t.exports=r.p+"static/media/Nasu-Regular.8fa647f5.ttf"},42480:function(){},25832:function(){}}]);