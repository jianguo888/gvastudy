!function(){function t(t,e,n,r,i,a,o){try{var s=t[a](o),f=s.value}catch(u){return void n(u)}s.done?e(f):Promise.resolve(f).then(r,i)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(i,a){var o=e.apply(n,r);function s(e){t(o,i,a,s,f,"next",e)}function f(e){t(o,i,a,s,f,"throw",e)}s(void 0)}))}}var n=document.createElement("style");n.innerHTML="h3[data-v-18248564]{margin:40px 0 0}ul[data-v-18248564]{list-style-type:none;padding:0}li[data-v-18248564]{display:inline-block;margin:0 10px}a[data-v-18248564]{color:#42b983}#fromCont[data-v-18248564]{display:inline-block}.fileUpload[data-v-18248564]{padding:3px 10px;font-size:12px;height:20px;line-height:20px;position:relative;cursor:pointer;color:#000;border:1px solid #c1c1c1;border-radius:4px;overflow:hidden;display:inline-block}.fileUpload input[data-v-18248564]{position:absolute;font-size:100px;right:0;top:0;opacity:0;cursor:pointer}.fileName[data-v-18248564]{display:inline-block;vertical-align:top;margin:6px 15px 0}.uploadBtn[data-v-18248564]{position:relative;top:-10px;margin-left:15px}.tips[data-v-18248564]{margin-top:30px;font-size:14px;font-weight:400;color:#606266}.el-divider[data-v-18248564]{margin:0 0 30px}.list[data-v-18248564]{margin-top:15px}.list-item[data-v-18248564]{display:block;margin-right:10px;color:#606266;line-height:25px;margin-bottom:5px;width:40%}.list-item .percentage[data-v-18248564]{float:right}.list-enter-active[data-v-18248564],.list-leave-active[data-v-18248564]{transition:all 1s}.list-enter[data-v-18248564],.list-leave-to[data-v-18248564]{opacity:0;transform:translateY(-30px)}\n",document.head.appendChild(n),System.register(["./vendor-legacy.89c3086c.js","./index-legacy.2b2c1438.js"],(function(t){"use strict";var n,r,i,a,o,s,f,u,l,p,h,c,d,g,m,y,v;return{setters:[function(t){n=t.b,r=t.p,i=t.j,a=t.r,o=t.o,s=t.f,f=t.k,u=t.g,l=t.w,p=t.I,h=t.M,c=t.u,d=t.l,g=t.T,m=t.s},function(t){y=t.s,v=t._}],execute:function(){var b={exports:{}};b.exports=function(t){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(t,e){var n=t[0],r=t[1],i=t[2],a=t[3];r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+e[1]-389564586|0)<<12|a>>>20)+n|0)&n|~a&r)+e[2]+606105819|0)<<17|i>>>15)+a|0)&a|~i&n)+e[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+e[5]+1200080426|0)<<12|a>>>20)+n|0)&n|~a&r)+e[6]-1473231341|0)<<17|i>>>15)+a|0)&a|~i&n)+e[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+e[9]-1958414417|0)<<12|a>>>20)+n|0)&n|~a&r)+e[10]-42063|0)<<17|i>>>15)+a|0)&a|~i&n)+e[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+e[13]-40341101|0)<<12|a>>>20)+n|0)&n|~a&r)+e[14]-1502002290|0)<<17|i>>>15)+a|0)&a|~i&n)+e[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+e[6]-1069501632|0)<<9|a>>>23)+n|0)&r|n&~r)+e[11]+643717713|0)<<14|i>>>18)+a|0)&n|a&~n)+e[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+e[10]+38016083|0)<<9|a>>>23)+n|0)&r|n&~r)+e[15]-660478335|0)<<14|i>>>18)+a|0)&n|a&~n)+e[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+e[14]-1019803690|0)<<9|a>>>23)+n|0)&r|n&~r)+e[3]-187363961|0)<<14|i>>>18)+a|0)&n|a&~n)+e[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+e[2]-51403784|0)<<9|a>>>23)+n|0)&r|n&~r)+e[7]+1735328473|0)<<14|i>>>18)+a|0)&n|a&~n)+e[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+e[8]-2022574463|0)<<11|a>>>21)+n|0)^n^r)+e[11]+1839030562|0)<<16|i>>>16)+a|0)^a^n)+e[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+e[4]+1272893353|0)<<11|a>>>21)+n|0)^n^r)+e[7]-155497632|0)<<16|i>>>16)+a|0)^a^n)+e[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+e[0]-358537222|0)<<11|a>>>21)+n|0)^n^r)+e[3]-722521979|0)<<16|i>>>16)+a|0)^a^n)+e[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+e[12]-421815835|0)<<11|a>>>21)+n|0)^n^r)+e[15]+530742520|0)<<16|i>>>16)+a|0)^a^n)+e[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+e[7]+1126891415|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[14]-1416354905|0)<<15|i>>>17)+a|0)|~n))+e[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+e[3]-1894986606|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[10]-1051523|0)<<15|i>>>17)+a|0)|~n))+e[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+e[15]-30611744|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[6]-1560198380|0)<<15|i>>>17)+a|0)|~n))+e[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+e[11]-1120210379|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[2]+718787259|0)<<15|i>>>17)+a|0)|~n))+e[9]-343485551|0)<<21|r>>>11)+i|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=i+t[2]|0,t[3]=a+t[3]|0}function r(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function i(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function a(t){var e,i,a,o,s,f,u=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)n(l,r(t.substring(e-64,e)));for(i=(t=t.substring(e-64)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<i;e+=1)a[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(n(l,a),e=0;e<16;e+=1)a[e]=0;return o=(o=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),f=parseInt(o[1],16)||0,a[14]=s,a[15]=f,n(l,a),l}function o(t){var e,r,a,o,s,f,u=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)n(l,i(t.subarray(e-64,e)));for(r=(t=e-64<u?t.subarray(e-64):new Uint8Array(0)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<r;e+=1)a[e>>2]|=t[e]<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(n(l,a),e=0;e<16;e+=1)a[e]=0;return o=(o=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),f=parseInt(o[1],16)||0,a[14]=s,a[15]=f,n(l,a),l}function s(t){var n,r="";for(n=0;n<4;n+=1)r+=e[t>>8*n+4&15]+e[t>>8*n&15];return r}function f(t){var e;for(e=0;e<t.length;e+=1)t[e]=s(t[e]);return t.join("")}function u(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function l(t,e){var n,r=t.length,i=new ArrayBuffer(r),a=new Uint8Array(i);for(n=0;n<r;n+=1)a[n]=t.charCodeAt(n);return e?a:i}function p(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function h(t,e,n){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t)),r.set(new Uint8Array(e),t.byteLength),n?r:r.buffer}function c(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function d(){this.reset()}return f(a("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(n,r){var i,a,o,s,f=this.byteLength,u=e(n,f),l=f;return r!==t&&(l=e(r,f)),u>l?new ArrayBuffer(0):(i=l-u,a=new ArrayBuffer(i),o=new Uint8Array(a),s=new Uint8Array(this,u,i),o.set(s),a)}}(),d.prototype.append=function(t){return this.appendBinary(u(t)),this},d.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,i=this._buff.length;for(e=64;e<=i;e+=64)n(this._hash,r(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},d.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(a,i),n=f(this._hash),t&&(n=c(n)),this.reset(),n},d.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},d.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},d.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},d.prototype._finish=function(t,e){var r,i,a,o=e;if(t[o>>2]|=128<<(o%4<<3),o>55)for(n(this._hash,t),o=0;o<16;o+=1)t[o]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),a=parseInt(r[1],16)||0,t[14]=i,t[15]=a,n(this._hash,t)},d.hash=function(t,e){return d.hashBinary(u(t),e)},d.hashBinary=function(t,e){var n=f(a(t));return e?c(n):n},d.ArrayBuffer=function(){this.reset()},d.ArrayBuffer.prototype.append=function(t){var e,r=h(this._buff.buffer,t,!0),a=r.length;for(this._length+=t.byteLength,e=64;e<=a;e+=64)n(this._hash,i(r.subarray(e-64,e)));return this._buff=e-64<a?new Uint8Array(r.buffer.slice(e-64)):new Uint8Array(0),this},d.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r[e]<<(e%4<<3);return this._finish(a,i),n=f(this._hash),t&&(n=c(n)),this.reset(),n},d.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.ArrayBuffer.prototype.getState=function(){var t=d.prototype.getState.call(this);return t.buff=p(t.buff),t},d.ArrayBuffer.prototype.setState=function(t){return t.buff=l(t.buff,!0),d.prototype.setState.call(this,t)},d.ArrayBuffer.prototype.destroy=d.prototype.destroy,d.ArrayBuffer.prototype._finish=d.prototype._finish,d.ArrayBuffer.hash=function(t,e){var n=f(o(new Uint8Array(t)));return e?c(n):n},d}();var w=b.exports,_=function(t){return y({url:"/fileUploadAndDownload/findFile",method:"get",params:t})},A=function(t){return y({url:"/fileUploadAndDownload/breakpointContinueFinish",method:"post",params:t})},x=function(t,e){return y({url:"/fileUploadAndDownload/removeChunk",method:"post",data:t,params:e})},k={name:"BreakPoint",data:function(){return{file:null,fileMd5:"",formDataList:[],waitUpLoad:[],waitNum:0,limitFileSize:!1,percentage:0,percentageFlage:!0,customColor:"#409eff"}},methods:{choseFile:function(t){var n=this;return e(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=new FileReader,a=t.target.files[0],5242880,n.file=a,n.percentage=0,a.size<5242880?(i.readAsArrayBuffer(a),i.onload=function(){var t=e(regeneratorRuntime.mark((function t(e){var r,i,o,s,f,u,l,p,h,c,d,g;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=e.target.result,(i=new w.ArrayBuffer).append(r),n.fileMd5=i.end(),o=1048576,s=0,f=0,u=0,n.formDataList=[];f<a.size;)s=u*o,f=(u+1)*o,l=n.file.slice(s,f),(p=new window.FormData).append("fileMd5",n.fileMd5),p.append("file",l),p.append("chunkNumber",u),p.append("fileName",n.file.name),n.formDataList.push({key:u,formData:p}),u++;return h={fileName:n.file.name,fileMd5:n.fileMd5,chunkTotal:n.formDataList.length},t.next=13,_(h);case 13:c=t.sent,d=c.data.file.ExaFileChunk,g=c.data.file.IsFinish,n.waitUpLoad=g?[]:n.formDataList.filter((function(t){return!(d&&d.some((function(e){return e.FileChunkNumber===t.key})))})),n.waitNum=n.waitUpLoad.length;case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):(n.limitFileSize=!0,n.$message("请上传小于5M文件"));case 6:case"end":return r.stop()}}),r)})))()},getFile:function(){null!==this.file?(this.percentage=Math.floor((this.formDataList.length-this.waitNum)/this.formDataList.length*100),100===this.percentage&&(this.percentageFlage=!1),this.sliceFile()):this.$message("请先上传文件")},sliceFile:function(){var t=this;this.waitUpLoad&&this.waitUpLoad.forEach((function(e){e.formData.append("chunkTotal",t.formDataList.length);var n=new FileReader,r=e.formData.get("file");n.readAsArrayBuffer(r),n.onload=function(n){var r=new w.ArrayBuffer;r.append(n.target.result),e.formData.append("chunkMd5",r.end()),t.upLoadFileSlice(e)}}))},upLoadFileSlice:function(t){var r=this;return e(regeneratorRuntime.mark((function e(){var i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.post("/api/fileUploadAndDownload/breakpointContinue",t.formData);case 2:if(r.waitNum--,0!==r.waitNum){e.next=12;break}return i={fileName:r.file.name,fileMd5:r.fileMd5},e.next=7,A(i);case 7:if(!(a=e.sent).success){e.next=12;break}return o={fileName:r.file.name,fileMd5:r.fileMd5,filePath:a.data.filePath},e.next=12,x(o);case 12:case"end":return e.stop()}}),e)})))()},inputChange:function(){this.$refs.Input.dispatchEvent(new MouseEvent("click"))}}};r("data-v-18248564");var C={class:"break-point"},B={class:"gva-table-box"},F=m("大文件上传"),U={id:"fromCont",method:"post"},L=m(" 选择文件 "),D=m("上传文件"),M=f("div",{class:"el-upload__tip"},"请上传不超过5MB的文件",-1),S={class:"list"},I={key:0,class:"list-item"},N=f("i",{class:"el-icon-document"},null,-1),z={class:"percentage"},R=f("div",{class:"tips"},"此版本为先行体验功能测试版，样式美化和性能优化正在进行中，上传切片文件和合成的完整文件分别再QMPlusserver目录的breakpointDir文件夹和fileDir文件夹",-1);i();t("default",v(k,[["render",function(t,e,n,r,i,m){var y=a("el-divider"),v=a("el-button"),b=a("el-progress");return o(),s("div",C,[f("div",B,[u(y,{"content-position":"left"},{default:l((function(){return[F]})),_:1}),f("form",U,[f("div",{class:"fileUpload",onClick:e[1]||(e[1]=function(){return m.inputChange&&m.inputChange.apply(m,arguments)})},[L,p(f("input",{id:"file",ref:"Input",multiple:"multiple",type:"file",onChange:e[0]||(e[0]=function(){return m.choseFile&&m.choseFile.apply(m,arguments)})},null,544),[[h,!1]])])]),u(v,{disabled:i.limitFileSize,type:"primary",size:"mini",class:"uploadBtn",onClick:m.getFile},{default:l((function(){return[D]})),_:1},8,["disabled","onClick"]),M,f("div",S,[u(g,{name:"list",tag:"p"},{default:l((function(){return[i.file?(o(),s("div",I,[N,f("span",null,c(i.file.name),1),f("span",z,c(i.percentage)+"%",1),u(b,{"show-text":!1,"text-inside":!1,"stroke-width":2,percentage:i.percentage},null,8,["percentage"])])):d("",!0)]})),_:1})]),R])])}],["__scopeId","data-v-18248564"]]))}}}))}();