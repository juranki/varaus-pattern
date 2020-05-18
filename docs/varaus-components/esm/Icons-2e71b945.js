import { h } from './index-43543585.js';

const svgs = Object.freeze({
    signIn: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-in" },
        h("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
        h("polyline", { points: "10 17 15 12 10 7" }),
        h("line", { x1: "15", y1: "12", x2: "3", y2: "12" })),
    signOut: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-out" },
        h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
        h("polyline", { points: "16 17 21 12 16 7" }),
        h("line", { x1: "21", y1: "12", x2: "9", y2: "12" })),
    menu: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-menu" },
        h("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        h("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        h("line", { x1: "3", y1: "18", x2: "21", y2: "18" })),
    at: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-at-sign" },
        h("circle", { cx: "12", cy: "12", r: "4" }),
        h("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" })),
    user: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-user" },
        h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
        h("circle", { cx: "12", cy: "7", r: "4" })),
    lock: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-lock" },
        h("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        h("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })),
    unlock: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-unlock" },
        h("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        h("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })),
    calendar: h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-calendar" },
        h("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        h("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
        h("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
        h("line", { x1: "3", y1: "10", x2: "21", y2: "10" })),
    spinner: h("svg", { width: "24", height: "24", viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor" },
        h("g", { fill: "none", "fill-rule": "evenodd" },
            h("g", { transform: "translate(1 1)", "stroke-width": "3" },
                h("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "16" }),
                h("path", { d: "M36 16c0-9.94-8.06-18-18-18" },
                    h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }))))),
});
function getIcon(name) {
    return svgs[name];
}

export { getIcon as g, svgs as s };
