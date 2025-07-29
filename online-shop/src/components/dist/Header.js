'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@/images/icons");
var Menu_1 = require("./Menu");
function Header() {
    var _a = react_1.useState(0), scrollY = _a[0], setScrollY = _a[1];
    react_1.useEffect(function () {
        var onScroll = function () {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    var clampedScroll = Math.min(scrollY, 300);
    var scale = 1 - clampedScroll / 600;
    var opacity = 1 - clampedScroll / 300;
    var translateY = 24 - clampedScroll / 10;
    var showStickyLogo = scrollY > 50;
    return (React.createElement("div", { className: "w-full h-[810px] bg-black pt-[40px] overflow-visible relative" },
        React.createElement("div", { className: "fixed top-0 left-0 w-full z-50" },
            React.createElement(Menu_1["default"], { showStickyLogo: showStickyLogo })),
        React.createElement("p", { className: "drep text-white text-[330px] text-center sticky top-[80px] z-40 pointer-events-none", style: {
                transform: "scale(" + scale + ") translateY(" + translateY + "px)",
                opacity: opacity,
                transition: 'transform 0.6s ease, opacity 0.6s ease'
            } }, "DREPE"),
        React.createElement("div", { className: "w-full flex justify-center items-center mt-[100px]" },
            React.createElement("button", { className: "text-[18px] w-[200px] h-[57px] bg-white rounded-[5px] flex justify-between items-center px-[22px]" },
                React.createElement("p", { className: "text-black font-medium" }, "Start shopping"),
                React.createElement(icons_1.ArrowDownIcon, null)))));
}
exports["default"] = Header;
