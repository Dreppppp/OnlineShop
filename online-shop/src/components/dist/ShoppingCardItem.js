"use strict";
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var ShoppingCardItem = function (_a) {
    var title = _a.title, price = _a.price, id = _a.id, count = _a.count;
    var _b = shoppingCardStore_1.useShopingCatdStore(), onIncreaseItemCount = _b.onIncreaseItemCount, onReduceItemCount = _b.onReduceItemCount;
    return (React.createElement("div", { className: "h-[113px] flex px-[30px] items-center border border-b-1 border-[#DEDFE1]" },
        React.createElement("div", { className: "flex justify-between w-[653px] h-[53px]" },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("span", { className: "text-[25px] mr-[20px]" }, "x"),
                React.createElement("div", { className: "size-[53px] bg-[#D9D9D9] mr-[20px]" }),
                React.createElement("p", { className: "text-[16px] text-[#3D3D3D]" }, title)),
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("p", { className: "text-[16px] color-[#949494]" },
                    "$",
                    price),
                React.createElement("div", { className: "flex justify-between items-center h-[49px] w-[107px] border border-1 border-[#D7D7D7] rounded-[30px] ml-[50px] pr-[20px]" },
                    React.createElement("button", { className: "color-[#414141] text-[25px] ml-[20px]", onClick: function () { onReduceItemCount(id); } }, "-"),
                    React.createElement("p", { className: "text-[18px]" }, count),
                    React.createElement("p", { className: "color-[#414141] text-[25px]", onClick: function () { onIncreaseItemCount(id); } }, "+")),
                React.createElement("p", { className: "text-[16px] color-[#949494] ml-[60px] pr-[20px]" },
                    "$",
                    price)))));
};
exports["default"] = ShoppingCardItem;
