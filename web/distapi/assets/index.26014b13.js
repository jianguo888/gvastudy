var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&l(e,o,t[o]);if(a)for(var o of a(t))s.call(t,o)&&l(e,o,t[o]);return e};import{G as i,J as c,r as u,o as d,f as p,g as m,w as f,T as b,F as h,A as v,x as y,l as j}from"./vendor.ab24dc3f.js";import x from"./index.abc08017.js";import{_ as O,e as C}from"./index.bf0eadd2.js";import"./menuItem.b0e5d76f.js";import"./asyncSubmenu.50de848e.js";var w,g;var k=O({name:"Aside",components:{AsideComponent:x},data:()=>({active:"",isCollapse:!1}),computed:n(n({},i("router",["asyncRouters"])),i("user",["baseColor","activeColor","sideMode"])),watch:{$route(){this.active=this.$route.name}},created(){this.active=this.$route.name;document.body.clientWidth<1e3&&(this.isCollapse=!this.isCollapse),C.on("collapse",(e=>{this.isCollapse=e}))},beforeDestroy(){C.off("collapse")},methods:(w=n({},c("history",["addHistory"])),g={selectMenuItem(e,t,o){const a={},r={};o.route.parameters&&o.route.parameters.forEach((e=>{"query"===e.type?a[e.key]=e.value:r[e.key]=e.value})),e!==this.$route.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):this.$router.push({name:e,query:a,params:r}))}},t(w,o(g)))},[["render",function(e,t,o,a,r,s){const l=u("aside-component"),n=u("el-menu"),i=u("el-scrollbar");return d(),p("div",null,[m(i,{style:{height:"calc(100vh - 60px)"}},{default:f((()=>[m(b,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:f((()=>[m(n,{collapse:r.isCollapse,"collapse-transition":!1,"default-active":r.active,"background-color":e.sideMode,"active-text-color":e.activeColor,"text-color":e.baseColor,class:"el-menu-vertical","unique-opened":"",onSelect:s.selectMenuItem},{default:f((()=>[(d(!0),p(h,null,v(e.asyncRouters[0].children,(e=>(d(),p(h,null,[e.hidden?j("",!0):(d(),y(l,{key:e.name,"router-info":e},null,8,["router-info"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color","text-color","onSelect"])])),_:1})])),_:1})])}]]);export{k as default};