"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { stringify } = JSON;
function default_1({ type, url: jsonLd, data: currentData }) {
    const { head } = document;
    const script = document.createElement('script');
    const data = Object.keys(currentData).length && currentData;
    script.type = type;
    script.dataset.jsonLd = jsonLd;
    if (data) {
        script.innerHTML = stringify(data).trim();
    }
    script.innerHTML && head.appendChild(script);
}
exports.default = default_1;
//# sourceMappingURL=load-script.js.map