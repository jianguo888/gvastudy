System.register(["./menuItem-legacy.3e1d7721.js","./asyncSubmenu-legacy.c491d0a8.js","./index-legacy.2b2c1438.js","./vendor-legacy.89c3086c.js"],(function(n){"use strict";var e,t,r,u,o,c,f,i,d,l,s,m;return{setters:[function(n){e=n.default},function(n){t=n.default},function(n){r=n._},function(n){u=n.r,o=n.o,c=n.x,f=n.w,i=n.f,d=n.A,l=n.F,s=n.l,m=n.y}],execute:function(){n("default",r({name:"AsideComponent",components:{MenuItem:e,AsyncSubmenu:t},props:{routerInfo:{default:function(){return null},type:Object}},computed:{menuComponent:function(){return this.routerInfo.children&&this.routerInfo.children.filter((function(n){return!n.hidden})).length?"AsyncSubmenu":"MenuItem"}}},[["render",function(n,e,t,r,a,y){var h=u("AsideComponent");return t.routerInfo.hidden?s("",!0):(o(),c(m(y.menuComponent),{key:0,"router-info":t.routerInfo},{default:f((function(){return[t.routerInfo.children&&t.routerInfo.children.length?(o(!0),i(l,{key:0},d(t.routerInfo.children,(function(n){return o(),c(h,{key:n.name,"router-info":n},null,8,["router-info"])})),128)):s("",!0)]})),_:1},8,["router-info"]))}]]))}}}));
