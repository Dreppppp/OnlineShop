"use strict";
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var Product_1 = require("./Product");
var icons_1 = require("@/images/icons");
var link_1 = require("next/link");
function FeaturedProducts(_a) {
    var data = _a.data;
    var _b = shoppingCardStore_1.useShopingCatdStore(), addToCard = _b.addToCard, onReduceItemCount = _b.onReduceItemCount;
    var onSelectProduct = function (product) {
        addToCard(product);
    };
    var onRemoveProduct = function (id) {
        onReduceItemCount(id);
    };
    return (React.createElement("div", { className: 'w-[1240px] mx-auto' },
        React.createElement("div", { "data-aos": "fade-up", className: "flex justify-between mb-[36px] mt-[100px]" },
            React.createElement("h1", { "data-aos": "fade-up", className: "text-[36px] font-medium " }, "Featured Products"),
            React.createElement(link_1["default"], { href: "/products" },
                React.createElement("button", { "data-aos": "fade-up", "data-aos-delay": 500, className: "w-[181px] h-[59px] bg-[#282828] text-[white] rounded-[50px] flex justify-between items-center px-[22px]" },
                    React.createElement("p", null, "All products"),
                    React.createElement(icons_1.ArrowRightIcon, null)))),
        React.createElement(Product_1["default"], { products: data, setChooseProducts: onSelectProduct, page: "featured" })));
}
exports["default"] = FeaturedProducts;
