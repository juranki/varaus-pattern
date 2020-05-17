import { Component, Host, h, State, Prop } from '@stencil/core';
import { validate, validations } from '../../services/Validate';
import { getIcon } from '../varaus-icon/Icons';
export class VarausSignInForm {
    constructor() {
        this.fieldValidations = {
            email: [validations.required, validations.email],
            password: [validations.required],
        };
    }
    // VALIDATION
    validateField(field) {
        this[`${field}Error`] = validate(this[field], ...this.fieldValidations[field]);
    }
    validateAll() {
        return Object.keys(this.fieldValidations).every(k => (this.validateField(k)));
    }
    // SUBMIT
    async submit(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (!this.validateAll()) {
            return;
        }
        this.loading = true;
        await this.action(this.email, this.password);
        this.loading = false;
    }
    handleChange(evt) {
        this[evt.detail.name] = evt.detail.value;
        this.validateField(evt.detail.name);
    }
    render() {
        return (h(Host, null,
            h("form", { onSubmit: e => this.submit(e) },
                h("div", { class: "form-head" },
                    getIcon('calendar'),
                    h("h3", null, "varaus.net")),
                h("varaus-form-error", { error: this.error }),
                h("varaus-form-success", { success: this.success }),
                h("varaus-form-field", { name: "email", validationError: this.emailError, icon: "at", label: "S\u00E4hk\u00F6postiosoite *", placeholder: "email@esimerkki.fi", type: "text", value: this.email || undefined, onChanged: e => this.handleChange(e) }),
                h("varaus-form-field", { name: "password", validationError: this.passwordError, icon: "lock", label: "Salasana *", type: "password", value: this.password || undefined, onChanged: e => this.handleChange(e) }),
                h("div", { class: "login-action-row" },
                    h("varaus-button", { type: "submit" }, "Kirjaudu"),
                    h("p", null,
                        "Ei tunnusta? ",
                        h("stencil-route-link", { url: "/sign-up" }, "Rekister\u00F6idy\u00A0s\u00E4hk\u00F6postilla."),
                        h("br", null),
                        "Salasana unohtunut? ",
                        h("stencil-route-link", { url: "/sign-in-reset-password" }, "Vaihda\u00A0salasana.")),
                    h("hr", null),
                    h("p", null, "Tai k\u00E4yt\u00E4 SOME-tunnusta"),
                    h("p", null,
                        h("button", { class: "some-button fb" },
                            h("svg", { class: "social-logo", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 216 216", color: "#ffffff" },
                                h("path", { fill: "#ffffff", d: "\n                    M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9\n                    11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1\n                    11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2\n                    15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3\n                    11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z" }))),
                        h("button", { class: "some-button google", onClick: () => this.federatedAction('google') },
                            h("svg", { class: "social-logo", viewBox: "0 0 256 262", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" },
                                h("path", { d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027", fill: "#4285F4" }),
                                h("path", { d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1", fill: "#34A853" }),
                                h("path", { d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782", fill: "#FBBC05" }),
                                h("path", { d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251", fill: "#EA4335" })))),
                    h("hr", null),
                    h("p", null,
                        h("a", { href: "#" }, "K\u00E4ytt\u00F6ehdot ja henkil\u00F6tietojen k\u00E4sittely"))))));
    }
    static get is() { return "varaus-sign-in-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["varaus-sign-in-form.css"]
    }; }
    static get styleUrls() { return {
        "$": ["varaus-sign-in-form.css"]
    }; }
    static get properties() { return {
        "error": {
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
            "attribute": "error",
            "reflect": false
        },
        "success": {
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
            "attribute": "success",
            "reflect": false
        },
        "action": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(email: string, password: string) => void",
                "resolved": "(email: string, password: string) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "federatedAction": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(provider: 'google' | 'facebook') => void",
                "resolved": "(provider: \"google\" | \"facebook\") => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "email": {},
        "password": {},
        "emailError": {},
        "passwordError": {},
        "loading": {}
    }; }
}
