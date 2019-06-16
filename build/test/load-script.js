"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
exports.default = () => describe('vamtiger-organization-welcome-json-ld', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-organization-welcome-json-ld.js'
        });
    });
    it('load script', async function () {
        const script = document.head.querySelector('[src="vamtiger-organization-welcome-json-ld.js"]');
        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
    });
});
//# sourceMappingURL=load-script.js.map