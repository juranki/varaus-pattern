import { r as registerInstance, h, H as Host } from './index-43543585.js';
import { s as svgs } from './Icons-71885aab.js';

const varausIconCss = ":host{display:inline}";

const VarausIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, svgs[this.icon]));
    }
};
VarausIcon.style = varausIconCss;

export { VarausIcon as varaus_icon };
