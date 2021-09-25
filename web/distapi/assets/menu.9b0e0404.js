var e=(e,l,t)=>new Promise(((a,i)=>{var o=e=>{try{n(t.next(e))}catch(l){i(l)}},d=e=>{try{n(t.throw(e))}catch(l){i(l)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,d);n((t=t.apply(e,l)).next())}));import{_ as l,g as t,o as a,p as i,q as o,r as d}from"./index.bf0eadd2.js";import{i as n}from"./infoList.89930291.js";import s from"./icon.c012dc4e.js";import{w as r}from"./warningBar.f4c6efa3.js";import{p as m,j as u,r as p,o as f,f as h,k as c,g as b,w as g,u as y,n as w,x as V,l as v,s as _}from"./vendor.ab24dc3f.js";import"./dictionary.03156ab7.js";import"./date.23f5a973.js";const k={name:"Menus",components:{icon:s,warningBar:r},mixins:[n],data:()=>({checkFlag:!1,listApi:t,dialogFormVisible:!1,dialogTitle:"新增菜单",menuOption:[{ID:"0",title:"根菜单"}],form:{ID:0,path:"",name:"",hidden:"",parentId:"",component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[]},rules:{path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]},isEdit:!1,test:""}),created(){return e(this,null,(function*(){this.pageSize=999,yield this.getTableData()}))},methods:{addParameter(e){e.parameters||(this.form.parameters=[]),e.parameters.push({type:"query",key:"",value:""})},deleteParameter(e,l){e.splice(l,1)},changeName(){this.form.path=this.form.name},setOptions(){this.menuOption=[{ID:"0",title:"根目录"}],this.setMenuOptions(this.tableData,this.menuOption,!1)},setMenuOptions(e,l,t){e&&e.forEach((e=>{if(e.children&&e.children.length){const a={title:e.meta.title,ID:String(e.ID),disabled:t||e.ID===this.form.ID,children:[]};this.setMenuOptions(e.children,a.children,t||e.ID===this.form.ID),l.push(a)}else{const a={title:e.meta.title,ID:String(e.ID),disabled:t||e.ID===this.form.ID};l.push(a)}}))},handleClose(e){this.initForm(),e()},load(e,l,t){t([{id:31,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:32,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}])},deleteMenu(l){this.$confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>e(this,null,(function*(){0===(yield a({ID:l})).code&&(this.$message({type:"success",message:"删除成功!"}),1===this.tableData.length&&this.page>1&&this.page--,this.getTableData())})))).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},initForm(){this.checkFlag=!1,this.$refs.menuForm.resetFields(),this.form={ID:0,path:"",name:"",hidden:"",parentId:"",component:"",meta:{title:"",icon:"",defaultMenu:!1,keepAlive:""}}},closeDialog(){this.initForm(),this.dialogFormVisible=!1},enterDialog(){return e(this,null,(function*(){this.$refs.menuForm.validate((l=>e(this,null,(function*(){if(l){let e;e=this.isEdit?yield i(this.form):yield o(this.form),0===e.code&&(this.$message({type:"success",message:this.isEdit?"编辑成功":"添加成功!"}),this.getTableData()),this.initForm(),this.dialogFormVisible=!1}}))))}))},addMenu(e){this.dialogTitle="新增菜单",this.form.parentId=String(e),this.isEdit=!1,this.setOptions(),this.dialogFormVisible=!0},editMenu(l){return e(this,null,(function*(){this.dialogTitle="编辑菜单";const e=yield d({id:l});this.form=e.data.menu,this.isEdit=!0,this.setOptions(),this.dialogFormVisible=!0}))}}};m("data-v-2e0932ab");const D={class:"gva-table-box"},I={class:"gva-btn-list"},F=_("新增根菜单"),x=_("添加子菜单"),C=_("编辑"),U=_("删除"),M={style:{display:"inline-flex"}},T=_(" 路由Path "),z=_("添加参数"),O=c("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1),P=_("点我设置"),j=_("新增菜单参数"),q=_("删除"),A={class:"dialog-footer"},$=_("取 消"),E=_("确 定");u();var N=l(k,[["render",function(e,l,t,a,i,o){const d=p("el-button"),n=p("el-table-column"),s=p("el-table"),r=p("warning-bar"),m=p("el-input"),u=p("el-form-item"),_=p("el-checkbox"),k=p("el-option"),N=p("el-select"),S=p("el-cascader"),B=p("icon"),H=p("el-form"),K=p("el-dialog");return f(),h("div",null,[c("div",D,[c("div",I,[b(d,{size:"mini",type:"primary",icon:"el-icon-plus",onClick:l[0]||(l[0]=e=>o.addMenu("0"))},{default:g((()=>[F])),_:1})]),b(s,{data:e.tableData,"row-key":"ID"},{default:g((()=>[b(n,{align:"left",label:"ID","min-width":"100",prop:"ID"}),b(n,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),b(n,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),b(n,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:g((e=>[c("span",null,y(e.row.hidden?"隐藏":"显示"),1)])),_:1}),b(n,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),b(n,{align:"left",label:"排序","min-width":"70",prop:"sort"}),b(n,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),b(n,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:g((e=>[c("span",null,y(e.row.meta.title),1)])),_:1}),b(n,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:g((e=>[c("i",{class:w(`el-icon-${e.row.meta.icon}`)},null,2),c("span",null,y(e.row.meta.icon),1)])),_:1}),b(n,{align:"left",fixed:"right",label:"操作",width:"300"},{default:g((e=>[b(d,{size:"mini",type:"text",icon:"el-icon-plus",onClick:l=>o.addMenu(e.row.ID)},{default:g((()=>[x])),_:2},1032,["onClick"]),b(d,{size:"mini",type:"text",icon:"el-icon-edit",onClick:l=>o.editMenu(e.row.ID)},{default:g((()=>[C])),_:2},1032,["onClick"]),b(d,{size:"mini",type:"text",icon:"el-icon-delete",onClick:l=>o.deleteMenu(e.row.ID)},{default:g((()=>[U])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),b(K,{modelValue:i.dialogFormVisible,"onUpdate:modelValue":l[13]||(l[13]=e=>i.dialogFormVisible=e),"before-close":o.handleClose,title:i.dialogTitle},{footer:g((()=>[c("div",A,[b(d,{size:"small",onClick:o.closeDialog},{default:g((()=>[$])),_:1},8,["onClick"]),b(d,{size:"small",type:"primary",onClick:o.enterDialog},{default:g((()=>[E])),_:1},8,["onClick"])])])),default:g((()=>[b(r,{title:"新增菜单，需要在角色管理内篇日志权限才可使用"}),i.dialogFormVisible?(f(),V(H,{key:0,ref:"menuForm",inline:!0,model:i.form,rules:i.rules,"label-position":"top","label-width":"85px"},{default:g((()=>[b(u,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:g((()=>[b(m,{modelValue:i.form.name,"onUpdate:modelValue":l[1]||(l[1]=e=>i.form.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:o.changeName},null,8,["modelValue","onChange"])])),_:1}),b(u,{prop:"path",style:{width:"30%"}},{label:g((()=>[c("div",M,[T,b(_,{modelValue:i.checkFlag,"onUpdate:modelValue":l[2]||(l[2]=e=>i.checkFlag=e),style:{float:"right","margin-left":"20px"}},{default:g((()=>[z])),_:1},8,["modelValue"])])])),default:g((()=>[b(m,{modelValue:i.form.path,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.path=e),disabled:!i.checkFlag,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1}),b(u,{label:"是否隐藏",style:{width:"30%"}},{default:g((()=>[b(N,{modelValue:i.form.hidden,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.hidden=e),placeholder:"是否在列表隐藏"},{default:g((()=>[b(k,{value:!1,label:"否"}),b(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),b(u,{label:"父节点ID",style:{width:"30%"}},{default:g((()=>[b(S,{modelValue:i.form.parentId,"onUpdate:modelValue":l[5]||(l[5]=e=>i.form.parentId=e),style:{width:"100%"},disabled:!i.isEdit,options:i.menuOption,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),b(u,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:g((()=>[b(m,{modelValue:i.form.component,"onUpdate:modelValue":l[6]||(l[6]=e=>i.form.component=e),autocomplete:"off"},null,8,["modelValue"]),O,b(d,{size:"mini",onClick:l[7]||(l[7]=e=>i.form.component="view/routerHolder.vue")},{default:g((()=>[P])),_:1})])),_:1}),b(u,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:g((()=>[b(m,{modelValue:i.form.meta.title,"onUpdate:modelValue":l[8]||(l[8]=e=>i.form.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),b(u,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:g((()=>[b(B,{meta:i.form.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),b(u,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:g((()=>[b(m,{modelValue:i.form.sort,"onUpdate:modelValue":l[9]||(l[9]=e=>i.form.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),b(u,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:g((()=>[b(N,{modelValue:i.form.meta.keepAlive,"onUpdate:modelValue":l[10]||(l[10]=e=>i.form.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:g((()=>[b(k,{value:!1,label:"否"}),b(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),b(u,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:g((()=>[b(N,{modelValue:i.form.meta.closeTab,"onUpdate:modelValue":l[11]||(l[11]=e=>i.form.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:g((()=>[b(k,{value:!1,label:"否"}),b(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):v("",!0),c("div",null,[b(d,{size:"small",type:"primary",icon:"el-icon-edit",onClick:l[12]||(l[12]=e=>o.addParameter(i.form))},{default:g((()=>[j])),_:1}),b(s,{data:i.form.parameters,style:{width:"100%"}},{default:g((()=>[b(n,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:g((e=>[b(N,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:g((()=>[b(k,{key:"query",value:"query",label:"query"}),b(k,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),b(n,{align:"left",prop:"key",label:"参数key",width:"180"},{default:g((e=>[c("div",null,[b(m,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),b(n,{align:"left",prop:"value",label:"参数值"},{default:g((e=>[c("div",null,[b(m,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),b(n,{align:"left"},{default:g((e=>[c("div",null,[b(d,{type:"danger",size:"small",icon:"el-icon-delete",onClick:l=>o.deleteParameter(i.form.parameters,e.$index)},{default:g((()=>[q])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue","before-close","title"])])}],["__scopeId","data-v-2e0932ab"]]);export{N as default};