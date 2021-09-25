!function(){function e(e,t,n,r,a,i,l){try{var o=e[i](l),u=o.value}catch(d){return void n(d)}o.done?t(u):Promise.resolve(u).then(r,a)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(a,i){var l=t.apply(n,r);function o(t){e(l,a,i,o,u,"next",t)}function u(t){e(l,a,i,o,u,"throw",t)}o(void 0)}))}}var n=document.createElement("style");n.innerHTML=".previewCodeTool[data-v-10f11ccd]{display:flex;align-items:center;padding:5px 0}.button-box[data-v-10f11ccd]{padding:10px 20px}.button-box .el-button[data-v-10f11ccd]{margin-right:20px;float:right}\n",document.head.appendChild(n),System.register(["./fieldDialog-legacy.85b50440.js","./previewCodeDialg-legacy.36834f17.js","./stringFun-legacy.533dced2.js","./autoCode-legacy.38c9941d.js","./dictionary-legacy.f4c16c6a.js","./index-legacy.2b2c1438.js","./vendor-legacy.89c3086c.js","./warningBar-legacy.8bc98fe0.js"],(function(e){"use strict";var n,r,a,i,l,o,u,d,c,f,s,m,p,g,b,v,h,y,x,N,w,k,C,F,_,V;return{setters:[function(e){n=e.default},function(e){r=e.default},function(e){a=e.a,i=e.t,l=e.b},function(e){o=e.p,u=e.c,d=e.g,c=e.a,f=e.b,s=e.d},function(e){m=e.g},function(e){p=e._},function(e){g=e.p,b=e.j,v=e.r,h=e.o,y=e.f,x=e.k,N=e.g,w=e.w,k=e.F,C=e.A,F=e.x,_=e.l,V=e.s},function(){}],execute:function(){var T={fieldName:"",fieldDesc:"",fieldType:"",dataType:"",fieldJson:"",columnName:"",dataTypeLong:"",comment:"",fieldSearchType:"",dictType:""},D={name:"AutoCode",components:{FieldDialog:n,PreviewCodeDialog:r},data:function(){return{activeNames:[""],preViewCode:{},dbform:{dbName:"",tableName:""},dbOptions:[],tableOptions:[],addFlag:"",fdMap:{},form:{structName:"",tableName:"",packageName:"",abbreviation:"",description:"",autoCreateApiToSql:!1,autoMoveFile:!1,fields:[]},rules:{structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],description:[{required:!0,message:"请输入结构体描述",trigger:"blur"}],packageName:[{required:!0,message:"文件名称：sysXxxxXxxx",trigger:"blur"}]},dialogMiddle:{},bk:{},dialogFlag:!1,previewFlag:!1}},created:function(){this.getDb(),this.setFdMap();var e=this.$route.params.id;e&&this.getAutoCodeJson(e)},methods:{selectText:function(){this.$refs.preview.selectText()},copy:function(){this.$refs.preview.copy()},editAndAddField:function(e){this.dialogFlag=!0,e?(this.addFlag="edit",this.bk=JSON.parse(JSON.stringify(e)),this.dialogMiddle=e):(this.addFlag="add",this.dialogMiddle=JSON.parse(JSON.stringify(T)))},moveUpField:function(e){if(0!==e){var t=this.form.fields[e-1];this.form.fields.splice(e-1,1),this.form.fields.splice(e,0,t)}},moveDownField:function(e){if(e!==this.form.fields.length-1){var t=this.form.fields[e+1];this.form.fields.splice(e+1,1),this.form.fields.splice(e,0,t)}},enterDialog:function(){var e=this;this.$refs.fieldDialog.$refs.fieldDialogFrom.validate((function(t){if(!t)return!1;e.dialogMiddle.fieldName=a(e.dialogMiddle.fieldName),"add"===e.addFlag&&e.form.fields.push(e.dialogMiddle),e.dialogFlag=!1}))},closeDialog:function(){"edit"===this.addFlag&&(this.dialogMiddle=this.bk),this.dialogFlag=!1},deleteField:function(e){this.form.fields.splice(e,1)},enterForm:function(e){var n=this;return t(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n.form.fields.length<=0)){r.next=3;break}return n.$message({type:"error",message:"请填写至少一个field"}),r.abrupt("return",!1);case 3:if(!n.form.fields.some((function(e){return e.fieldName===n.form.structName}))){r.next=6;break}return n.$message({type:"error",message:"存在与结构体同名的字段"}),r.abrupt("return",!1);case 6:n.$refs.autoCodeForm.validate(function(){var r=t(regeneratorRuntime.mark((function t(r){var l,d,c,f,s,m,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=31;break}if(n.form.structName=a(n.form.structName),n.form.tableName&&(n.form.tableName=n.form.tableName.replace(" ","")),n.form.structName!==n.form.abbreviation){t.next=6;break}return n.$message({type:"error",message:"structName和struct简称不能相同"}),t.abrupt("return",!1);case 6:if(n.form.humpPackageName=i(n.form.packageName),!e){t.next=15;break}return t.next=10,o(n.form);case 10:l=t.sent,n.preViewCode=l.data.autoCode,n.previewFlag=!0,t.next=29;break;case 15:return t.next=17,u(n.form);case 17:if(c=t.sent,"false"!==(null===(d=c.headers)||void 0===d?void 0:d.success)){t.next=22;break}return t.abrupt("return");case 22:if(!n.form.autoMoveFile){t.next=25;break}return n.$message({type:"success",message:"自动化代码创建成功，自动移动成功"}),t.abrupt("return");case 25:n.$message({type:"success",message:"自动化代码创建成功，正在下载"});case 26:f=new Blob([c]),s="ginvueadmin.zip","download"in document.createElement("a")?(m=window.URL.createObjectURL(f),(p=document.createElement("a")).style.display="none",p.href=m,p.setAttribute("download",s),document.body.appendChild(p),p.click(),document.body.removeChild(p),window.URL.revokeObjectURL(m)):window.navigator.msSaveBlob(f,s);case 29:t.next=32;break;case 31:return t.abrupt("return",!1);case 32:case"end":return t.stop()}}),t)})));return function(e){return r.apply(this,arguments)}}());case 7:case"end":return r.stop()}}),r)})))()},getDb:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:0===(n=t.sent).code&&(e.dbOptions=n.data.dbs);case 4:case"end":return t.stop()}}),t)})))()},getTable:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c({dbName:e.dbform.dbName});case 2:0===(n=t.sent).code&&(e.tableOptions=n.data.tables),e.dbform.tableName="";case 5:case"end":return t.stop()}}),t)})))()},getColumn:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["id","created_at","updated_at","deleted_at"],t.next=3,f(e.dbform);case 3:0===(r=t.sent).code&&(i=l(e.dbform.tableName),e.form.structName=a(i),e.form.tableName=e.dbform.tableName,e.form.packageName=i,e.form.abbreviation=i,e.form.description=i+"表",e.form.autoCreateApiToSql=!0,e.form.fields=[],r.data.columns&&r.data.columns.forEach((function(t){if(!n.some((function(e){return e===t.columnName}))){var r=l(t.columnName);e.form.fields.push({fieldName:a(r),fieldDesc:t.columnComment||r+"字段",fieldType:e.fdMap[t.dataType],dataType:t.dataType,fieldJson:r,dataTypeLong:t.dataTypeLong,columnName:t.columnName,comment:t.columnComment,fieldSearchType:"",dictType:""})}})));case 5:case"end":return t.stop()}}),t)})))()},setFdMap:function(){var e=this;return t(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:["string","int","bool","float64","time.Time"].forEach(function(){var n=t(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(n);case 2:(r=t.sent)&&r.forEach((function(t){e.fdMap[t.label]=n}));case 4:case"end":return t.stop()}}),t)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()},getAutoCodeJson:function(e){var n=this;return t(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s({id:Number(e)});case 2:0===(r=t.sent).code&&(n.form=JSON.parse(r.data.meta));case 4:case"end":return t.stop()}}),t)})))()}}};g("data-v-10f11ccd");var R={class:"gva-search-box"},M=x("div",{style:{fontSize:"16px",paddingLeft:"20px"}},[V(" 点这里从现有数据库创建代码 "),x("i",{class:"header-icon el-icon-thumb"})],-1),S=V("使用此表创建"),U={class:"gva-search-box"},z=x("div",null," 自动创建API ",-1),A=x("div",null," 自动移动文件 ",-1),$={class:"gva-table-box"},O={class:"gva-btn-list"},j=V("新增Field"),J=V("编辑"),L=V("上移"),q=V("下移"),P=x("p",null,"确定删除吗？",-1),E={style:{"text-align":"right","margin-top":"8px"}},X=V("取消"),B=V("确定"),I=V("删除"),H=V("id , created_at , updated_at , deleted_at 会自动生成请勿重复创建"),G={class:"gva-btn-list justify-content-flex-end"},K=V("预览代码"),Q=V("生成代码"),W={class:"dialog-footer"},Y=V("取 消"),Z=V("确 定"),ee={class:"previewCodeTool"},te=x("p",null,"操作栏：",-1),ne=V("全选"),re=V("复制"),ae={class:"dialog-footer",style:{"padding-top":"14px","padding-right":"14px"}},ie=V("确 定");b();e("default",p(D,[["render",function(e,t,n,r,a,i){var l=v("el-option"),o=v("el-select"),u=v("el-form-item"),d=v("el-button"),c=v("el-form"),f=v("el-collapse-item"),s=v("el-collapse"),m=v("el-input"),p=v("el-tooltip"),g=v("el-checkbox"),b=v("el-table-column"),V=v("el-popover"),T=v("el-table"),D=v("el-tag"),le=v("FieldDialog"),oe=v("el-dialog"),ue=v("PreviewCodeDialog");return h(),y("div",null,[x("div",R,[N(s,{modelValue:a.activeNames,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.activeNames=e}),style:{"margin-bottom":"12px"}},{default:w((function(){return[N(f,{name:"1"},{title:w((function(){return[M]})),default:w((function(){return[N(c,{ref:"getTableForm",style:{"margin-top":"24px"},inline:!0,model:a.dbform,"label-width":"120px"},{default:w((function(){return[N(u,{label:"数据库名",prop:"structName"},{default:w((function(){return[N(o,{modelValue:a.dbform.dbName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.dbform.dbName=e}),filterable:"",placeholder:"请选择数据库",onChange:i.getTable},{default:w((function(){return[(h(!0),y(k,null,C(a.dbOptions,(function(e){return h(),F(l,{key:e.database,label:e.database,value:e.database},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]})),_:1}),N(u,{label:"表名",prop:"structName"},{default:w((function(){return[N(o,{modelValue:a.dbform.tableName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.dbform.tableName=e}),disabled:!a.dbform.dbName,filterable:"",placeholder:"请选择表"},{default:w((function(){return[(h(!0),y(k,null,C(a.tableOptions,(function(e){return h(),F(l,{key:e.tableName,label:e.tableName,value:e.tableName},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1}),N(u,null,{default:w((function(){return[N(d,{size:"mini",type:"primary",onClick:i.getColumn},{default:w((function(){return[S]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]})),_:1})]})),_:1},8,["modelValue"])]),x("div",U,[N(c,{ref:"autoCodeForm",rules:a.rules,model:a.form,"label-width":"120px",inline:!0},{default:w((function(){return[N(u,{label:"Struct名称",prop:"structName"},{default:w((function(){return[N(m,{modelValue:a.form.structName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.structName=e}),placeholder:"首字母自动转换大写"},null,8,["modelValue"])]})),_:1}),N(u,{label:"TableName",prop:"tableName"},{default:w((function(){return[N(m,{modelValue:a.form.tableName,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.form.tableName=e}),placeholder:"指定表名（非必填）"},null,8,["modelValue"])]})),_:1}),N(u,{label:"Struct简称",prop:"abbreviation"},{default:w((function(){return[N(m,{modelValue:a.form.abbreviation,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.form.abbreviation=e}),placeholder:"简称会作为入参对象名和路由group"},null,8,["modelValue"])]})),_:1}),N(u,{label:"Struct中文名称",prop:"description"},{default:w((function(){return[N(m,{modelValue:a.form.description,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.form.description=e}),placeholder:"中文描述作为自动api描述"},null,8,["modelValue"])]})),_:1}),N(u,{label:"文件名称",prop:"packageName"},{default:w((function(){return[N(m,{modelValue:a.form.packageName,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.form.packageName=e}),placeholder:"生成文件的默认名称(建议为驼峰格式,首字母小写,如sysXxxXxxx)"},null,8,["modelValue"])]})),_:1}),N(u,null,{label:w((function(){return[N(p,{content:"注：把自动生成的API注册进数据库",placement:"bottom",effect:"light"},{default:w((function(){return[z]})),_:1})]})),default:w((function(){return[N(g,{modelValue:a.form.autoCreateApiToSql,"onUpdate:modelValue":t[8]||(t[8]=function(e){return a.form.autoCreateApiToSql=e})},null,8,["modelValue"])]})),_:1}),N(u,null,{label:w((function(){return[N(p,{content:"注：自动迁移生成的文件到ymal配置的对应位置",placement:"bottom",effect:"light"},{default:w((function(){return[A]})),_:1})]})),default:w((function(){return[N(g,{modelValue:a.form.autoMoveFile,"onUpdate:modelValue":t[9]||(t[9]=function(e){return a.form.autoMoveFile=e})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["rules","model"])]),x("div",$,[x("div",O,[N(d,{size:"mini",type:"primary",onClick:t[10]||(t[10]=function(e){return i.editAndAddField()})},{default:w((function(){return[j]})),_:1})]),N(T,{data:a.form.fields},{default:w((function(){return[N(b,{align:"left",type:"index",label:"序列",width:"100"}),N(b,{align:"left",prop:"fieldName",label:"Field名"}),N(b,{align:"left",prop:"fieldDesc",label:"中文名"}),N(b,{align:"left",prop:"fieldJson",label:"FieldJson"}),N(b,{align:"left",prop:"fieldType",label:"Field数据类型",width:"130"}),N(b,{align:"left",prop:"dataType",label:"数据库字段类型",width:"130"}),N(b,{align:"left",prop:"dataTypeLong",label:"数据库字段长度",width:"130"}),N(b,{align:"left",prop:"columnName",label:"数据库字段",width:"130"}),N(b,{align:"left",prop:"comment",label:"数据库字段描述",width:"130"}),N(b,{align:"left",prop:"fieldSearchType",label:"搜索条件",width:"130"}),N(b,{align:"left",prop:"dictType",label:"字典",width:"130"}),N(b,{align:"left",label:"操作",width:"300"},{default:w((function(e){return[N(d,{size:"mini",type:"text",icon:"el-icon-edit",onClick:function(t){return i.editAndAddField(e.row)}},{default:w((function(){return[J]})),_:2},1032,["onClick"]),N(d,{size:"mini",type:"text",disabled:0===e.$index,onClick:function(t){return i.moveUpField(e.$index)}},{default:w((function(){return[L]})),_:2},1032,["disabled","onClick"]),N(d,{size:"mini",type:"text",disabled:e.$index+1===a.form.fields.length,onClick:function(t){return i.moveDownField(e.$index)}},{default:w((function(){return[q]})),_:2},1032,["disabled","onClick"]),N(V,{visible:e.row.visible,placement:"top"},{reference:w((function(){return[N(d,{size:"mini",type:"text",icon:"el-icon-delete"},{default:w((function(){return[I]})),_:1})]})),default:w((function(){return[P,x("div",E,[N(d,{size:"mini",type:"text",onClick:function(t){return e.row.visible=!1}},{default:w((function(){return[X]})),_:2},1032,["onClick"]),N(d,{type:"primary",size:"mini",onClick:function(t){return i.deleteField(e.$index)}},{default:w((function(){return[B]})),_:2},1032,["onClick"])])]})),_:2},1032,["visible"])]})),_:1})]})),_:1},8,["data"]),N(D,{type:"danger",style:{margin:"12px 0"}},{default:w((function(){return[H]})),_:1}),x("div",G,[N(d,{size:"mini",type:"primary",onClick:t[11]||(t[11]=function(e){return i.enterForm(!0)})},{default:w((function(){return[K]})),_:1}),N(d,{size:"mini",type:"primary",onClick:t[12]||(t[12]=function(e){return i.enterForm(!1)})},{default:w((function(){return[Q]})),_:1})])]),N(oe,{modelValue:a.dialogFlag,"onUpdate:modelValue":t[13]||(t[13]=function(e){return a.dialogFlag=e}),title:"组件内容"},{footer:w((function(){return[x("div",W,[N(d,{size:"mini",onClick:i.closeDialog},{default:w((function(){return[Y]})),_:1},8,["onClick"]),N(d,{size:"mini",type:"primary",onClick:i.enterDialog},{default:w((function(){return[Z]})),_:1},8,["onClick"])])]})),default:w((function(){return[a.dialogFlag?(h(),F(le,{key:0,ref:"fieldDialog","dialog-middle":a.dialogMiddle},null,8,["dialog-middle"])):_("",!0)]})),_:1},8,["modelValue"]),N(oe,{modelValue:a.previewFlag,"onUpdate:modelValue":t[15]||(t[15]=function(e){return a.previewFlag=e})},{title:w((function(){return[x("div",ee,[te,N(d,{size:"mini",type:"primary",onClick:i.selectText},{default:w((function(){return[ne]})),_:1},8,["onClick"]),N(d,{size:"mini",type:"primary",onClick:i.copy},{default:w((function(){return[re]})),_:1},8,["onClick"])])]})),footer:w((function(){return[x("div",ae,[N(d,{size:"small",type:"primary",onClick:t[14]||(t[14]=function(e){return a.previewFlag=!1})},{default:w((function(){return[ie]})),_:1})])]})),default:w((function(){return[a.previewFlag?(h(),F(ue,{key:0,ref:"preview","preview-code":a.preViewCode},null,8,["preview-code"])):_("",!0)]})),_:1},8,["modelValue"])])}],["__scopeId","data-v-10f11ccd"]]))}}}))}();