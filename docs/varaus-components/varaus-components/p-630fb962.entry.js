import{r,h as t,c as a,H as o}from"./p-180ce8bb.js";import{g as s}from"./p-3d8906aa.js";const i=class{constructor(t){r(this,t),this.disabled=!1,this.type="button"}render(){return t("button",{type:this.type},this.icon&&s(this.icon),t("div",null,t("slot",null)))}};i.style=":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box}button{border:1px solid transparent;margin:2px;cursor:pointer;-webkit-transition:.1s ease;transition:.1s ease;font-weight:600;letter-spacing:.05rem;padding:.7rem 1rem;border-radius:.2rem;color:var(--varaus-primary-contrast);background-color:var(--varaus-primary-color);font-size:var(--varaus-text-md);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}button div{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;line-height:var(--varaus-text-lg)}button svg{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;height:var(--varaus-text-lg)}button:hover{background-color:var(--varaus-primary-shade)}button:active{-webkit-transform:translate(1px, 1px);transform:translate(1px, 1px)}button:focus{outline:none;border:1px solid var(--varaus-secondary-color)}";const e=class{constructor(t){r(this,t),this.disabled=!1,this.changed=a(this,"changed",7)}render(){return t(o,null,t("div",{class:"form-row"},t("label",{htmlFor:this.name},this.label),t("div",{class:"input-wrap"},this.icon&&s(this.icon),t("input",{disabled:this.disabled,type:this.type,name:"email",value:this.value,placeholder:this.placeholder,onKeyUp:r=>{this.changed.emit({name:this.name,value:r.currentTarget.value})}})),this.validationError&&t("div",{class:"error"},this.validationError)))}};e.style=":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}.form-row{position:relative;width:100%;margin-bottom:1rem}.input-wrap:hover{border:1px solid var(--varaus-secondary-shade)}.input-wrap:hover svg{background-color:var(--varaus-secondary-shade)}.input-wrap:focus-within{border:1px solid var(--varaus-secondary-shade)}.input-wrap:focus-within svg{background-color:var(--varaus-secondary-shade)}.input-wrap{-webkit-transition:.3s;transition:.3s;position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:.2rem;border:1px solid var(--varaus-secondary-color)}.input-wrap svg{-webkit-transition:.3s;transition:.3s;padding:.3rem;width:2rem;color:white;background-color:var(--varaus-secondary-color);height:100%}label{display:block;font-size:var(--varaus-text-sm);font-weight:400;letter-spacing:.05rem;margin-bottom:.3rem}input{letter-spacing:.03rem;width:100%;outline:none;border:none;left:0px;right:0px;margin:0px;padding:.4rem;border-radius:.2rem}.error{color:var(--varaus-red);letter-spacing:.03rem;font-size:var(--varaus-text-xs)}";export{i as varaus_button,e as varaus_form_field}