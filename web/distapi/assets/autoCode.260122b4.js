import{s as t}from"./index.bf0eadd2.js";const o=o=>t({url:"/autoCode/preview",method:"post",data:o}),a=o=>t({url:"/autoCode/createTemp",method:"post",data:o,responseType:"blob"}),e=()=>t({url:"/autoCode/getDB",method:"get"}),d=o=>t({url:"/autoCode/getTables",method:"get",params:o}),s=o=>t({url:"/autoCode/getColumn",method:"get",params:o}),r=o=>t({url:"/autoCode/getSysHistory",method:"post",data:o}),u=o=>t({url:"/autoCode/rollback",method:"post",data:o}),l=o=>t({url:"/autoCode/getMeta",method:"post",data:o}),m=o=>t({url:"/autoCode/delSysHistory",method:"post",data:o});export{d as a,s as b,a as c,l as d,r as e,m as f,e as g,o as p,u as r};
