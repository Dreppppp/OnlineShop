"use strict";
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var Product_1 = require("./Product");
function FeaturedProducts() {
    var featuredProducts = [
        {
            id: 1,
            title: 'Кружка',
            price: 15,
            image: null,
            count: 1
        },
        {
            id: 2,
            title: 'Футболка',
            price: 25,
            image: null,
            count: 1
        },
        {
            id: 3,
            title: 'Штаны',
            price: 30,
            image: null,
            count: 1
        },
        {
            id: 4,
            title: 'Шорты',
            price: 20,
            image: null,
            count: 1
        },
    ];
    var _a = shoppingCardStore_1.useShopingCatdStore(), addToCard = _a.addToCard, onReduceItemCount = _a.onReduceItemCount;
    var onSelectProduct = function (product) {
        addToCard(product);
    };
    var onRemoveProduct = function (id) {
        onReduceItemCount(id);
    };
    return (React.createElement("div", null,
        React.createElement("div", { "data-aos": "fade-up", className: "w-[1240px] mx-[auto] flex justify-between mb-[36px] mt-[100px]" },
            React.createElement("h1", { "data-aos": "fade-up", className: "text-[36px] font-medium " }, "Featured Products"),
            React.createElement("p", { "data-aos": "fade-up", className: "text-[#666666] text-[16px] w-[507px] text-center" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.")),
        React.createElement(Product_1["default"], { products: featuredProducts, setChooseProducts: onSelectProduct, onRemoveProduct: onRemoveProduct })));
}
exports["default"] = FeaturedProducts;
