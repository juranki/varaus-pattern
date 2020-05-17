'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-24347413.js');
const Icons = require('./Icons-e824cfa2.js');

const varausIconCss = ":host{display:inline}";

const VarausIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, Icons.svgs[this.icon]));
    }
};
VarausIcon.style = varausIconCss;

exports.varaus_icon = VarausIcon;
