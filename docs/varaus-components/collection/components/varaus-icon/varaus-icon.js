import { Component, h, Host, Prop } from '@stencil/core';
import { svgs } from './Icons';
export class VarausIcon {
    render() {
        return (h(Host, null, svgs[this.icon]));
    }
    static get is() { return "varaus-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["varaus-icon.css"]
    }; }
    static get styleUrls() { return {
        "$": ["varaus-icon.css"]
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
                        "path": "./Icons"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        }
    }; }
}
