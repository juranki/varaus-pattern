import { r as registerInstance, h, H as Host, c as createEvent } from './index-43543585.js';
import { g as getIcon } from './Icons-bf34d518.js';
var varausButtonCss = ":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box}button{margin:0.3rem;cursor:pointer;-webkit-transition:.1s ease;transition:.1s ease;font-weight:600;letter-spacing:.05rem;padding:.7rem 1rem;border-radius:.2rem;color:var(--varaus-primary-contrast);background-color:var(--varaus-primary-color);border:none;font-size:var(--varaus-text-md);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}button div{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;line-height:var(--varaus-text-lg)}button svg{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0px .3rem;height:var(--varaus-text-lg)}button:hover{background-color:var(--varaus-primary-shade)}button:active{-webkit-transform:translate(1px, 1px);transform:translate(1px, 1px)}button:focus{outline:none}";
var VarausButton = /** @class */ (function () {
    function VarausButton(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.type = 'button';
    }
    VarausButton.prototype.render = function () {
        return (h(Host, null, h("button", { type: this.type, onClick: this.action }, this.icon && getIcon(this.icon), h("div", null, h("slot", null)))));
    };
    return VarausButton;
}());
VarausButton.style = varausButtonCss;
var varausFormFieldCss = ":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}.form-row{position:relative;width:100%;margin-bottom:1rem}.input-wrap:hover{border:1px solid var(--varaus-secondary-shade)}.input-wrap:hover svg{background-color:var(--varaus-secondary-shade)}.input-wrap:focus-within{border:1px solid var(--varaus-secondary-shade)}.input-wrap:focus-within svg{background-color:var(--varaus-secondary-shade)}.input-wrap{-webkit-transition:.3s;transition:.3s;position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:.2rem;border:1px solid var(--varaus-secondary-color)}.input-wrap svg{-webkit-transition:.3s;transition:.3s;padding:.3rem;width:2rem;color:white;background-color:var(--varaus-secondary-color);height:100%}label{display:block;font-size:var(--varaus-text-sm);font-weight:400;letter-spacing:.05rem;margin-bottom:.3rem}input{letter-spacing:.03rem;width:100%;outline:none;border:none;left:0px;right:0px;margin:0px;padding:.4rem;border-radius:.2rem}.error{color:var(--varaus-red);letter-spacing:.03rem;font-size:var(--varaus-text-xs)}";
var VarausFormField = /** @class */ (function () {
    function VarausFormField(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.changed = createEvent(this, "changed", 7);
    }
    VarausFormField.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "form-row" }, h("label", { htmlFor: this.name }, this.label), h("div", { class: "input-wrap" }, this.icon && getIcon(this.icon), h("input", { disabled: this.disabled, type: this.type, name: "email", value: this.value, placeholder: this.placeholder, onChange: function (evt) {
                var el = evt.currentTarget;
                _this.changed.emit({
                    name: _this.name,
                    value: el.value
                });
            } })), this.validationError && (h("div", { class: "error" }, this.validationError)))));
    };
    return VarausFormField;
}());
VarausFormField.style = varausFormFieldCss;
export { VarausButton as varaus_button, VarausFormField as varaus_form_field };
