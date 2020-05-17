import { r as registerInstance, h, H as Host } from './index-43543585.js';
import { s as svgs } from './Icons-bf34d518.js';
var varausIconCss = ":host{display:inline}";
var VarausIcon = /** @class */ (function () {
    function VarausIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    VarausIcon.prototype.render = function () {
        return (h(Host, null, svgs[this.icon]));
    };
    return VarausIcon;
}());
VarausIcon.style = varausIconCss;
export { VarausIcon as varaus_icon };
