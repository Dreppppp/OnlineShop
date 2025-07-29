"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var icons_1 = require("@/images/icons");
var react_1 = require("react");
var FieldWithHint_1 = require("../components/FieldWithHint");
function Menu(_a) {
    var showStickyLogo = _a.showStickyLogo;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState(false), isSearch = _c[0], setIsSearch = _c[1];
    var _d = react_1.useState(""), searchedValue = _d[0], setSearchedValue = _d[1];
    return (React.createElement("div", { className: "w-full fixed top-0 left-0 z-[1000]" },
        React.createElement("div", { className: "relative h-[70px]" },
            React.createElement("div", { className: "\n            flex items-center justify-between bg-black text-white h-[70px] \n            transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] px-[100px]\n            " + (isSearch ? 'opacity-0 pointer-events-none scale-y-90' : 'opacity-100 pointer-events-auto scale-y-100') + "\n          ", style: { transformOrigin: 'top' } },
                React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement(icons_1.LogoIcon, null)),
                React.createElement("div", { className: "absolute left-1/2 -translate-x-1/2" },
                    React.createElement("p", { className: "text-[20px] font-bold tracking-widest text-white drep \n              transition-all duration-[800ms] ease-[cubic-bezier(0.5,0,0,1)] \n              will-change-transform\n              " + (showStickyLogo ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0') + "\n            " }, "DREPBUY")),
                React.createElement("div", { className: "flex gap-5 items-center" },
                    React.createElement("div", { className: "size-[24px] cursor-pointer", onClick: function () { return setIsSearch(true); } },
                        React.createElement(icons_1.SearchIcon, null)),
                    React.createElement(link_1["default"], { href: "/shoppingCart" },
                        React.createElement("div", { className: "flex justify-center items-center" },
                            React.createElement(icons_1.BagpackMenuIcon, null))),
                    React.createElement("div", { className: "flex items-center justify-center gap-1 cursor-pointer", onClick: function () { return setIsOpen(true); } },
                        React.createElement(icons_1.MenuIcon, null)))),
            React.createElement("div", { className: "\n            absolute top-0 left-0 w-full h-[70px] bg-black flex items-center px-[20px]\n            transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)]\n            " + (isSearch ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-6') + "\n          " },
                React.createElement("div", { className: "flex items-center justify-between w-full border border-white rounded-[70px] h-[50px] px-[20px]" },
                    React.createElement("div", { onClick: function () { return setIsSearch(false); }, className: "cursor-pointer" },
                        React.createElement(icons_1.CrossIcon, null)),
                    React.createElement("input", { type: "text", placeholder: "Search for...", className: "w-full outline-none bg-transparent text-white px-4", autoFocus: isSearch }),
                    React.createElement(FieldWithHint_1["default"], null),
                    React.createElement(icons_1.SearchIcon, null)))),
        isOpen && (React.createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-[999]", onClick: function () { return setIsOpen(false); } })),
        React.createElement("div", { className: "\n          fixed top-0 right-0 h-full w-[500px] bg-white z-[1000] shadow-xl\n          transition-transform duration-500 ease-[cubic-bezier(0.5,0,0,1)]\n          " + (isOpen ? 'translate-x-0' : 'translate-x-full') + "\n        " },
            React.createElement("div", { className: "flex justify-end p-4" },
                React.createElement("div", { onClick: function () { return setIsOpen(false); }, className: "cursor-pointer bg-black rounded-[50px] size-[40px] flex justify-center items-center" },
                    React.createElement(icons_1.CrossIcon, null))),
            React.createElement("div", { className: "p-6 pl-[100px]" },
                React.createElement("ul", { className: "space-y-4 text-black font-semibold text-[22px]" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/homePage" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/products" }, "Products")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/about" }, "About Us")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/contact" }, "Contact")))))));
}
exports["default"] = Menu;
