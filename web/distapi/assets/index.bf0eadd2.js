var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,a=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))i.call(t,o)&&n(e,o,t[o]);return e},d=(e,t,o)=>new Promise(((s,r)=>{var i=e=>{try{a(o.next(e))}catch(t){r(t)}},n=e=>{try{a(o.throw(e))}catch(t){r(t)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,n);a((o=o.apply(e,t)).next())}));export function __vite_legacy_guard(){import("data:text/javascript,")}import{m as u,c,a as m,b as l,E as p,d as _,V as y,e as h,r as f,o as v,f as g,g as E,h as I,i as D,z as L}from"./vendor.ab24dc3f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={appName:"Gin-Vue-Admin",appLogo:"https://www.gin-vue-admin.com/img/logo.png"},A=u(),b=()=>{A.emit("closeThisPage")};var T={install:e=>{(e=>{e.config.globalProperties.$GIN_VUE_ADMIN=w,e.config.globalProperties.$CloseThisPage=b})(e),console.log("\n       欢迎使用 Gin-Vue-Admin\n       当前版本:V2.4.5 beta.1\n       加群方式:微信：shouzi_1994 QQ群：622360840\n       默认自动化文档地址:http://127.0.0.1:8888/swagger/index.html\n       默认前端文件运行地址:http://127.0.0.1:8080\n       如果项目让您获得了收益，希望您能请团队喝杯可乐:https://www.gin-vue-admin.com/docs/coffee\n    ")}};const O={},R=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in O)return;O[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},j=[{path:"/",redirect:"/login"},{path:"/init",name:"Init",component:()=>R((()=>import("./index.8d3a4e96.js")),["assets/index.8d3a4e96.js","assets/index.cc25f8f8.css","assets/initdb.52cd7f19.js","assets/vendor.ab24dc3f.js"])},{path:"/login",name:"Login",component:()=>R((()=>import("./index.1e3ee12a.js")),["assets/index.1e3ee12a.js","assets/index.5511f057.css","assets/vendor.ab24dc3f.js","assets/initdb.52cd7f19.js"])}],P=c({history:m(),routes:j}),x=l.create({baseURL:"/api",timeout:99999});let V,M=0;const k=()=>{M--,M<=0&&(clearTimeout(V),A.emit("closeLoading"))};x.interceptors.request.use((e=>{e.donNotShowLoading||(M++,V&&clearTimeout(V),V=setTimeout((()=>{M>0&&A.emit("showLoading")}),400));const t=ae.getters["user/token"],o=ae.getters["user/userInfo"];return e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/json","x-token":t,"x-user-id":o.ID},e}),(e=>(k(),p({showClose:!0,message:e,type:"error"}),e))),x.interceptors.response.use((e=>(k(),e.headers["new-token"]&&ae.commit("user/setToken",e.headers["new-token"]),0===e.data.code||"true"===e.headers.success?(e.headers.msg&&(e.data.msg=decodeURI(e.headers.msg)),e.data):(p({showClose:!0,message:e.data.msg,type:"error"}),e.data.data&&e.data.data.reload&&ae.commit("user/LoginOut"),e.data.msg?e.data:e))),(e=>{switch(k(),e.response.status){case 500:_.confirm(`\n        <p>检测到接口错误${e}</p>\n        <p>错误码<span style="color:red"> 500 </span>：此类错误内容常见于后台panic，请先查看后台日志，如果影响您正常使用可强制登出清理缓存</p>\n        `,"接口报错",{dangerouslyUseHTMLString:!0,distinguishCancelAndClose:!0,confirmButtonText:"清理缓存",cancelButtonText:"取消"}).then((()=>{ae.commit("user/LoginOut")}));break;case 404:_.confirm(`\n          <p>检测到接口错误${e}</p>\n          <p>错误码<span style="color:red"> 404 </span>：此类错误多为接口未注册（或未重启）或者请求路径（方法）与api路径（方法）不符--如果为自动化代码请检查是否存在空格</p>\n          `,"接口报错",{dangerouslyUseHTMLString:!0,distinguishCancelAndClose:!0,confirmButtonText:"我知道了",cancelButtonText:"取消"})}return e}));const C=e=>x({url:"/base/captcha",method:"post",data:e}),S=e=>x({url:"/user/register",method:"post",data:e}),U=e=>x({url:"/user/changePassword",method:"post",data:e}),N=e=>x({url:"/user/getUserList",method:"post",data:e}),B=e=>x({url:"/user/setUserAuthority",method:"post",data:e}),$=e=>x({url:"/user/deleteUser",method:"delete",data:e}),G=e=>x({url:"/user/setUserInfo",method:"put",data:e}),q=e=>x({url:"/user/setUserAuthorities",method:"post",data:e}),F={"../view/routerHolder.vue":()=>R((()=>import("./routerHolder.b6eb2b11.js")),["assets/routerHolder.b6eb2b11.js","assets/vendor.ab24dc3f.js"]),"../view/about/index.vue":()=>R((()=>import("./index.a8d5dcf8.js")),["assets/index.a8d5dcf8.js","assets/index.4f72f67a.css","assets/github.167b6101.js","assets/vendor.ab24dc3f.js"]),"../view/dashboard/index.vue":()=>R((()=>import("./index.2f3aef56.js")),["assets/index.2f3aef56.js","assets/index.8a49d0bc.css","assets/echartsLine.ba92ce51.js","assets/echartsLine.c352a5f7.css","assets/vendor.ab24dc3f.js","assets/dashbordTable.94ce3703.js","assets/dashbordTable.9f55faa2.css","assets/github.167b6101.js","assets/date.23f5a973.js"]),"../view/error/index.vue":()=>R((()=>import("./index.2f1cc3a5.js")),["assets/index.2f1cc3a5.js","assets/index.96bf8c75.css","assets/vendor.ab24dc3f.js"]),"../view/example/index.vue":()=>R((()=>import("./index.500a545a.js")),["assets/index.500a545a.js","assets/vendor.ab24dc3f.js"]),"../view/iconList/index.vue":()=>R((()=>import("./index.5452c2ff.js")),["assets/index.5452c2ff.js","assets/index.21bbd37d.css","assets/vendor.ab24dc3f.js"]),"../view/init/index.vue":()=>R((()=>import("./index.8d3a4e96.js")),["assets/index.8d3a4e96.js","assets/index.cc25f8f8.css","assets/initdb.52cd7f19.js","assets/vendor.ab24dc3f.js"]),"../view/init/init.vue":()=>R((()=>import("./init.71d8f9f6.js")),["assets/init.71d8f9f6.js","assets/init.4884cd68.css","assets/initdb.52cd7f19.js","assets/vendor.ab24dc3f.js"]),"../view/layout/index.vue":()=>R((()=>import("./index.07adebda.js")),["assets/index.07adebda.js","assets/index.571df692.css","assets/index.26014b13.js","assets/index.6a3be7ac.css","assets/vendor.ab24dc3f.js","assets/index.abc08017.js","assets/menuItem.b0e5d76f.js","assets/asyncSubmenu.50de848e.js","assets/history.9dde0c7d.js","assets/history.cd53aa47.css","assets/index.0d3e7d8c.js","assets/index.a075ffb6.css","assets/search.17da3a00.js","assets/search.5abe14bb.css","assets/bottomInfo.f346f121.js","assets/bottomInfo.f2be749c.css","assets/index.921bfd6e.js","assets/index.4cb014f4.css","assets/index.2835ddf4.js","assets/index.b707aee1.css"]),"../view/login/index.vue":()=>R((()=>import("./index.1e3ee12a.js")),["assets/index.1e3ee12a.js","assets/index.5511f057.css","assets/vendor.ab24dc3f.js","assets/initdb.52cd7f19.js"]),"../view/person/person.vue":()=>R((()=>import("./person.dc4e897c.js")),["assets/person.dc4e897c.js","assets/person.79ead73d.css","assets/index.ef192d5b.js","assets/index.28594273.css","assets/fileUploadAndDownload.176ceac4.js","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/index.vue":()=>R((()=>import("./index.c89b47bf.js")),["assets/index.c89b47bf.js","assets/vendor.ab24dc3f.js"]),"../view/system/state.vue":()=>R((()=>import("./state.701d4f69.js")),["assets/state.701d4f69.js","assets/state.6538709c.css","assets/system.7e5ffa46.js","assets/vendor.ab24dc3f.js"]),"../view/systemTools/index.vue":()=>R((()=>import("./index.738acd7a.js")),["assets/index.738acd7a.js","assets/vendor.ab24dc3f.js"]),"../view/dashboard/dashbordCharts/echartsLine.vue":()=>R((()=>import("./echartsLine.ba92ce51.js")),["assets/echartsLine.ba92ce51.js","assets/echartsLine.c352a5f7.css","assets/vendor.ab24dc3f.js"]),"../view/dashboard/dashbordTable/dashbordTable.vue":()=>R((()=>import("./dashbordTable.94ce3703.js")),["assets/dashbordTable.94ce3703.js","assets/dashbordTable.9f55faa2.css","assets/github.167b6101.js","assets/vendor.ab24dc3f.js","assets/date.23f5a973.js"]),"../view/example/breakpoint/breakpoint.vue":()=>R((()=>import("./breakpoint.8031fb3b.js")),["assets/breakpoint.8031fb3b.js","assets/breakpoint.0f685594.css","assets/vendor.ab24dc3f.js"]),"../view/example/customer/customer.vue":()=>R((()=>import("./customer.8e45256a.js")),["assets/customer.8e45256a.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js"]),"../view/example/excel/excel.vue":()=>R((()=>import("./excel.01796696.js")),["assets/excel.01796696.js","assets/excel.ac98473e.css","assets/vendor.ab24dc3f.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js"]),"../view/example/upload/upload.vue":()=>R((()=>import("./upload.11786684.js")),["assets/upload.11786684.js","assets/upload.15929dac.css","assets/vendor.ab24dc3f.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/fileUploadAndDownload.176ceac4.js","assets/index.921bfd6e.js","assets/index.4cb014f4.css"]),"../view/layout/aside/index.vue":()=>R((()=>import("./index.26014b13.js")),["assets/index.26014b13.js","assets/index.6a3be7ac.css","assets/vendor.ab24dc3f.js","assets/index.abc08017.js","assets/menuItem.b0e5d76f.js","assets/asyncSubmenu.50de848e.js"]),"../view/layout/bottomInfo/bottomInfo.vue":()=>R((()=>import("./bottomInfo.f346f121.js")),["assets/bottomInfo.f346f121.js","assets/bottomInfo.f2be749c.css","assets/vendor.ab24dc3f.js"]),"../view/layout/screenfull/index.vue":()=>R((()=>import("./index.0d3e7d8c.js")),["assets/index.0d3e7d8c.js","assets/index.a075ffb6.css","assets/vendor.ab24dc3f.js"]),"../view/layout/search/search.vue":()=>R((()=>import("./search.17da3a00.js")),["assets/search.17da3a00.js","assets/search.5abe14bb.css","assets/vendor.ab24dc3f.js"]),"../view/layout/setting/index.vue":()=>R((()=>import("./index.2835ddf4.js")),["assets/index.2835ddf4.js","assets/index.b707aee1.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/api/api.vue":()=>R((()=>import("./api.1159fdaf.js")),["assets/api.1159fdaf.js","assets/api.ee4165a6.css","assets/api.ae6d84db.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/stringFun.2a2664f6.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/authority/authority.vue":()=>R((()=>import("./authority.ea215e39.js")),["assets/authority.ea215e39.js","assets/authority.04ae3f84.css","assets/authority.c22e40dc.js","assets/menus.7b1442ce.js","assets/vendor.ab24dc3f.js","assets/apis.2944dda7.js","assets/api.ae6d84db.js","assets/datas.db0392a9.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js"]),"../view/superAdmin/dictionary/sysDictionary.vue":()=>R((()=>import("./sysDictionary.60f8a13d.js")),["assets/sysDictionary.60f8a13d.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/dictionary/sysDictionaryDetail.vue":()=>R((()=>import("./sysDictionaryDetail.c5b0021c.js")),["assets/sysDictionaryDetail.c5b0021c.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/menu/icon.vue":()=>R((()=>import("./icon.c012dc4e.js")),["assets/icon.c012dc4e.js","assets/icon.bc3518f6.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/menu/menu.vue":()=>R((()=>import("./menu.9b0e0404.js")),["assets/menu.9b0e0404.js","assets/menu.cc6fc08b.css","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/icon.c012dc4e.js","assets/icon.bc3518f6.css","assets/vendor.ab24dc3f.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css"]),"../view/superAdmin/operation/sysOperationRecord.vue":()=>R((()=>import("./sysOperationRecord.57ed4abc.js")),["assets/sysOperationRecord.57ed4abc.js","assets/sysOperationRecord.13b729f0.css","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/user/user.vue":()=>R((()=>import("./user.3c61865a.js")),["assets/user.3c61865a.js","assets/user.7a96b5f6.css","assets/authority.c22e40dc.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/vendor.ab24dc3f.js","assets/index.921bfd6e.js","assets/index.4cb014f4.css","assets/index.ef192d5b.js","assets/index.28594273.css","assets/fileUploadAndDownload.176ceac4.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css"]),"../view/systemTools/autoCode/index.vue":()=>R((()=>import("./index.669fd97e.js")),["assets/index.669fd97e.js","assets/index.405bcecc.css","assets/fieldDialog.fd4957cd.js","assets/dictionary.03156ab7.js","assets/stringFun.2a2664f6.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js","assets/previewCodeDialg.7d3cdad2.js","assets/previewCodeDialg.a8ff3c0f.css","assets/autoCode.260122b4.js"]),"../view/systemTools/autoCodeAdmin/index.vue":()=>R((()=>import("./index.f2636efa.js")),["assets/index.f2636efa.js","assets/index.0551bbb2.css","assets/autoCode.260122b4.js","assets/infoList.89930291.js","assets/dictionary.03156ab7.js","assets/date.23f5a973.js","assets/vendor.ab24dc3f.js"]),"../view/systemTools/formCreate/index.vue":()=>R((()=>import("./index.f33ccd2d.js")),["assets/index.f33ccd2d.js","assets/vendor.ab24dc3f.js"]),"../view/systemTools/system/system.vue":()=>R((()=>import("./system.078b6d67.js")),["assets/system.078b6d67.js","assets/system.2f4dfd1b.css","assets/system.7e5ffa46.js","assets/vendor.ab24dc3f.js"]),"../view/layout/aside/asideComponent/asyncSubmenu.vue":()=>R((()=>import("./asyncSubmenu.50de848e.js")),["assets/asyncSubmenu.50de848e.js","assets/vendor.ab24dc3f.js"]),"../view/layout/aside/asideComponent/index.vue":()=>R((()=>import("./index.abc08017.js")),["assets/index.abc08017.js","assets/menuItem.b0e5d76f.js","assets/vendor.ab24dc3f.js","assets/asyncSubmenu.50de848e.js"]),"../view/layout/aside/asideComponent/menuItem.vue":()=>R((()=>import("./menuItem.b0e5d76f.js")),["assets/menuItem.b0e5d76f.js","assets/vendor.ab24dc3f.js"]),"../view/layout/aside/historyComponent/history.vue":()=>R((()=>import("./history.9dde0c7d.js")),["assets/history.9dde0c7d.js","assets/history.cd53aa47.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/authority/components/apis.vue":()=>R((()=>import("./apis.2944dda7.js")),["assets/apis.2944dda7.js","assets/api.ae6d84db.js","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/authority/components/datas.vue":()=>R((()=>import("./datas.db0392a9.js")),["assets/datas.db0392a9.js","assets/authority.c22e40dc.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js"]),"../view/superAdmin/authority/components/menus.vue":()=>R((()=>import("./menus.7b1442ce.js")),["assets/menus.7b1442ce.js","assets/authority.c22e40dc.js","assets/vendor.ab24dc3f.js"]),"../view/systemTools/autoCode/component/fieldDialog.vue":()=>R((()=>import("./fieldDialog.fd4957cd.js")),["assets/fieldDialog.fd4957cd.js","assets/dictionary.03156ab7.js","assets/stringFun.2a2664f6.js","assets/warningBar.f4c6efa3.js","assets/warningBar.92d12f87.css","assets/vendor.ab24dc3f.js"]),"../view/systemTools/autoCode/component/previewCodeDialg.vue":()=>R((()=>import("./previewCodeDialg.7d3cdad2.js")),["assets/previewCodeDialg.7d3cdad2.js","assets/previewCodeDialg.a8ff3c0f.css","assets/vendor.ab24dc3f.js"])},H=e=>{e.forEach((e=>{e.component?e.component=function(e,t){const o=Object.keys(e),s=o.filter((e=>e.replace("../","")===t))[0];return e[s]}(F,e.component):delete e.component,e.children&&H(e.children)}))};const z=e=>x({url:"/menu/getMenuList",method:"post",data:e}),Q=e=>x({url:"/menu/addBaseMenu",method:"post",data:e}),J=()=>x({url:"/menu/getBaseMenuTree",method:"post"}),K=e=>x({url:"/menu/addMenuAuthority",method:"post",data:e}),W=e=>x({url:"/menu/getMenuAuthority",method:"post",data:e}),X=e=>x({url:"/menu/deleteBaseMenu",method:"post",data:e}),Y=e=>x({url:"/menu/updateBaseMenu",method:"post",data:e}),Z=e=>x({url:"/menu/getBaseMenuById",method:"post",data:e}),ee=[],te=e=>{e&&e.forEach((e=>{e.children&&!e.children.every((e=>e.hidden))||"404"===e.name||e.hidden||ee.push({label:e.meta.title,value:e.name}),e.meta.hidden=e.hidden,e.children&&e.children.length>0&&te(e.children)}))},oe=e=>x({url:"/sysDictionary/createSysDictionary",method:"post",data:e}),se=e=>x({url:"/sysDictionary/deleteSysDictionary",method:"delete",data:e}),re=e=>x({url:"/sysDictionary/updateSysDictionary",method:"put",data:e}),ie=e=>x({url:"/sysDictionary/findSysDictionary",method:"get",params:e}),ne=e=>x({url:"/sysDictionary/getSysDictionaryList",method:"get",params:e}),ae=h({modules:{user:{namespaced:!0,state:{userInfo:{uuid:"",nickName:"",headerImg:"",authority:{},sideMode:"dark",activeColor:"#4D70FF",baseColor:"#fff"},token:""},mutations:{setUserInfo(e,t){e.userInfo=t},setToken(e,t){e.token=t},NeedInit(e){e.userInfo={},e.token="",sessionStorage.clear(),P.push({name:"Init",replace:!0})},LoginOut(e){e.userInfo={},e.token="",sessionStorage.clear(),P.push({name:"Login",replace:!0}),window.location.reload()},ResetUserInfo(e,t={}){e.userInfo=a(a({},e.userInfo),t)},ChangeSideMode:(e,t)=>{e.userInfo.sideMode=t}},actions:{GetUserInfo(e){return d(this,arguments,(function*({commit:e}){const t=yield x({url:"/user/getUserInfo",method:"get"});return 0===t.code&&e("setUserInfo",t.data.userInfo),t}))},LoginIn(e,t){return d(this,arguments,(function*({commit:e,dispatch:t,rootGetters:o,getters:s},r){const i=yield(n=r,x({url:"/base/login",method:"post",data:n}));var n;if(0===i.code){e("setUserInfo",i.data.user),e("setToken",i.data.token),yield t("router/SetAsyncRouter",{},{root:!0});return o["router/asyncRouters"].forEach((e=>{P.addRoute(e)})),P.push({name:s.userInfo.authority.defaultRouter}),!0}}))},LoginOut(e){return d(this,arguments,(function*({commit:e}){0===(yield x({url:"/jwt/jsonInBlacklist",method:"post"})).code&&e("LoginOut")}))},changeSideMode(e,t){return d(this,arguments,(function*({commit:e,state:t},o){0===(yield G({sideMode:o,ID:t.userInfo.ID})).code&&(e("ChangeSideMode",o),p({type:"success",message:"设置成功"}))}))}},getters:{userInfo:e=>e.userInfo,token:e=>e.token,mode:e=>e.userInfo.sideMode,sideMode:e=>"dark"===e.userInfo.sideMode?"#191a23":"light"===e.userInfo.sideMode?"#fff":e.userInfo.sideMode,baseColor:e=>"dark"===e.userInfo.sideMode?"#fff":"light"===e.userInfo.sideMode?"#191a23":e.userInfo.baseColor,activeColor:e=>"dark"===e.userInfo.sideMode||"light"===e.userInfo.sideMode?"#4D70FF":e.userInfo.activeColor}},router:{namespaced:!0,state:{asyncRouters:[],routerList:ee},mutations:{setRouterList(e,t){e.routerList=t},setAsyncRouter(e,t){e.asyncRouters=t}},actions:{SetAsyncRouter(e){return d(this,arguments,(function*({commit:e}){const t=[{path:"/layout",name:"layout",component:"view/layout/index.vue",meta:{title:"底层layout"},children:[]}],o=(yield x({url:"/menu/getMenu",method:"post"})).data.menus;return o.push({path:"404",name:"404",hidden:!0,meta:{title:"迷路了*。*"},component:"view/error/index.vue"}),te(o),t[0].children=o,t.push({path:"/:catchAll(.*)",redirect:"/layout/404"}),H(t),e("setAsyncRouter",t),e("setRouterList",ee),!0}))}},getters:{asyncRouters:e=>e.asyncRouters,routerList:e=>e.routerList}},dictionary:{namespaced:!0,state:{dictionaryMap:{}},mutations:{setDictionaryMap(e,t){e.dictionaryMap=a(a({},e.dictionaryMap),t)}},actions:{getDictionary(e,t){return d(this,arguments,(function*({commit:e,state:t},o){if(t.dictionaryMap[o]&&t.dictionaryMap[o].length)return t.dictionaryMap[o];{const s=yield ie({type:o});if(0===s.code){const r={},i=[];return s.data.resysDictionary.sysDictionaryDetails&&s.data.resysDictionary.sysDictionaryDetails.forEach((e=>{i.push({label:e.label,value:e.value})})),r[s.data.resysDictionary.type]=i,e("setDictionaryMap",r),t.dictionaryMap[o]}}}))}},getters:{getDictionary:e=>e.dictionaryMap}}},plugins:[new y({storage:window.localStorage,modules:["user"]}).plugin]});var de={install:e=>{e.directive("auth",{mounted:function(e,t){const o=ae.getters["user/userInfo"];let s="";switch(Object.prototype.toString.call(t.value)){case"[object Array]":s="Array";break;case"[object String]":s="String";break;case"[object Number]":s="Number";break;default:s=""}if(""===s)return void console.error("v-auth必须是Array,Number,String属性,暂不支持其他属性");let r=t.value.toString().split(",").some((e=>e===o.authorityId));t.modifiers.not&&(r=!r),r||(e.style.display="none")}})}};let ue=0;const ce=["Login","Init"],me=()=>d(this,null,(function*(){yield ae.dispatch("router/SetAsyncRouter"),yield ae.dispatch("user/GetUserInfo");ae.getters["router/asyncRouters"].forEach((e=>{P.addRoute(e)}))}));P.beforeEach(((e,s,r)=>d(this,null,(function*(){const s=ae.getters["user/token"];var i,n;document.title=(i=e.meta.title)?`${i} - ${w.appName}`:`${w.appName}`,ce.indexOf(e.name)>-1?s?(ue||(ue++,yield me()),r({name:ae.getters["user/userInfo"].authority.defaultRouter})):r():(s&&(ue?e.matched.length?r():r({path:"/layout/404"}):(ue++,yield me(),r((n=a({},e),t(n,o({replace:!0})))))),s||r({name:"Login",query:{redirect:document.location.hash}}))}))));var le=(e,t)=>{for(const[o,s]of t)e[o]=s;return e};const pe={id:"app"};const _e=I(le({name:"App"},[["render",function(e,t,o,s,r,i){const n=f("router-view");return v(),g("div",pe,[E(n)])}]]));_e.config.productionTip=!1,_e.use(T).use(de).use(ae).use(P).use(D,{locale:L}).mount("#app");export{le as _,B as a,U as b,C as c,G as d,A as e,ae as f,z as g,J as h,W as i,K as j,ne as k,ie as l,se as m,oe as n,X as o,Y as p,Q as q,Z as r,x as s,N as t,re as u,$ as v,S as w,q as x};