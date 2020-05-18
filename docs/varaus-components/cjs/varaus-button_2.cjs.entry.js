'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-24347413.js');
const Icons = require('./Icons-f538cf0d.js');

const varausButtonCss = ":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box}button{border:1px solid transparent;margin:2px;cursor:pointer;-webkit-transition:.1s ease;transition:.1s ease;font-weight:600;letter-spacing:.05rem;padding:.7rem 1rem;border-radius:.2rem;color:var(--varaus-primary-contrast);background-color:var(--varaus-primary-color);font-size:var(--varaus-text-md);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}button div{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;line-height:var(--varaus-text-lg)}button svg{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;height:var(--varaus-text-lg)}button:hover{background-color:var(--varaus-primary-shade)}button:active{-webkit-transform:translate(1px, 1px);transform:translate(1px, 1px)}button:focus{outline:none;border:1px solid var(--varaus-secondary-color)}";

const VarausButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.type = 'button';
    }
    render() {
        return (index.h("button", { type: this.type }, this.icon && Icons.getIcon(this.icon), index.h("div", null, index.h("slot", null))));
    }
};
VarausButton.style = varausButtonCss;

const varausFormFieldCss = ":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}.form-row{position:relative;width:100%;margin-bottom:1rem}.input-wrap:hover{border:1px solid var(--varaus-secondary-shade)}.input-wrap:hover svg{background-color:var(--varaus-secondary-shade)}.input-wrap:focus-within{border:1px solid var(--varaus-secondary-shade)}.input-wrap:focus-within svg{background-color:var(--varaus-secondary-shade)}.input-wrap{-webkit-transition:.3s;transition:.3s;position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:.2rem;border:1px solid var(--varaus-secondary-color)}.input-wrap svg{-webkit-transition:.3s;transition:.3s;padding:.3rem;width:2rem;color:white;background-color:var(--varaus-secondary-color);height:100%}label{display:block;font-size:var(--varaus-text-sm);font-weight:400;letter-spacing:.05rem;margin-bottom:.3rem}input{letter-spacing:.03rem;width:100%;outline:none;border:none;left:0px;right:0px;margin:0px;padding:.4rem;border-radius:.2rem}.error{color:var(--varaus-red);letter-spacing:.03rem;font-size:var(--varaus-text-xs)}";

const VarausFormField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.changed = index.createEvent(this, "changed", 7);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "form-row" }, index.h("label", { htmlFor: this.name }, this.label), index.h("div", { class: "input-wrap" }, this.icon && Icons.getIcon(this.icon), index.h("input", { disabled: this.disabled, type: this.type, name: "email", value: this.value, placeholder: this.placeholder, onKeyUp: evt => {
                const el = evt.currentTarget;
                this.changed.emit({
                    name: this.name,
                    value: el.value
                });
            } })), this.validationError && (index.h("div", { class: "error" }, this.validationError)))));
    }
};
VarausFormField.style = varausFormFieldCss;

exports.varaus_button = VarausButton;
exports.varaus_form_field = VarausFormField;
