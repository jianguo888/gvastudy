!function(){function e(e,t,n,r,u,a,o){try{var c=e[a](o),s=c.value}catch(i){return void n(i)}c.done?t(s):Promise.resolve(s).then(r,u)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(u,a){var o=t.apply(n,r);function c(t){e(o,u,a,c,s,"next",t)}function s(t){e(o,u,a,c,s,"throw",t)}c(void 0)}))}}System.register(["./index-legacy.2b2c1438.js","./authority-legacy.30081820.js","./vendor-legacy.89c3086c.js"],(function(e){"use strict";var n,r,u,a,o,c,s,i,d,f,l,m,h,p;return{setters:[function(e){n=e._,r=e.h,u=e.i,a=e.j},function(e){o=e.u},function(e){c=e.r,s=e.o,i=e.f,d=e.k,f=e.g,l=e.w,m=e.u,h=e.B,p=e.s}],execute:function(){var y={name:"Menus",props:{row:{default:function(){return{}},type:Object}},data:function(){return{menuTreeData:[],menuTreeIds:[],needConfirm:!1,menuDefaultProps:{children:"children",label:function(e){return e.meta.title}}}},created:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n,a,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:return n=t.sent,e.menuTreeData=n.data.menus,t.next=6,u({authorityId:e.row.authorityId});case 6:a=t.sent,o=a.data.menus,c=[],o.forEach((function(e){o.some((function(t){return t.parentId===e.menuId}))||c.push(Number(e.menuId))})),e.menuTreeIds=c;case 11:case"end":return t.stop()}}),t)})))()},methods:{setDefault:function(e){var n=this;return t(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({authorityId:n.row.authorityId,AuthorityName:n.row.authorityName,parentId:n.row.parentId,defaultRouter:e.name});case 2:0===(r=t.sent).code&&(n.$message({type:"success",message:"设置成功"}),n.$emit("changeRow","defaultRouter",r.data.authority.defaultRouter));case 4:case"end":return t.stop()}}),t)})))()},nodeChange:function(){this.needConfirm=!0},enterAndNext:function(){this.relation()},relation:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$refs.menuTree.getCheckedNodes(!1,!0),t.next=3,a({menus:n,authorityId:e.row.authorityId});case 3:0===t.sent.code&&e.$message({type:"success",message:"菜单设置成功!"});case 5:case"end":return t.stop()}}),t)})))()}}},v={class:"clearflex"},g=p("确 定"),w={class:"custom-tree-node"};e("default",n(y,[["render",function(e,t,n,r,u,a){var o=c("el-button"),y=c("el-tree");return s(),i("div",null,[d("div",v,[f(o,{class:"fl-right",size:"mini",type:"primary",onClick:a.relation},{default:l((function(){return[g]})),_:1},8,["onClick"])]),f(y,{ref:"menuTree",data:u.menuTreeData,"default-checked-keys":u.menuTreeIds,props:u.menuDefaultProps,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"",onCheck:a.nodeChange},{default:l((function(e){var t=e.node,r=e.data;return[d("span",w,[d("span",null,m(t.label),1),d("span",null,[f(o,{type:"text",size:"mini",style:h({color:n.row.defaultRouter===r.name?"#E6A23C":"#85ce61"}),disabled:!t.checked,onClick:function(){return a.setDefault(r)}},{default:l((function(){return[p(m(n.row.defaultRouter===r.name?"首页":"设为首页"),1)]})),_:2},1032,["style","disabled","onClick"])])])]})),_:1},8,["data","default-checked-keys","props","onCheck"])])}]]))}}}))}();
