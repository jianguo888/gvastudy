var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{E as s,G as n,p as i,j as r,r as d,o as p,f as c,k as m,g as b,w as f,u as x,s as h}from"./vendor.ab24dc3f.js";import{i as u}from"./infoList.89930291.js";import{s as w,_ as E,g}from"./index.bf0eadd2.js";import"./dictionary.03156ab7.js";import"./date.23f5a973.js";const v=(e,a)=>{if(void 0!==e.data){if("application/json"===e.data.type){const a=new FileReader;a.onload=function(){const e=JSON.parse(a.result).msg;s({showClose:!0,message:e,type:"error"})},a.readAsText(new Blob([e.data]))}}else{var t=window.URL.createObjectURL(new Blob([e])),l=document.createElement("a");l.style.display="none",l.href=t,l.download=a;var o=new MouseEvent("click");l.dispatchEvent(o)}},y=()=>w({url:"/excel/loadExcel",method:"get"});const j={name:"Excel",mixins:[u],data:()=>({listApi:g,path:"/api"}),computed:((e,s)=>{for(var n in s||(s={}))t.call(s,n)&&o(e,n,s[n]);if(a)for(var n of a(s))l.call(s,n)&&o(e,n,s[n]);return e})({},n("user",["userInfo","token"])),created(){this.pageSize=999,this.getTableData()},methods:{handleExcelExport(e){e&&"string"==typeof e||(e="ExcelExport.xlsx"),((e,a)=>{w({url:"/excel/exportExcel",method:"post",data:{fileName:a,infoList:e},responseType:"blob"}).then((e=>{v(e,a)}))})(this.tableData,e)},loadExcel(){this.listApi=y,this.getTableData()},downloadExcelTemplate(){var e;w({url:"/excel/downloadTemplate",method:"get",params:{fileName:e="ExcelTemplate.xlsx"},responseType:"blob"}).then((a=>{v(a,e)}))}}};i("data-v-643bc4e6");const T={class:"upload"},_={class:"gva-table-box"},k={class:"gva-btn-list"},O=h("导入"),D=h("导出"),I=h("下载模板");r();var z=E(j,[["render",function(e,a,t,l,o,s){const n=d("el-button"),i=d("el-upload"),r=d("el-table-column"),h=d("el-table");return p(),c("div",T,[m("div",_,[m("div",k,[b(i,{class:"excel-btn",action:`${o.path}/excel/importExcel`,headers:{"x-token":e.token},"on-success":s.loadExcel,"show-file-list":!1},{default:f((()=>[b(n,{size:"mini",type:"primary",icon:"el-icon-upload2"},{default:f((()=>[O])),_:1})])),_:1},8,["action","headers","on-success"]),b(n,{class:"excel-btn",size:"mini",type:"primary",icon:"el-icon-download",onClick:a[0]||(a[0]=e=>s.handleExcelExport("ExcelExport.xlsx"))},{default:f((()=>[D])),_:1}),b(n,{class:"excel-btn",size:"mini",type:"success",icon:"el-icon-download",onClick:a[1]||(a[1]=e=>s.downloadExcelTemplate())},{default:f((()=>[I])),_:1})]),b(h,{data:e.tableData,"row-key":"ID"},{default:f((()=>[b(r,{align:"left",label:"ID","min-width":"100",prop:"ID"}),b(r,{align:"left","show-overflow-tooltip":"",label:"路由Name","min-width":"160",prop:"name"}),b(r,{align:"left","show-overflow-tooltip":"",label:"路由Path","min-width":"160",prop:"path"}),b(r,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:f((e=>[m("span",null,x(e.row.hidden?"隐藏":"显示"),1)])),_:1}),b(r,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),b(r,{align:"left",label:"排序","min-width":"70",prop:"sort"}),b(r,{align:"left",label:"文件路径","min-width":"360",prop:"component"})])),_:1},8,["data"])])])}],["__scopeId","data-v-643bc4e6"]]);export{z as default};