"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var react_1 = require("react");
function SideMenu() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "\n          fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300\n          " + (isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none') + "\n          z-[1400]\n        ", onClick: function () { return setIsOpen(false); } }),
        React.createElement("div", { className: "\n          fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-[1500]\n          " + (isOpen ? 'translate-x-0' : '-translate-x-full') + "\n        " },
            React.createElement("div", { className: "p-4 flex justify-end" },
                React.createElement("button", { onClick: function () { return setIsOpen(false); }, "aria-label": "Close menu", className: "text-black" },
                    React.createElement(icons_1.CrossIcon, null))),
            React.createElement("nav", { className: "px-4" },
                React.createElement("ul", { className: "flex flex-col gap-4" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "\u041E \u043D\u0430\u0441")))))));
}
exports["default"] = SideMenu;
;
