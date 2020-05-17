import { Component, Host, h, Prop, Event } from '@stencil/core';
import { getIcon } from '../varaus-icon/Icons';
export class VarausFormField {
    constructor() {
        this.disabled = false;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "form-row" },
                h("label", { htmlFor: this.name }, this.label),
                h("div", { class: "input-wrap" },
                    this.icon && getIcon(this.icon),
                    h("input", { disabled: this.disabled, type: this.type, name: "email", value: this.value, placeholder: this.placeholder, onChange: evt => {
                            const el = evt.currentTarget;
                            this.changed.emit({
                                name: this.name,
                                value: el.value
                            });
                        } })),
                this.validationError && (h("div", { class: "error" }, this.validationError)))));
    }
    static get is() { return "varaus-form-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["varaus-form-field.css"]
    }; }
    static get styleUrls() { return {
        "$": ["varaus-form-field.css"]
    }; }
    static get properties() { return {
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "IconName",
                "resolved": "\"at\" | \"calendar\" | \"lock\" | \"menu\" | \"signIn\" | \"signOut\" | \"spinner\" | \"unlock\" | \"user\"",
                "references": {
                    "IconName": {
                        "location": "import",
                        "path": "../varaus-icon/Icons"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false
        },
        "validationError": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "validation-error",
            "reflect": false
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "changed",
            "name": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "Changed",
                "resolved": "Changed",
                "references": {
                    "Changed": {
                        "location": "local"
                    }
                }
            }
        }]; }
}
