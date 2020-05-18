var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h } from './index-43543585.js';
import { g as getIcon } from './Icons-71885aab.js';
var validations = {
    required: function (s) { return (!s ? 'requiredField' : null); },
    email: function (s) { return (/\S+@\S+\.\S+/.test(s) ? null : 'invalidEmail'); }
};
function validate(value) {
    var validations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        validations[_i - 1] = arguments[_i];
    }
    for (var _a = 0, validations_1 = validations; _a < validations_1.length; _a++) {
        var validation = validations_1[_a];
        var r = validation(value);
        if (r) {
            return r;
        }
    }
    return null;
}
var varausSignInFormCss = ":host{display:block}*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}form{font-family:var(--varaus-font-family)}.form-head h3{font-size:var(--varaus-text-xl)}.form-head svg{color:var(--varaus-primary-color);height:100px;width:100px}.form-head{text-align:center;margin-top:.5rem;margin-bottom:1.2rem}.form-foot{text-align:center;padding-top:.8rem}.login-action-row{text-align:center;padding-top:.8rem}varaus-button{display:inline-block}.some-button{position:relative;border:1px solid var(--varaus-light-grey);background-color:white;border-radius:50%;height:4rem;width:4rem;margin-left:.5rem;margin-right:.5rem}.some-button svg{height:50%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.fb{background-color:#4267b2}.fb:hover{background-color:#2955ad}.google:hover{background-color:#f8f8f8}hr{color:var(--varaus-light-grey);-webkit-margin-before:1.5rem;margin-block-start:1.5rem;-webkit-margin-after:1.5rem;margin-block-end:1.5rem}p{-webkit-margin-before:.5rem;margin-block-start:.5rem;-webkit-margin-after:.5rem;margin-block-end:.5rem;font-size:var(--varaus-text-sm);line-height:1.1rem}";
var VarausSignInForm = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.fieldValidations = {
            email: [validations.required, validations.email],
            password: [validations.required],
        };
        this.signedin = createEvent(this, "signedin", 7);
    }
    // VALIDATION
    class_1.prototype.validateField = function (field) {
        this[field + "Error"] = validate.apply(void 0, __spreadArrays([this[field]], this.fieldValidations[field]));
        return !this[field + "Error"];
    };
    class_1.prototype.validateAll = function () {
        var _this = this;
        var checks = Object.keys(this.fieldValidations).map(function (k) { return (_this.validateField(k)); });
        return checks.every(function (k) { return (k); });
    };
    // SUBMIT
    class_1.prototype.submit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                evt.preventDefault();
                evt.stopPropagation();
                if (!this.validateAll()) {
                    return [2 /*return*/];
                }
                this.signedin.emit({
                    username: this.email,
                    password: this.password,
                });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.federatedAction = function (e, federationProvider) {
        e.preventDefault();
        e.stopPropagation();
        this.signedin.emit({
            federationProvider: federationProvider
        });
    };
    class_1.prototype.handleChange = function (evt) {
        this[evt.detail.name] = evt.detail.value;
        this.validateField(evt.detail.name);
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("form", { onSubmit: function (e) { return _this.submit(e); }, onKeyUp: function (e) { return e.key === 'Enter' && _this.submit(e); } }, h("div", { class: "form-head" }, getIcon('calendar'), h("h3", null, "varaus.net")), h("varaus-form-error", { error: this.error }), h("varaus-form-success", { success: this.success }), h("varaus-form-field", { name: "email", validationError: this.emailError, icon: "at", label: "S\u00E4hk\u00F6postiosoite *", placeholder: "email@esimerkki.fi", type: "text", value: this.email || undefined, onChanged: function (e) { return _this.handleChange(e); } }), h("varaus-form-field", { name: "password", validationError: this.passwordError, icon: "lock", label: "Salasana *", type: "password", value: this.password || undefined, onChanged: function (e) { return _this.handleChange(e); } }), h("div", { class: "login-action-row" }, h("varaus-button", { type: "submit", onClick: function (e) { return _this.submit(e); } }, "Kirjaudu"), h("p", null, "Ei tunnusta? ", h("stencil-route-link", { url: "/sign-up" }, "Rekister\u00F6idy\u00A0s\u00E4hk\u00F6postilla."), h("br", null), "Salasana unohtunut? ", h("stencil-route-link", { url: "/sign-in-reset-password" }, "Vaihda\u00A0salasana.")), h("hr", null), h("p", null, "Tai k\u00E4yt\u00E4 SOME-tunnusta"), h("p", null, h("button", { type: "button", class: "some-button fb", onClick: function (e) { return _this.federatedAction(e, 'facebook'); } }, h("svg", { class: "social-logo", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 216 216", color: "#ffffff" }, h("path", { fill: "#ffffff", d: "\n                    M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9\n                    11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1\n                    11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2\n                    15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3\n                    11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z" }))), h("button", { type: "button", class: "some-button google", onClick: function (e) { return _this.federatedAction(e, 'google'); } }, h("svg", { class: "social-logo", viewBox: "0 0 256 262", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" }, h("path", { d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027", fill: "#4285F4" }), h("path", { d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1", fill: "#34A853" }), h("path", { d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782", fill: "#FBBC05" }), h("path", { d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251", fill: "#EA4335" })))), h("hr", null), h("p", null, h("a", { href: "#" }, "K\u00E4ytt\u00F6ehdot ja henkil\u00F6tietojen k\u00E4sittely")))));
    };
    return class_1;
}());
VarausSignInForm.style = varausSignInFormCss;
export { VarausSignInForm as varaus_sign_in_form };
