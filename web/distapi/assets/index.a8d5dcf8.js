import{C as a,M as e}from"./github.167b6101.js";import{_ as t}from"./index.bf0eadd2.js";import{p as l,j as s,r as i,o as r,f as d,g as m,w as o,k as u,F as n,A as f,s as p,x as h,u as g}from"./vendor.ab24dc3f.js";const c={name:"About",data:()=>({messageWhenNoItems:"There arent commits",members:[],dataTimeline:[],page:0}),created(){this.loadCommits(),this.loadMembers()},methods:{loadMore(){this.page++,this.loadCommits()},loadCommits(){a(this.page).then((({data:a})=>{a.forEach((a=>{a.commit.message&&this.dataTimeline.push({from:new Date(a.commit.author.date),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))}))},loadMembers(){e().then((({data:a})=>{this.members=a,this.members.sort()}))}}};l("data-v-453f5ac1");const _=p("gin-vue-admin"),v=u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"org-img dom-center",src:"./assets/logo.b188b094.png",alt:"gin-vue-admin"})],-1),b=u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/watchers/flipped-aurora/gin-vue-admin.svg?label=Watch",alt:""})],-1),y=u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/stars/flipped-aurora/gin-vue-admin.svg?style=social",alt:""})],-1),k=u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/forks/flipped-aurora/gin-vue-admin.svg?label=Fork",alt:""})],-1),x=u("div",null,"flipped-aurora团队",-1),C=u("a",{href:"https://github.com/flipped-aurora"},[u("img",{class:"org-img dom-center",src:"./assets/flipped-aurora.528f516e.png",alt:"flipped-aurora"})],-1),M=["href"],w=["src"],j={class:"author-name",style:{}},T=u("div",null,"提交记录",-1),A=p("Load more");s();var D=t(c,[["render",function(a,e,t,l,s,p){const c=i("el-divider"),D=i("el-col"),F=i("el-row"),I=i("el-card"),W=i("el-timeline-item"),E=i("el-timeline"),L=i("el-button");return r(),d("div",null,[m(F,{gutter:10},{default:o((()=>[m(D,{span:12},{default:o((()=>[m(I,null,{header:o((()=>[m(c,null,{default:o((()=>[_])),_:1})])),default:o((()=>[u("div",null,[m(F,null,{default:o((()=>[m(D,{span:8,offset:8},{default:o((()=>[v])),_:1})])),_:1}),m(F,{gutter:10},{default:o((()=>[m(D,{span:8},{default:o((()=>[b])),_:1}),m(D,{span:8},{default:o((()=>[y])),_:1}),m(D,{span:8},{default:o((()=>[k])),_:1})])),_:1})])])),_:1}),m(I,{style:{"margin-top":"20px"}},{header:o((()=>[x])),default:o((()=>[u("div",null,[m(F,null,{default:o((()=>[m(D,{span:8,offset:8},{default:o((()=>[C])),_:1})])),_:1}),m(F,{style:{"margin-left":"40px"},gutter:20},{default:o((()=>[(r(!0),d(n,null,f(s.members,((a,e)=>(r(),h(D,{key:e,span:8},{default:o((()=>[u("a",{href:a.html_url},[u("img",{class:"avatar-img",src:a.avatar_url},null,8,w),u("a",j,g(a.login),1)],8,M)])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1}),m(D,{span:12},{default:o((()=>[m(I,null,{header:o((()=>[T])),default:o((()=>[u("div",null,[m(E,null,{default:o((()=>[(r(!0),d(n,null,f(s.dataTimeline,((a,e)=>(r(),h(W,{key:e,timestamp:"2018/4/12",placement:"top"},{default:o((()=>[m(I,null,{default:o((()=>[u("h4",null,g(a.title),1),u("p",null,g(a.message),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),m(L,{class:"load-more",type:"text",onClick:p.loadMore},{default:o((()=>[A])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-453f5ac1"]]);export{D as default};
