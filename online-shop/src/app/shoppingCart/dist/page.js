'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var Footer_1 = require("@/components/Footer");
var Menu_1 = require("@/components/Menu");
var ShoppingCardItem_1 = require("@/components/ShoppingCardItem");
function shoppingCart(_a) {
    var shopingCard = shoppingCardStore_1.useShopingCatdStore().shopingCard;
    var totalPrice = shopingCard.reduce(function (acc, next) { return acc += next.count * next.price; }, 0);
    return (React.createElement("div", { className: 'w-full' },
        React.createElement("div", { className: "w-full px-[108px] pt-[40px] " },
            React.createElement(Menu_1["default"], { textColor: "black" })),
        React.createElement("div", { className: 'w-screen flex justify-between px-[200px] pt-[80px]' },
            React.createElement("div", null,
                React.createElement("div", { className: "h-[530px] w-[710px] border border-1 border-[#DEDFE1] rounded-[20px] " },
                    React.createElement("div", { className: "h-[78px] bg-[#A6A6A6] rounded-t-[20px]" },
                        React.createElement("div", { className: 'flex justify-between py-[20px] px-[40px]' },
                            React.createElement("div", { className: 'flex text-[22px] text-white' },
                                React.createElement("p", null, "Product")),
                            React.createElement("div", { className: 'flex justify-between w-[290px] text-[22px] text-white gap-[44px]' },
                                React.createElement("p", null, "Price"),
                                React.createElement("p", null, "Quantity"),
                                React.createElement("p", null, "Total")))),
                    shopingCard.map(function (product) { return (React.createElement(ShoppingCardItem_1["default"], __assign({ key: product.id }, product))); }))),
            React.createElement("div", { className: 'w-[500px] h-[440px]  ' },
                React.createElement("div", { className: "h-[78px] bg-[#A6A6A6] rounded-t-[20px] flex items-center pl-[25px]" },
                    React.createElement("p", { className: 'text-white text-[20px]' }, "Cart Total")),
                React.createElement("div", { className: 'h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]' },
                    React.createElement("p", { className: 'text-black text-[20px]' }, "SUBTOTAL"),
                    React.createElement("p", { className: 'text-[#949494]' }, "400$")),
                React.createElement("div", { className: 'h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]' },
                    React.createElement("p", { className: 'text-black text-[20px]' }, "DISCOUNT"),
                    React.createElement("p", { className: 'text-[#949494]' }, "---")),
                React.createElement("div", { className: 'h-[90px] border border-1 border-[#DEDFE1] pl-[25px] flex items-center w-full justify-between pr-[25px]' },
                    React.createElement("p", { className: 'text-black text-[20px] ' }, "TOTAL"),
                    React.createElement("p", { className: 'text-[#949494]' },
                        totalPrice,
                        "$")),
                React.createElement("div", { className: 'h-[71px] bg-[#000000] rounded-b-[20px] flex items-center justify-center ' },
                    React.createElement("p", { className: 'text-white text-[16px] ' }, "Proceed To Checkout")))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = shoppingCart;
{
    /* <div className="mx-[80px] my-[50px]">
          {shopingCard.length ? (
            <ProductList
              products={shopingCard}
              setChooseProducts={() => {}}
              onRemoveProduct={removeFromCard}
            />
          ) : (
            <div className="mt-20 w-[200px] mx-auto text-center text-blue-600">
              Sorry, you dont have any items in your shopping card
            </div>
          )}
        </div> */
}
