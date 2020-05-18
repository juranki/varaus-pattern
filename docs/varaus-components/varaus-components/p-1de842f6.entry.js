import{r,c as t,h as i}from"./p-180ce8bb.js";import{g as o}from"./p-98396c21.js";const a={required:r=>r?null:"requiredField",email:r=>/\S+@\S+\.\S+/.test(r)?null:"invalidEmail"},e=class{constructor(i){r(this,i),this.fieldValidations={email:[a.required,a.email],password:[a.required]},this.signedin=t(this,"signedin",7)}validateField(r){return this[`${r}Error`]=function(r,...t){for(const i of t){const t=i(r);if(t)return t}return null}(this[r],...this.fieldValidations[r]),!this[`${r}Error`]}validateAll(){return Object.keys(this.fieldValidations).map(r=>this.validateField(r)).every(r=>r)}async submit(r){r.preventDefault(),r.stopPropagation(),this.validateAll()&&this.signedin.emit({username:this.email,password:this.password})}federatedAction(r,t){r.preventDefault(),r.stopPropagation(),this.signedin.emit({federationProvider:t})}handleChange(r){this[r.detail.name]=r.detail.value,this.validateField(r.detail.name)}render(){return i("form",{onSubmit:r=>this.submit(r),onKeyUp:r=>"Enter"===r.key&&this.submit(r)},i("div",{class:"form-head"},o("calendar"),i("h3",null,"varaus.net")),i("varaus-form-error",{error:this.error}),i("varaus-form-success",{success:this.success}),i("varaus-form-field",{name:"email",validationError:this.emailError,icon:"at",label:"Sähköpostiosoite *",placeholder:"email@esimerkki.fi",type:"text",value:this.email||void 0,onChanged:r=>this.handleChange(r)}),i("varaus-form-field",{name:"password",validationError:this.passwordError,icon:"lock",label:"Salasana *",type:"password",value:this.password||void 0,onChanged:r=>this.handleChange(r)}),i("div",{class:"login-action-row"},i("varaus-button",{type:"submit",onClick:r=>this.submit(r)},"Kirjaudu"),i("p",null,"Ei tunnusta? ",i("stencil-route-link",{url:"/sign-up"},"Rekisteröidy sähköpostilla."),i("br",null),"Salasana unohtunut? ",i("stencil-route-link",{url:"/sign-in-reset-password"},"Vaihda salasana.")),i("hr",null),i("p",null,"Tai käytä SOME-tunnusta"),i("p",null,i("button",{type:"button",class:"some-button fb",onClick:r=>this.federatedAction(r,"facebook")},i("svg",{class:"social-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 216 216",color:"#ffffff"},i("path",{fill:"#ffffff",d:"\n                    M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9\n                    11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1\n                    11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2\n                    15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3\n                    11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"}))),i("button",{type:"button",class:"some-button google",onClick:r=>this.federatedAction(r,"google")},i("svg",{class:"social-logo",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},i("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),i("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),i("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),i("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EA4335"})))),i("hr",null),i("p",null,i("a",{href:"#"},"Käyttöehdot ja henkilötietojen käsittely"))))}};e.style=":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}form{font-family:var(--varaus-font-family)}.form-head h3{font-size:var(--varaus-text-xl)}.form-head svg{color:var(--varaus-primary-color);height:100px;width:100px}.form-head{text-align:center;margin-top:.5rem;margin-bottom:1.2rem}.form-foot{text-align:center;padding-top:.8rem}.login-action-row{text-align:center;padding-top:.8rem}varaus-button{display:inline-block}.some-button{position:relative;border:1px solid var(--varaus-light-grey);background-color:white;border-radius:50%;height:4rem;width:4rem;margin-left:.5rem;margin-right:.5rem}.some-button svg{height:50%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.fb{background-color:#4267b2}.fb:hover{background-color:#2955ad}.google:hover{background-color:#f8f8f8}hr{color:var(--varaus-light-grey);-webkit-margin-before:1.5rem;margin-block-start:1.5rem;-webkit-margin-after:1.5rem;margin-block-end:1.5rem}p{-webkit-margin-before:.5rem;margin-block-start:.5rem;-webkit-margin-after:.5rem;margin-block-end:.5rem;font-size:var(--varaus-text-sm);line-height:1.1rem}";export{e as varaus_sign_in_form}