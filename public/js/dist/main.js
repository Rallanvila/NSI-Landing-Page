(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("// const { default: gsap } = require('gsap/gsap-core');\ngsap.from('.nav__links--link', {\n  ease: 'ease',\n  stagger: 0.4,\n  opacity: 0,\n  duration: 0.5\n});\ngsap.from('.whyNSI__left', {\n  duration: 2,\n  x: -800,\n  ease: 'power4',\n  scrollTrigger: {\n    trigger: '.whyNSI',\n    start: 'top center'\n  }\n});\ngsap.from('.whyNSI__right', {\n  duration: 1.5,\n  x: 800,\n  ease: 'power4',\n  scrollTrigger: {\n    trigger: '.whyNSI',\n    start: 'top center'\n  }\n});\ngsap.from('.mission', {\n  duration: 2,\n  opacity: 0,\n  scrollTrigger: {\n    trigger: '.mission',\n    start: 'top center'\n  }\n});\ngsap.from('.our-team__container--pic', {\n  duration: 1,\n  x: -1500,\n  y: -500,\n  stagger: 0.4,\n  scrollTrigger: {\n    trigger: '.our-team__container',\n    start: 'top center'\n  }\n});\ngsap.from('.careers__employee-container', {\n  duration: 1,\n  y: 200,\n  x: -100,\n  opacity: 0,\n  stagger: 0.5,\n  scrollTrigger: {\n    trigger: '.careers__employee-container',\n    start: 'top center'\n  }\n});\ngsap.from('.careers__right', {\n  duration: 3,\n  opacity: 0,\n  scrollTrigger: {\n    trigger: '.careers__employee-container',\n    start: 'top center',\n    delay: 2.5\n  }\n});\ngsap.from('.contact__form', {\n  duration: 3,\n  opacity: 0,\n  scrollTrigger: {\n    trigger: '.contact__form',\n    start: 'top center'\n  }\n}); // if (navigator.serviceWorker) {\n// \tnavigator.serviceWorker\n// \t\t.register('/sw.js')\n// \t\t.then(function(registration) {\n// \t\t\t// console.log(\n// \t\t\t// \t'ServiceWorker registration successful with scope:',\n// \t\t\t// \tregistration.scope\n// \t\t\t// );\n// \t\t})\n// \t\t.catch(function(error) {\n// \t\t\tconsole.log('ServiceWorker registration failed:', error);\n// \t\t});\n// }\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});