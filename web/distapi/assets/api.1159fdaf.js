var e=(e,l,a)=>new Promise(((t,i)=>{var o=e=>{try{n(a.next(e))}catch(l){i(l)}},s=e=>{try{n(a.throw(e))}catch(l){i(l)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);n((a=a.apply(e,l)).next())}));import{g as l,d as a,a as t,b as i,u as o,c as s}from"./api.ae6d84db.js";import{i as n}from"./infoList.89930291.js";import{t as r}from"./stringFun.2a2664f6.js";import{w as d}from"./warningBar.f4c6efa3.js";import{_ as p}from"./index.bf0eadd2.js";import{p as u,j as m,r as c,o as h,f as g,k as f,g as b,w as v,F as y,A as V,u as C,s as _,x as w}from"./vendor.ab24dc3f.js";import"./dictionary.03156ab7.js";import"./date.23f5a973.js";const D=[{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}],k={name:"Api",components:{warningBar:d},mixins:[n],data:()=>({deleteVisible:!1,listApi:l,dialogFormVisible:!1,dialogTitle:"新增Api",apis:[],form:{path:"",apiGroup:"",method:"",description:""},methodOptions:D,type:"",rules:{path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}}),created(){this.getTableData()},methods:{methodFiletr(e){const l=D.filter((l=>l.value===e))[0];return l&&`${l.label}`},tagTypeFiletr(e){const l=D.filter((l=>l.value===e))[0];return l&&`${l.type}`},handleSelectionChange(e){this.apis=e},onDelete(){return e(this,null,(function*(){const e=this.apis.forEach((e=>e.ID)),l=yield a({ids:e});0===l.code&&(this.$message({type:"success",message:l.msg}),this.tableData.length===e.length&&this.page>1&&this.page--,this.deleteVisible=!1,this.getTableData())}))},sortChange({prop:e,order:l}){e&&(this.searchInfo.orderKey=r(e),this.searchInfo.desc="descending"===l),this.getTableData()},onReset(){this.searchInfo={}},onSubmit(){this.page=1,this.pageSize=10,this.getTableData()},initForm(){this.$refs.apiForm.resetFields(),this.form={path:"",apiGroup:"",method:"",description:""}},closeDialog(){this.initForm(),this.dialogFormVisible=!1},openDialog(e){switch(e){case"addApi":this.dialogTitle="新增Api";break;case"edit":this.dialogTitle="编辑Api"}this.type=e,this.dialogFormVisible=!0},editApi(l){return e(this,null,(function*(){const e=yield t({id:l.ID});this.form=e.data.api,this.openDialog("edit")}))},deleteApi(l){return e(this,null,(function*(){this.$confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>e(this,null,(function*(){0===(yield i(l)).code&&(this.$message({type:"success",message:"删除成功!"}),1===this.tableData.length&&this.page>1&&this.page--,this.getTableData())}))))}))},enterDialog(){return e(this,null,(function*(){this.$refs.apiForm.validate((l=>e(this,null,(function*(){if(l)switch(this.type){case"addApi":0===(yield s(this.form)).code&&this.$message({type:"success",message:"添加成功",showClose:!0}),this.getTableData(),this.closeDialog();break;case"edit":0===(yield o(this.form)).code&&this.$message({type:"success",message:"编辑成功",showClose:!0}),this.getTableData(),this.closeDialog();break;default:this.$message({type:"error",message:"未知操作",showClose:!0})}}))))}))}}};u("data-v-e767dc10");const I={class:"gva-search-box"},x=_("查询"),z=_("重置"),A={class:"gva-table-box"},T={class:"gva-btn-list"},F=_("新增"),S=f("p",null,"确定要删除吗？",-1),$={style:{"text-align":"right","margin-top":"8px"}},U=_("取消"),j=_("确定"),G=_("删除"),P=_("编辑"),E=_("删除"),q={class:"gva-pagination"},B={class:"dialog-footer"},O=_("取 消"),L=_("确 定");m();var R=p(k,[["render",function(e,l,a,t,i,o){const s=c("el-input"),n=c("el-form-item"),r=c("el-option"),d=c("el-select"),p=c("el-button"),u=c("el-form"),m=c("el-popover"),_=c("el-table-column"),D=c("el-table"),k=c("el-pagination"),R=c("warning-bar"),K=c("el-dialog");return h(),g("div",null,[f("div",I,[b(u,{ref:"searchForm",inline:!0,model:e.searchInfo},{default:v((()=>[b(n,{label:"路径"},{default:v((()=>[b(s,{modelValue:e.searchInfo.path,"onUpdate:modelValue":l[0]||(l[0]=l=>e.searchInfo.path=l),placeholder:"路径"},null,8,["modelValue"])])),_:1}),b(n,{label:"描述"},{default:v((()=>[b(s,{modelValue:e.searchInfo.description,"onUpdate:modelValue":l[1]||(l[1]=l=>e.searchInfo.description=l),placeholder:"描述"},null,8,["modelValue"])])),_:1}),b(n,{label:"API组"},{default:v((()=>[b(s,{modelValue:e.searchInfo.apiGroup,"onUpdate:modelValue":l[2]||(l[2]=l=>e.searchInfo.apiGroup=l),placeholder:"api组"},null,8,["modelValue"])])),_:1}),b(n,{label:"请求"},{default:v((()=>[b(d,{modelValue:e.searchInfo.method,"onUpdate:modelValue":l[3]||(l[3]=l=>e.searchInfo.method=l),clearable:"",placeholder:"请选择"},{default:v((()=>[(h(!0),g(y,null,V(i.methodOptions,(e=>(h(),w(r,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(n,null,{default:v((()=>[b(p,{size:"mini",type:"primary",icon:"el-icon-search",onClick:o.onSubmit},{default:v((()=>[x])),_:1},8,["onClick"]),b(p,{size:"mini",icon:"el-icon-refresh",onClick:o.onReset},{default:v((()=>[z])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),f("div",A,[f("div",T,[b(p,{size:"mini",type:"primary",icon:"el-icon-plus",onClick:l[4]||(l[4]=e=>o.openDialog("addApi"))},{default:v((()=>[F])),_:1}),b(m,{visible:i.deleteVisible,"onUpdate:visible":l[6]||(l[6]=e=>i.deleteVisible=e),placement:"top",width:"160"},{reference:v((()=>[b(p,{icon:"el-icon-delete",size:"mini",disabled:!i.apis.length,style:{"margin-left":"10px"}},{default:v((()=>[G])),_:1},8,["disabled"])])),default:v((()=>[S,f("div",$,[b(p,{size:"mini",type:"text",onClick:l[5]||(l[5]=e=>i.deleteVisible=!1)},{default:v((()=>[U])),_:1}),b(p,{size:"mini",type:"primary",onClick:o.onDelete},{default:v((()=>[j])),_:1},8,["onClick"])])])),_:1},8,["visible"])]),b(D,{data:e.tableData,onSortChange:o.sortChange,onSelectionChange:o.handleSelectionChange},{default:v((()=>[b(_,{type:"selection",width:"55"}),b(_,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),b(_,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),b(_,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),b(_,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),b(_,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:v((e=>[f("div",null,C(e.row.method)+" / "+C(o.methodFiletr(e.row.method)),1)])),_:1}),b(_,{align:"left",fixed:"right",label:"操作",width:"200"},{default:v((e=>[b(p,{icon:"el-icon-edit",size:"small",type:"text",onClick:l=>o.editApi(e.row)},{default:v((()=>[P])),_:2},1032,["onClick"]),b(p,{icon:"el-icon-delete",size:"small",type:"text",onClick:l=>o.deleteApi(e.row)},{default:v((()=>[E])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSortChange","onSelectionChange"]),f("div",q,[b(k,{"current-page":e.page,"page-size":e.pageSize,"page-sizes":[10,30,50,100],total:e.total,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]),b(K,{modelValue:i.dialogFormVisible,"onUpdate:modelValue":l[11]||(l[11]=e=>i.dialogFormVisible=e),"before-close":o.closeDialog,title:i.dialogTitle},{footer:v((()=>[f("div",B,[b(p,{size:"small",onClick:o.closeDialog},{default:v((()=>[O])),_:1},8,["onClick"]),b(p,{size:"small",type:"primary",onClick:o.enterDialog},{default:v((()=>[L])),_:1},8,["onClick"])])])),default:v((()=>[b(R,{title:"新增API，需要在角色管理内篇日志权限才可使用"}),b(u,{ref:"apiForm",model:i.form,rules:i.rules,"label-width":"80px"},{default:v((()=>[b(n,{label:"路径",prop:"path"},{default:v((()=>[b(s,{modelValue:i.form.path,"onUpdate:modelValue":l[7]||(l[7]=e=>i.form.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),b(n,{label:"请求",prop:"method"},{default:v((()=>[b(d,{modelValue:i.form.method,"onUpdate:modelValue":l[8]||(l[8]=e=>i.form.method=e),placeholder:"请选择",style:{width:"100%"}},{default:v((()=>[(h(!0),g(y,null,V(i.methodOptions,(e=>(h(),w(r,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(n,{label:"api分组",prop:"apiGroup"},{default:v((()=>[b(s,{modelValue:i.form.apiGroup,"onUpdate:modelValue":l[9]||(l[9]=e=>i.form.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),b(n,{label:"api简介",prop:"description"},{default:v((()=>[b(s,{modelValue:i.form.description,"onUpdate:modelValue":l[10]||(l[10]=e=>i.form.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","before-close","title"])])}],["__scopeId","data-v-e767dc10"]]);export{R as default};
