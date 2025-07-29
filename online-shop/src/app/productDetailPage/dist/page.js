'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Menu_1 = require("@/components/Menu");
var icons_1 = require("@/images/icons");
function productDetailPage() {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    return (React.createElement("div", null,
        React.createElement("div", { className: "w-full px-[108px] pt-[40px] " },
            React.createElement(Menu_1["default"], { showStickyLogo: true })),
        React.createElement("div", { className: "w-full h-[630px] flex justify-between px-[100px] mt-[60px]" },
            React.createElement("div", { className: "w-[725px]  flex justify-between" },
                React.createElement("div", { className: " flex flex-col gap-[29px]" },
                    React.createElement("div", { className: "w-[141px] h-[191px] bg-[#A6A6A6]" }),
                    React.createElement("div", { className: "w-[141px] h-[191px] bg-[#A6A6A6]" }),
                    React.createElement("div", { className: "w-[141px] h-[191px] bg-[#A6A6A6]" })),
                React.createElement("div", { className: "w-[550px] h-[630px] bg-[#A6A6A6]" })),
            React.createElement("div", { className: "w-[600px] h-[615px] " },
                React.createElement("div", { className: "w-[600px] h-[100px]" },
                    React.createElement("div", { className: "flex justify-between items-center" },
                        React.createElement("h1", { className: "text-[32px] font-medium" }, "\u0442\u0430\u0439\u0442\u043B"),
                        React.createElement(icons_1.FavoriteIcon, null)),
                    React.createElement("div", { className: "flex items-center mt-[10px]" },
                        React.createElement("h1", { className: "text-[34px]" }, "$54.98 |"),
                        React.createElement("div", { className: "gap-[2px] flex ml-[20px]" }, [1, 2, 3, 4, 5].map(function (elem) { return (React.createElement(icons_1.StarIcon, { key: elem })); })),
                        React.createElement("p", { className: "text-[20px] ml-[15px]" }, "( 32 review )")),
                    React.createElement("div", { className: "w-[600px] h-[1px] bg-[#A6A6A6] mt-[45px]" }),
                    React.createElement("p", { className: "text-[17px] mt-[15px]" }, "Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn."),
                    React.createElement("ul", { className: "list-disc ml-5 text-[17px] mt-2" },
                        React.createElement("li", null, "Lorem ipsum dolor sit amet, adipi scing elit"),
                        React.createElement("li", null, "Lorem ipsum dolor sit amet, consectetuer adipi scing elit"),
                        React.createElement("li", null, "Lorem ipsum dolor sit amet, consectetuer adipi ")),
                    React.createElement("div", { className: "flex justify-between mt-[40px]" },
                        React.createElement("button", { className: "w-[150px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]", onClick: function () { return setCounter(function (prev) { return Math.max(prev - 1, 0); }); } },
                            React.createElement("p", { className: "text-[#414141] text-[30px]" }, "-")),
                        React.createElement("p", { className: "text-[20px]" }, counter),
                        React.createElement("button", { className: "w-[150px] h-[50px] rounded-[30px] border border-1 border-[#D7D7D7] flex justify-between items-center px-[20px]", onClick: function () { return setCounter(function (prev) { return prev + 1; }); } },
                            React.createElement("p", { className: "text-[#414141] text-[25px]" }, "+")),
                        React.createElement("button", { className: "w-[370px] h-[50px] bg-[#282828] rounded-[30px]" },
                            React.createElement("p", { className: "text-white text-[18px]" }, "Add to Cart"))),
                    React.createElement("div", null,
                        React.createElement("button", { className: " border border-1 border-black rounded-[30px] text-[black] h-[50px] w-[600px] text-[20px] mt-[10px]" }, "Buy Now")))))));
}
exports["default"] = productDetailPage;
