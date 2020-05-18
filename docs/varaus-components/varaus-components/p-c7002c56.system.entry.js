var __awaiter=this&&this.__awaiter||function(t,r,e,n){function i(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,a){function o(t){try{s(n.next(t))}catch(r){a(r)}}function l(t){try{s(n["throw"](t))}catch(r){a(r)}}function s(t){t.done?e(t.value):i(t.value).then(o,l)}s((n=n.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(r){return s([t,r])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(e)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1];a=o;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(o);break}if(a[2])e.ops.pop();e.trys.pop();continue}o=r.call(t,e)}catch(l){o=[6,l];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var n=Array(t),i=0,r=0;r<e;r++)for(var a=arguments[r],o=0,l=a.length;o<l;o++,i++)n[i]=a[o];return n};System.register(["./p-623136ef.system.js","./p-3f376f5b.system.js"],(function(t){"use strict";var r,e,n,i;return{setters:[function(t){r=t.r;e=t.c;n=t.h},function(t){i=t.g}],execute:function(){var a={required:function(t){return!t?"requiredField":null},email:function(t){return/\S+@\S+\.\S+/.test(t)?null:"invalidEmail"}};function o(t){var r=[];for(var e=1;e<arguments.length;e++){r[e-1]=arguments[e]}for(var n=0,i=r;n<i.length;n++){var a=i[n];var o=a(t);if(o){return o}}return null}var l=":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}form{font-family:var(--varaus-font-family)}.form-head h3{font-size:var(--varaus-text-xl)}.form-head svg{color:var(--varaus-primary-color);height:100px;width:100px}.form-head{text-align:center;margin-top:.5rem;margin-bottom:1.2rem}.form-foot{text-align:center;padding-top:.8rem}.login-action-row{text-align:center;padding-top:.8rem}varaus-button{display:inline-block}.some-button{position:relative;border:1px solid var(--varaus-light-grey);background-color:white;border-radius:50%;height:4rem;width:4rem;margin-left:.5rem;margin-right:.5rem}.some-button svg{height:50%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.fb{background-color:#4267b2}.fb:hover{background-color:#2955ad}.google:hover{background-color:#f8f8f8}hr{color:var(--varaus-light-grey);-webkit-margin-before:1.5rem;margin-block-start:1.5rem;-webkit-margin-after:1.5rem;margin-block-end:1.5rem}p{-webkit-margin-before:.5rem;margin-block-start:.5rem;-webkit-margin-after:.5rem;margin-block-end:.5rem;font-size:var(--varaus-text-sm);line-height:1.1rem}";var s=t("varaus_sign_in_form",function(){function t(t){r(this,t);this.fieldValidations={email:[a.required,a.email],password:[a.required]};this.signedin=e(this,"signedin",7)}t.prototype.validateField=function(t){this[t+"Error"]=o.apply(void 0,__spreadArrays([this[t]],this.fieldValidations[t]));return!this[t+"Error"]};t.prototype.validateAll=function(){var t=this;var r=Object.keys(this.fieldValidations).map((function(r){return t.validateField(r)}));return r.every((function(t){return t}))};t.prototype.submit=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){t.preventDefault();t.stopPropagation();if(!this.validateAll()){return[2]}this.signedin.emit({username:this.email,password:this.password});return[2]}))}))};t.prototype.federatedAction=function(t,r){t.preventDefault();t.stopPropagation();this.signedin.emit({federationProvider:r})};t.prototype.handleChange=function(t){this[t.detail.name]=t.detail.value;this.validateField(t.detail.name)};t.prototype.render=function(){var t=this;return n("form",{onSubmit:function(r){return t.submit(r)},onKeyUp:function(r){return r.key==="Enter"&&t.submit(r)}},n("div",{class:"form-head"},i("calendar"),n("h3",null,"varaus.net")),n("varaus-form-error",{error:this.error}),n("varaus-form-success",{success:this.success}),n("varaus-form-field",{name:"email",validationError:this.emailError,icon:"at",label:"Sähköpostiosoite *",placeholder:"email@esimerkki.fi",type:"text",value:this.email||undefined,onChanged:function(r){return t.handleChange(r)}}),n("varaus-form-field",{name:"password",validationError:this.passwordError,icon:"lock",label:"Salasana *",type:"password",value:this.password||undefined,onChanged:function(r){return t.handleChange(r)}}),n("div",{class:"login-action-row"},n("varaus-button",{type:"submit",onClick:function(r){return t.submit(r)}},"Kirjaudu"),n("p",null,"Ei tunnusta? ",n("stencil-route-link",{url:"/sign-up"},"Rekisteröidy sähköpostilla."),n("br",null),"Salasana unohtunut? ",n("stencil-route-link",{url:"/sign-in-reset-password"},"Vaihda salasana.")),n("hr",null),n("p",null,"Tai käytä SOME-tunnusta"),n("p",null,n("button",{type:"button",class:"some-button fb",onClick:function(r){return t.federatedAction(r,"facebook")}},n("svg",{class:"social-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 216 216",color:"#ffffff"},n("path",{fill:"#ffffff",d:"\n                    M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9\n                    11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1\n                    11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2\n                    15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3\n                    11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"}))),n("button",{type:"button",class:"some-button google",onClick:function(r){return t.federatedAction(r,"google")}},n("svg",{class:"social-logo",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},n("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),n("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),n("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),n("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EA4335"})))),n("hr",null),n("p",null,n("a",{href:"#"},"Käyttöehdot ja henkilötietojen käsittely"))))};return t}());s.style=l}}}));