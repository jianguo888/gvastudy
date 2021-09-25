var e=(e,l,a)=>new Promise(((d,t)=>{var i=e=>{try{u(a.next(e))}catch(l){t(l)}},o=e=>{try{u(a.throw(e))}catch(l){t(l)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(i,o);u((a=a.apply(e,l)).next())}));import{g as l}from"./dictionary.03156ab7.js";import{c as a,t as d}from"./stringFun.2a2664f6.js";import{_ as t,k as i}from"./index.bf0eadd2.js";import{w as o}from"./warningBar.f4c6efa3.js";import{r as u,o as m,f as n,g as p,w as r,F as s,A as f,s as b,x as c}from"./vendor.ab24dc3f.js";const y={name:"FieldDialog",components:{warningBar:o},props:{dialogMiddle:{type:Object,default:function(){return{}}}},data:()=>({middleDate:{},dbfdOptions:[],dictOptions:[],typeSearchOptions:[{label:"=",value:"="},{label:"<>",value:"<>"},{label:">",value:">"},{label:"<",value:"<"},{label:"LIKE",value:"LIKE"}],typeOptions:[{label:"字符串",value:"string"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"}],rules:{fieldName:[{required:!0,message:"请输入field英文名",trigger:"blur"}],fieldDesc:[{required:!0,message:"请输入field中文名",trigger:"blur"}],fieldJson:[{required:!0,message:"请输入field格式化json",trigger:"blur"}],columnName:[{required:!0,message:"请输入数据库字段",trigger:"blur"}],fieldType:[{required:!0,message:"请选择field数据类型",trigger:"blur"}]}}),created(){return e(this,null,(function*(){this.middleDate=this.dialogMiddle;const e=yield i({page:1,pageSize:999999});this.dictOptions=e.data.list}))},methods:{autoFill(){this.middleDate.fieldJson=a(this.middleDate.fieldName),this.middleDate.columnName=d(this.middleDate.fieldJson)},getDbfdOptions(){return e(this,null,(function*(){this.middleDate.dataType="",this.middleDate.dataTypeLong="",this.middleDate.fieldSearchType="",this.middleDate.dictType="",this.middleDate.fieldType&&(this.dbfdOptions=yield l(this.middleDate.fieldType))}))}}},D=b("自动填充");var h=t(y,[["render",function(e,l,a,d,t,i){const o=u("warning-bar"),b=u("el-input"),y=u("el-button"),h=u("el-form-item"),g=u("el-option"),v=u("el-select"),V=u("el-form");return m(),n("div",null,[p(o,{title:"id , created_at , updated_at , deleted_at 会自动生成请勿重复创建。搜索时如果条件为LIKE只支持字符串"}),p(V,{ref:"fieldDialogFrom",model:t.middleDate,"label-width":"120px","label-position":"left",rules:t.rules},{default:r((()=>[p(h,{label:"Field名称",prop:"fieldName"},{default:r((()=>[p(b,{modelValue:t.middleDate.fieldName,"onUpdate:modelValue":l[0]||(l[0]=e=>t.middleDate.fieldName=e),autocomplete:"off",style:{width:"80%"}},null,8,["modelValue"]),p(y,{size:"mini",style:{width:"18%","margin-left":"2%"},onClick:i.autoFill},{default:r((()=>[D])),_:1},8,["onClick"])])),_:1}),p(h,{label:"Field中文名",prop:"fieldDesc"},{default:r((()=>[p(b,{modelValue:t.middleDate.fieldDesc,"onUpdate:modelValue":l[1]||(l[1]=e=>t.middleDate.fieldDesc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),p(h,{label:"FieldJSON",prop:"fieldJson"},{default:r((()=>[p(b,{modelValue:t.middleDate.fieldJson,"onUpdate:modelValue":l[2]||(l[2]=e=>t.middleDate.fieldJson=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),p(h,{label:"数据库字段名",prop:"columnName"},{default:r((()=>[p(b,{modelValue:t.middleDate.columnName,"onUpdate:modelValue":l[3]||(l[3]=e=>t.middleDate.columnName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),p(h,{label:"数据库字段描述",prop:"comment"},{default:r((()=>[p(b,{modelValue:t.middleDate.comment,"onUpdate:modelValue":l[4]||(l[4]=e=>t.middleDate.comment=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),p(h,{label:"Field数据类型",prop:"fieldType"},{default:r((()=>[p(v,{modelValue:t.middleDate.fieldType,"onUpdate:modelValue":l[5]||(l[5]=e=>t.middleDate.fieldType=e),style:{width:"100%"},placeholder:"请选择field数据类型",clearable:"",onChange:i.getDbfdOptions},{default:r((()=>[(m(!0),n(s,null,f(t.typeOptions,(e=>(m(),c(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),p(h,{label:"数据库字段类型",prop:"dataType"},{default:r((()=>[p(v,{modelValue:t.middleDate.dataType,"onUpdate:modelValue":l[6]||(l[6]=e=>t.middleDate.dataType=e),style:{width:"100%"},disabled:!t.middleDate.fieldType,placeholder:"请选择数据库字段类型",clearable:""},{default:r((()=>[(m(!0),n(s,null,f(t.dbfdOptions,(e=>(m(),c(g,{key:e.label,label:e.label,value:e.label},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),p(h,{label:"数据库字段长度",prop:"dataTypeLong"},{default:r((()=>[p(b,{modelValue:t.middleDate.dataTypeLong,"onUpdate:modelValue":l[7]||(l[7]=e=>t.middleDate.dataTypeLong=e),placeholder:"自定义类型必须指定长度",disabled:!t.middleDate.dataType},null,8,["modelValue","disabled"])])),_:1}),p(h,{label:"Field查询条件",prop:"fieldSearchType"},{default:r((()=>[p(v,{modelValue:t.middleDate.fieldSearchType,"onUpdate:modelValue":l[8]||(l[8]=e=>t.middleDate.fieldSearchType=e),style:{width:"100%"},placeholder:"请选择Field查询条件",clearable:""},{default:r((()=>[(m(!0),n(s,null,f(t.typeSearchOptions,(e=>(m(),c(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(h,{label:"关联字典",prop:"dictType"},{default:r((()=>[p(v,{modelValue:t.middleDate.dictType,"onUpdate:modelValue":l[9]||(l[9]=e=>t.middleDate.dictType=e),style:{width:"100%"},disabled:"int"!==t.middleDate.fieldType,placeholder:"请选择字典",clearable:""},{default:r((()=>[(m(!0),n(s,null,f(t.dictOptions,(e=>(m(),c(g,{key:e.type,label:`${e.type}(${e.name})`,value:e.type},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1},8,["model","rules"])])}]]);export{h as default};
