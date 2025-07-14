"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var ProductList = function (_a) {
    var products = _a.products, setChooseProducts = _a.setChooseProducts, onRemoveProduct = _a.onRemoveProduct;
    return (react_1["default"].createElement(link_1["default"], { href: "/productDetailPage" },
        react_1["default"].createElement("div", { className: "flex flex-wrap gap-4 justify-between w-[1240] mx-auto" }, products.map(function (product, index) { return (react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-delay": 250 * index, key: product.id, className: "w-[286px] h-[430px] text-center p-2 mt-[30px]" },
            react_1["default"].createElement("div", { className: "w-[286px] h-[360px] bg-[#A6A6A6] rounded-[20px]" }, product.image),
            react_1["default"].createElement("h1", { className: "text-[22px] my-[12px]" }, product.title),
            react_1["default"].createElement("div", { className: "flex justify-between items-center" },
                react_1["default"].createElement("p", { className: "text-[14px] font-medium" },
                    "$",
                    product.price),
                react_1["default"].createElement("div", { className: 'flex gap-2' },
                    react_1["default"].createElement("div", { className: "w-6 h-6 rounded-full border border-black text-black flex justify-center items-center", onClick: function () { setChooseProducts(product); } }, "+"),
                    react_1["default"].createElement("div", { className: "w-6 h-6 rounded-full border border-black text-black flex justify-center items-center", onClick: function () { onRemoveProduct(product.id); } }, "-"))))); }))));
};
exports["default"] = ProductList;
