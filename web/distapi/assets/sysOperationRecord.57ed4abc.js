var e=(e,l,t)=>new Promise(((a,i)=>{var n=e=>{try{s(t.next(e))}catch(l){i(l)}},o=e=>{try{s(t.throw(e))}catch(l){i(l)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,o);s((t=t.apply(e,l)).next())}));import{s as l,_ as t}from"./index.bf0eadd2.js";import{i as a}from"./infoList.89930291.js";import{r as i,o as n,f as o,k as s,g as r,w as d,u as p,s as u,x as c}from"./vendor.ab24dc3f.js";import"./dictionary.03156ab7.js";import"./date.23f5a973.js";const h=e=>l({url:"/sysOperationRecord/getSysOperationRecordList",method:"get",params:e});const m={name:"SysOperationRecord",mixins:[a],data:()=>({listApi:h,dialogFormVisible:!1,type:"",deleteVisible:!1,multipleSelection:[],formData:{ip:null,method:null,path:null,status:null,latency:null,agent:null,error_message:null,user_id:null}}),created(){this.getTableData()},methods:{onReset(){this.searchInfo={}},onSubmit(){this.page=1,this.pageSize=10,this.getTableData()},handleSelectionChange(e){this.multipleSelection=e},onDelete(){return e(this,null,(function*(){const e=[];this.multipleSelection&&this.multipleSelection.forEach((l=>{e.push(l.ID)}));var t;0===(yield(t={ids:e},l({url:"/sysOperationRecord/deleteSysOperationRecordByIds",method:"delete",data:t}))).code&&(this.$message({type:"success",message:"删除成功"}),this.tableData.length===e.length&&this.page>1&&this.page--,this.deleteVisible=!1,this.getTableData())}))},deleteSysOperationRecord(t){return e(this,null,(function*(){t.visible=!1;var e;0===(yield(e={ID:t.ID},l({url:"/sysOperationRecord/deleteSysOperationRecord",method:"delete",data:e}))).code&&(this.$message({type:"success",message:"删除成功"}),1===this.tableData.length&&this.page>1&&this.page--,this.getTableData())}))},fmtBody(e){try{return JSON.parse(e)}catch(l){return e}}}},f={class:"gva-search-box"},g=u("查询"),b=u("重置"),y={class:"gva-table-box"},v={class:"gva-btn-list"},w=s("p",null,"确定要删除吗？",-1),_={style:{"text-align":"right","margin-top":"8px"}},C=u("取消"),S=u("确定"),k=u("删除"),x={class:"popover-box"},z=s("i",{class:"el-icon-view"},null,-1),D={key:1},V={class:"popover-box"},I=s("i",{class:"el-icon-view"},null,-1),R={key:1},O=s("p",null,"确定要删除吗？",-1),j={style:{"text-align":"right","margin-top":"8px"}},T=u("取消"),B=u("确定"),U=u("删除"),N={class:"gva-pagination"};var P=t(m,[["render",function(e,l,t,a,h,m){const P=i("el-input"),A=i("el-form-item"),L=i("el-button"),$=i("el-form"),E=i("el-popover"),F=i("el-table-column"),J=i("el-tag"),q=i("el-table"),G=i("el-pagination");return n(),o("div",null,[s("div",f,[r($,{inline:!0,model:e.searchInfo},{default:d((()=>[r(A,{label:"请求方法"},{default:d((()=>[r(P,{modelValue:e.searchInfo.method,"onUpdate:modelValue":l[0]||(l[0]=l=>e.searchInfo.method=l),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),r(A,{label:"请求路径"},{default:d((()=>[r(P,{modelValue:e.searchInfo.path,"onUpdate:modelValue":l[1]||(l[1]=l=>e.searchInfo.path=l),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),r(A,{label:"结果状态码"},{default:d((()=>[r(P,{modelValue:e.searchInfo.status,"onUpdate:modelValue":l[2]||(l[2]=l=>e.searchInfo.status=l),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),r(A,null,{default:d((()=>[r(L,{size:"mini",type:"primary",icon:"el-icon-search",onClick:m.onSubmit},{default:d((()=>[g])),_:1},8,["onClick"]),r(L,{size:"mini",icon:"el-icon-refresh",onClick:m.onReset},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),s("div",y,[s("div",v,[r(E,{visible:h.deleteVisible,"onUpdate:visible":l[4]||(l[4]=e=>h.deleteVisible=e),placement:"top",width:"160"},{reference:d((()=>[r(L,{icon:"el-icon-delete",size:"mini",style:{"margin-left":"10px"},disabled:!h.multipleSelection.length},{default:d((()=>[k])),_:1},8,["disabled"])])),default:d((()=>[w,s("div",_,[r(L,{size:"mini",type:"text",onClick:l[3]||(l[3]=e=>h.deleteVisible=!1)},{default:d((()=>[C])),_:1}),r(L,{size:"mini",type:"primary",onClick:m.onDelete},{default:d((()=>[S])),_:1},8,["onClick"])])])),_:1},8,["visible"])]),r(q,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSelectionChange:m.handleSelectionChange},{default:d((()=>[r(F,{align:"left",type:"selection",width:"55"}),r(F,{align:"left",label:"操作人",width:"140"},{default:d((e=>[s("div",null,p(e.row.user.userName)+"("+p(e.row.user.nickName)+")",1)])),_:1}),r(F,{align:"left",label:"日期",width:"180"},{default:d((l=>[u(p(e.formatDate(l.row.CreatedAt)),1)])),_:1}),r(F,{align:"left",label:"状态码",prop:"status",width:"120"},{default:d((e=>[s("div",null,[r(J,{type:"success"},{default:d((()=>[u(p(e.row.status),1)])),_:2},1024)])])),_:1}),r(F,{align:"left",label:"请求IP",prop:"ip",width:"120"}),r(F,{align:"left",label:"请求方法",prop:"method",width:"120"}),r(F,{align:"left",label:"请求路径",prop:"path",width:"240"}),r(F,{align:"left",label:"请求",prop:"path",width:"80"},{default:d((e=>[s("div",null,[e.row.body?(n(),c(E,{key:0,placement:"top-start",trigger:"hover"},{reference:d((()=>[z])),default:d((()=>[s("div",x,[s("pre",null,p(m.fmtBody(e.row.body)),1)])])),_:2},1024)):(n(),o("span",D,"无"))])])),_:1}),r(F,{align:"left",label:"响应",prop:"path",width:"80"},{default:d((e=>[s("div",null,[e.row.resp?(n(),c(E,{key:0,placement:"top-start",trigger:"hover"},{reference:d((()=>[I])),default:d((()=>[s("div",V,[s("pre",null,p(m.fmtBody(e.row.resp)),1)])])),_:2},1024)):(n(),o("span",R,"无"))])])),_:1}),r(F,{align:"left",label:"按钮组"},{default:d((e=>[r(E,{visible:e.row.visible,placement:"top",width:"160"},{reference:d((()=>[r(L,{icon:"el-icon-delete",size:"mini",type:"text"},{default:d((()=>[U])),_:1})])),default:d((()=>[O,s("div",j,[r(L,{size:"mini",type:"text",onClick:l=>e.row.visible=!1},{default:d((()=>[T])),_:2},1032,["onClick"]),r(L,{size:"mini",type:"primary",onClick:l=>m.deleteSysOperationRecord(e.row)},{default:d((()=>[B])),_:2},1032,["onClick"])])])),_:2},1032,["visible"])])),_:1})])),_:1},8,["data","onSelectionChange"]),s("div",N,[r(G,{"current-page":e.page,"page-size":e.pageSize,"page-sizes":[10,30,50,100],total:e.total,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])])}]]);export{P as default};
