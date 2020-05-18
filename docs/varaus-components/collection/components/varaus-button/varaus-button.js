import { Component, h, Prop } from '@stencil/core';
import { getIcon } from '../varaus-icon/Icons';
export class VarausButton {
    constructor() {
        this.disabled = false;
        this.type = 'button';
    }
    render() {
        return (h("button", { type: this.type },
            this.icon && getIcon(this.icon),
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "varaus-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["varaus-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["varaus-button.css"]
    }; }
    static get properties() { return {
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
                "original": "'submit' | 'button' | 'reset'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        },
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
        }
    }; }
}
