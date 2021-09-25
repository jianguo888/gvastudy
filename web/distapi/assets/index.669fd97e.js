var e=(e,l,a)=>new Promise(((t,i)=>{var o=e=>{try{s(a.next(e))}catch(l){i(l)}},d=e=>{try{s(a.throw(e))}catch(l){i(l)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,d);s((a=a.apply(e,l)).next())}));import l from"./fieldDialog.fd4957cd.js";import a from"./previewCodeDialg.7d3cdad2.js";import{a as t,t as i,b as o}from"./stringFun.2a2664f6.js";import{p as d,c as s,g as r,a as m,b as n,d as f}from"./autoCode.260122b4.js";import{g as p}from"./dictionary.03156ab7.js";import{_ as u}from"./index.bf0eadd2.js";import{p as c,j as b,r as g,o as h,f as y,k as v,g as N,w as C,F,A as _,x as w,l as x,s as k}from"./vendor.ab24dc3f.js";import"./warningBar.f4c6efa3.js";const V={fieldName:"",fieldDesc:"",fieldType:"",dataType:"",fieldJson:"",columnName:"",dataTypeLong:"",comment:"",fieldSearchType:"",dictType:""},T={name:"AutoCode",components:{FieldDialog:l,PreviewCodeDialog:a},data:()=>({activeNames:[""],preViewCode:{},dbform:{dbName:"",tableName:""},dbOptions:[],tableOptions:[],addFlag:"",fdMap:{},form:{structName:"",tableName:"",packageName:"",abbreviation:"",description:"",autoCreateApiToSql:!1,autoMoveFile:!1,fields:[]},rules:{structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],description:[{required:!0,message:"请输入结构体描述",trigger:"blur"}],packageName:[{required:!0,message:"文件名称：sysXxxxXxxx",trigger:"blur"}]},dialogMiddle:{},bk:{},dialogFlag:!1,previewFlag:!1}),created(){this.getDb(),this.setFdMap();const e=this.$route.params.id;e&&this.getAutoCodeJson(e)},methods:{selectText(){this.$refs.preview.selectText()},copy(){this.$refs.preview.copy()},editAndAddField(e){this.dialogFlag=!0,e?(this.addFlag="edit",this.bk=JSON.parse(JSON.stringify(e)),this.dialogMiddle=e):(this.addFlag="add",this.dialogMiddle=JSON.parse(JSON.stringify(V)))},moveUpField(e){if(0===e)return;const l=this.form.fields[e-1];this.form.fields.splice(e-1,1),this.form.fields.splice(e,0,l)},moveDownField(e){if(e===this.form.fields.length-1)return;const l=this.form.fields[e+1];this.form.fields.splice(e+1,1),this.form.fields.splice(e,0,l)},enterDialog(){this.$refs.fieldDialog.$refs.fieldDialogFrom.validate((e=>{if(!e)return!1;this.dialogMiddle.fieldName=t(this.dialogMiddle.fieldName),"add"===this.addFlag&&this.form.fields.push(this.dialogMiddle),this.dialogFlag=!1}))},closeDialog(){"edit"===this.addFlag&&(this.dialogMiddle=this.bk),this.dialogFlag=!1},deleteField(e){this.form.fields.splice(e,1)},enterForm(l){return e(this,null,(function*(){return this.form.fields.length<=0?(this.$message({type:"error",message:"请填写至少一个field"}),!1):this.form.fields.some((e=>e.fieldName===this.form.structName))?(this.$message({type:"error",message:"存在与结构体同名的字段"}),!1):void this.$refs.autoCodeForm.validate((a=>e(this,null,(function*(){var e;if(!a)return!1;if(this.form.structName=t(this.form.structName),this.form.tableName&&(this.form.tableName=this.form.tableName.replace(" ","")),this.form.structName===this.form.abbreviation)return this.$message({type:"error",message:"structName和struct简称不能相同"}),!1;if(this.form.humpPackageName=i(this.form.packageName),l){const e=yield d(this.form);this.preViewCode=e.data.autoCode,this.previewFlag=!0}else{const l=yield s(this.form);if("false"===(null==(e=l.headers)?void 0:e.success))return;if(this.form.autoMoveFile)return void this.$message({type:"success",message:"自动化代码创建成功，自动移动成功"});this.$message({type:"success",message:"自动化代码创建成功，正在下载"});const a=new Blob([l]),t="ginvueadmin.zip";if("download"in document.createElement("a")){const e=window.URL.createObjectURL(a),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download",t),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(e)}else window.navigator.msSaveBlob(a,t)}}))))}))},getDb(){return e(this,null,(function*(){const e=yield r();0===e.code&&(this.dbOptions=e.data.dbs)}))},getTable(){return e(this,null,(function*(){const e=yield m({dbName:this.dbform.dbName});0===e.code&&(this.tableOptions=e.data.tables),this.dbform.tableName=""}))},getColumn(){return e(this,null,(function*(){const e=["id","created_at","updated_at","deleted_at"],l=yield n(this.dbform);if(0===l.code){const a=o(this.dbform.tableName);this.form.structName=t(a),this.form.tableName=this.dbform.tableName,this.form.packageName=a,this.form.abbreviation=a,this.form.description=a+"表",this.form.autoCreateApiToSql=!0,this.form.fields=[],l.data.columns&&l.data.columns.forEach((l=>{if(!e.some((e=>e===l.columnName))){const e=o(l.columnName);this.form.fields.push({fieldName:t(e),fieldDesc:l.columnComment||e+"字段",fieldType:this.fdMap[l.dataType],dataType:l.dataType,fieldJson:e,dataTypeLong:l.dataTypeLong,columnName:l.columnName,comment:l.columnComment,fieldSearchType:"",dictType:""})}}))}}))},setFdMap(){return e(this,null,(function*(){["string","int","bool","float64","time.Time"].forEach((l=>e(this,null,(function*(){const e=yield p(l);e&&e.forEach((e=>{this.fdMap[e.label]=l}))}))))}))},getAutoCodeJson(l){return e(this,null,(function*(){const e=yield f({id:Number(l)});0===e.code&&(this.form=JSON.parse(e.data.meta))}))}}};c("data-v-10f11ccd");const D={class:"gva-search-box"},U=v("div",{style:{fontSize:"16px",paddingLeft:"20px"}},[k(" 点这里从现有数据库创建代码 "),v("i",{class:"header-icon el-icon-thumb"})],-1),z=k("使用此表创建"),A={class:"gva-search-box"},M=v("div",null," 自动创建API ",-1),S=v("div",null," 自动移动文件 ",-1),$={class:"gva-table-box"},O={class:"gva-btn-list"},j=k("新增Field"),J=k("编辑"),L=k("上移"),q=k("下移"),P=v("p",null,"确定删除吗？",-1),E={style:{"text-align":"right","margin-top":"8px"}},R=k("取消"),X=k("确定"),B=k("删除"),I=k("id , created_at , updated_at , deleted_at 会自动生成请勿重复创建"),G={class:"gva-btn-list justify-content-flex-end"},H=k("预览代码"),K=k("生成代码"),Q={class:"dialog-footer"},W=k("取 消"),Y=k("确 定"),Z={class:"previewCodeTool"},ee=v("p",null,"操作栏：",-1),le=k("全选"),ae=k("复制"),te={class:"dialog-footer",style:{"padding-top":"14px","padding-right":"14px"}},ie=k("确 定");b();var oe=u(T,[["render",function(e,l,a,t,i,o){const d=g("el-option"),s=g("el-select"),r=g("el-form-item"),m=g("el-button"),n=g("el-form"),f=g("el-collapse-item"),p=g("el-collapse"),u=g("el-input"),c=g("el-tooltip"),b=g("el-checkbox"),k=g("el-table-column"),V=g("el-popover"),T=g("el-table"),oe=g("el-tag"),de=g("FieldDialog"),se=g("el-dialog"),re=g("PreviewCodeDialog");return h(),y("div",null,[v("div",D,[N(p,{modelValue:i.activeNames,"onUpdate:modelValue":l[2]||(l[2]=e=>i.activeNames=e),style:{"margin-bottom":"12px"}},{default:C((()=>[N(f,{name:"1"},{title:C((()=>[U])),default:C((()=>[N(n,{ref:"getTableForm",style:{"margin-top":"24px"},inline:!0,model:i.dbform,"label-width":"120px"},{default:C((()=>[N(r,{label:"数据库名",prop:"structName"},{default:C((()=>[N(s,{modelValue:i.dbform.dbName,"onUpdate:modelValue":l[0]||(l[0]=e=>i.dbform.dbName=e),filterable:"",placeholder:"请选择数据库",onChange:o.getTable},{default:C((()=>[(h(!0),y(F,null,_(i.dbOptions,(e=>(h(),w(d,{key:e.database,label:e.database,value:e.database},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),N(r,{label:"表名",prop:"structName"},{default:C((()=>[N(s,{modelValue:i.dbform.tableName,"onUpdate:modelValue":l[1]||(l[1]=e=>i.dbform.tableName=e),disabled:!i.dbform.dbName,filterable:"",placeholder:"请选择表"},{default:C((()=>[(h(!0),y(F,null,_(i.tableOptions,(e=>(h(),w(d,{key:e.tableName,label:e.tableName,value:e.tableName},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),N(r,null,{default:C((()=>[N(m,{size:"mini",type:"primary",onClick:o.getColumn},{default:C((()=>[z])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["modelValue"])]),v("div",A,[N(n,{ref:"autoCodeForm",rules:i.rules,model:i.form,"label-width":"120px",inline:!0},{default:C((()=>[N(r,{label:"Struct名称",prop:"structName"},{default:C((()=>[N(u,{modelValue:i.form.structName,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.structName=e),placeholder:"首字母自动转换大写"},null,8,["modelValue"])])),_:1}),N(r,{label:"TableName",prop:"tableName"},{default:C((()=>[N(u,{modelValue:i.form.tableName,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.tableName=e),placeholder:"指定表名（非必填）"},null,8,["modelValue"])])),_:1}),N(r,{label:"Struct简称",prop:"abbreviation"},{default:C((()=>[N(u,{modelValue:i.form.abbreviation,"onUpdate:modelValue":l[5]||(l[5]=e=>i.form.abbreviation=e),placeholder:"简称会作为入参对象名和路由group"},null,8,["modelValue"])])),_:1}),N(r,{label:"Struct中文名称",prop:"description"},{default:C((()=>[N(u,{modelValue:i.form.description,"onUpdate:modelValue":l[6]||(l[6]=e=>i.form.description=e),placeholder:"中文描述作为自动api描述"},null,8,["modelValue"])])),_:1}),N(r,{label:"文件名称",prop:"packageName"},{default:C((()=>[N(u,{modelValue:i.form.packageName,"onUpdate:modelValue":l[7]||(l[7]=e=>i.form.packageName=e),placeholder:"生成文件的默认名称(建议为驼峰格式,首字母小写,如sysXxxXxxx)"},null,8,["modelValue"])])),_:1}),N(r,null,{label:C((()=>[N(c,{content:"注：把自动生成的API注册进数据库",placement:"bottom",effect:"light"},{default:C((()=>[M])),_:1})])),default:C((()=>[N(b,{modelValue:i.form.autoCreateApiToSql,"onUpdate:modelValue":l[8]||(l[8]=e=>i.form.autoCreateApiToSql=e)},null,8,["modelValue"])])),_:1}),N(r,null,{label:C((()=>[N(c,{content:"注：自动迁移生成的文件到ymal配置的对应位置",placement:"bottom",effect:"light"},{default:C((()=>[S])),_:1})])),default:C((()=>[N(b,{modelValue:i.form.autoMoveFile,"onUpdate:modelValue":l[9]||(l[9]=e=>i.form.autoMoveFile=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),v("div",$,[v("div",O,[N(m,{size:"mini",type:"primary",onClick:l[10]||(l[10]=e=>o.editAndAddField())},{default:C((()=>[j])),_:1})]),N(T,{data:i.form.fields},{default:C((()=>[N(k,{align:"left",type:"index",label:"序列",width:"100"}),N(k,{align:"left",prop:"fieldName",label:"Field名"}),N(k,{align:"left",prop:"fieldDesc",label:"中文名"}),N(k,{align:"left",prop:"fieldJson",label:"FieldJson"}),N(k,{align:"left",prop:"fieldType",label:"Field数据类型",width:"130"}),N(k,{align:"left",prop:"dataType",label:"数据库字段类型",width:"130"}),N(k,{align:"left",prop:"dataTypeLong",label:"数据库字段长度",width:"130"}),N(k,{align:"left",prop:"columnName",label:"数据库字段",width:"130"}),N(k,{align:"left",prop:"comment",label:"数据库字段描述",width:"130"}),N(k,{align:"left",prop:"fieldSearchType",label:"搜索条件",width:"130"}),N(k,{align:"left",prop:"dictType",label:"字典",width:"130"}),N(k,{align:"left",label:"操作",width:"300"},{default:C((e=>[N(m,{size:"mini",type:"text",icon:"el-icon-edit",onClick:l=>o.editAndAddField(e.row)},{default:C((()=>[J])),_:2},1032,["onClick"]),N(m,{size:"mini",type:"text",disabled:0===e.$index,onClick:l=>o.moveUpField(e.$index)},{default:C((()=>[L])),_:2},1032,["disabled","onClick"]),N(m,{size:"mini",type:"text",disabled:e.$index+1===i.form.fields.length,onClick:l=>o.moveDownField(e.$index)},{default:C((()=>[q])),_:2},1032,["disabled","onClick"]),N(V,{visible:e.row.visible,placement:"top"},{reference:C((()=>[N(m,{size:"mini",type:"text",icon:"el-icon-delete"},{default:C((()=>[B])),_:1})])),default:C((()=>[P,v("div",E,[N(m,{size:"mini",type:"text",onClick:l=>e.row.visible=!1},{default:C((()=>[R])),_:2},1032,["onClick"]),N(m,{type:"primary",size:"mini",onClick:l=>o.deleteField(e.$index)},{default:C((()=>[X])),_:2},1032,["onClick"])])])),_:2},1032,["visible"])])),_:1})])),_:1},8,["data"]),N(oe,{type:"danger",style:{margin:"12px 0"}},{default:C((()=>[I])),_:1}),v("div",G,[N(m,{size:"mini",type:"primary",onClick:l[11]||(l[11]=e=>o.enterForm(!0))},{default:C((()=>[H])),_:1}),N(m,{size:"mini",type:"primary",onClick:l[12]||(l[12]=e=>o.enterForm(!1))},{default:C((()=>[K])),_:1})])]),N(se,{modelValue:i.dialogFlag,"onUpdate:modelValue":l[13]||(l[13]=e=>i.dialogFlag=e),title:"组件内容"},{footer:C((()=>[v("div",Q,[N(m,{size:"mini",onClick:o.closeDialog},{default:C((()=>[W])),_:1},8,["onClick"]),N(m,{size:"mini",type:"primary",onClick:o.enterDialog},{default:C((()=>[Y])),_:1},8,["onClick"])])])),default:C((()=>[i.dialogFlag?(h(),w(de,{key:0,ref:"fieldDialog","dialog-middle":i.dialogMiddle},null,8,["dialog-middle"])):x("",!0)])),_:1},8,["modelValue"]),N(se,{modelValue:i.previewFlag,"onUpdate:modelValue":l[15]||(l[15]=e=>i.previewFlag=e)},{title:C((()=>[v("div",Z,[ee,N(m,{size:"mini",type:"primary",onClick:o.selectText},{default:C((()=>[le])),_:1},8,["onClick"]),N(m,{size:"mini",type:"primary",onClick:o.copy},{default:C((()=>[ae])),_:1},8,["onClick"])])])),footer:C((()=>[v("div",te,[N(m,{size:"small",type:"primary",onClick:l[14]||(l[14]=e=>i.previewFlag=!1)},{default:C((()=>[ie])),_:1})])])),default:C((()=>[i.previewFlag?(h(),w(re,{key:0,ref:"preview","preview-code":i.preViewCode},null,8,["preview-code"])):x("",!0)])),_:1},8,["modelValue"])])}],["__scopeId","data-v-10f11ccd"]]);export{oe as default};
