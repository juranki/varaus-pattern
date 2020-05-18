'use strict';

const index = require('./index-24347413.js');

const svgs = Object.freeze({
    signIn: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-in" },
        index.h("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
        index.h("polyline", { points: "10 17 15 12 10 7" }),
        index.h("line", { x1: "15", y1: "12", x2: "3", y2: "12" })),
    signOut: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-out" },
        index.h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
        index.h("polyline", { points: "16 17 21 12 16 7" }),
        index.h("line", { x1: "21", y1: "12", x2: "9", y2: "12" })),
    menu: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-menu" },
        index.h("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        index.h("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        index.h("line", { x1: "3", y1: "18", x2: "21", y2: "18" })),
    at: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-at-sign" },
        index.h("circle", { cx: "12", cy: "12", r: "4" }),
        index.h("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" })),
    user: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-user" },
        index.h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
        index.h("circle", { cx: "12", cy: "7", r: "4" })),
    lock: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-lock" },
        index.h("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        index.h("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })),
    unlock: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-unlock" },
        index.h("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        index.h("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })),
    calendar: index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-calendar" },
        index.h("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        index.h("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
        index.h("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
        index.h("line", { x1: "3", y1: "10", x2: "21", y2: "10" })),
    spinner: index.h("svg", { width: "24", height: "24", viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor" },
        index.h("g", { fill: "none", "fill-rule": "evenodd" },
            index.h("g", { transform: "translate(1 1)", "stroke-width": "3" },
                index.h("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "16" }),
                index.h("path", { d: "M 35 18 c 0 -10 -6 -16 -16 -16" })))),
});
function getIcon(name) {
    return svgs[name];
}

exports.getIcon = getIcon;
exports.svgs = svgs;
