'use client';
"use strict";
exports.__esModule = true;
var Menu_1 = require("@/components/Menu");
var useFetch_1 = require("@/hooks/useFetch");
var icons_1 = require("@/images/icons");
var react_1 = require("react");
var Product_1 = require("@/components/Product");
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
function page() {
    var _a;
    var addToCard = shoppingCardStore_1.useShopingCatdStore().addToCard;
    var onSelectProduct = function (product) {
        addToCard(product);
    };
    var _b = react_1.useState(''), selectedProduct = _b[0], setSelectedProduct = _b[1];
    var _c = react_1.useState(false), isChecked = _c[0], setIsChecked = _c[1];
    // let { isLoading, error, data:categoriesProduct } = useFewFetch<any[]>([
    //   `https://dummyjson.com/products/category/${selectedProduct}`
    // ]);
    // if (isLoading) {
    //   return <Loader />;
    // }
    var categories = useFetch_1["default"]('https://dummyjson.com/products/categories', useFetch_1.RequestTypes.GET).data;
    var productArray = useFetch_1["default"]('https://dummyjson.com/products', useFetch_1.RequestTypes.GET).data;
    var categoriesProduct = useFetch_1["default"]("https://dummyjson.com/products/category/" + selectedProduct, useFetch_1.RequestTypes.GET).data;
    var products = selectedProduct ? categoriesProduct : productArray;
    return (React.createElement("div", null,
        React.createElement(Menu_1["default"], { showStickyLogo: true }),
        React.createElement("div", { className: "flex justify-between px-[90px] mt-[100px]" },
            React.createElement("div", { className: "w-[286px] h-fit border border-1 border-[#E2E2E2] mt-[15px]" },
                React.createElement("div", { className: "flex mt-[40px] items-center" },
                    React.createElement("div", { className: "h-[24px] w-[3px] bg-black ml-[30px]" }),
                    React.createElement("p", { className: "text-[22px] ml-[17px]" }, "Categories")),
                categories &&
                    categories.map(function (_a) {
                        var name = _a.name;
                        return (React.createElement("div", { className: "ml-[27px] text-[18px] flex items-center mt-[20px]" },
                            React.createElement("input", { type: "checkbox", className: "size-[15px]", onChange: function () {
                                    setSelectedProduct(name);
                                } }),
                            React.createElement("p", { className: "pl-[10px]" }, name)));
                    })),
            React.createElement("div", { className: "w-[1240] pl-[5 0px]" },
                React.createElement("div", { className: "w-[930px] pl-[250px]" },
                    React.createElement("h1", { className: "text-[black] text-[36px] mb-[25px]" }, "Our Collection Of Products"),
                    React.createElement("div", { className: "w-[930px] h-[56px] rounded-[30px] border border-1 border-[#E2E2E2] flex justify-between items-center pl-[15px] pr-[10px]" },
                        React.createElement("input", { type: "text", placeholder: "Search An Item", className: "w-[850px] text-[20px] border-none outline-none" }),
                        React.createElement("div", { className: "h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center" },
                            React.createElement(icons_1.SearchIcon, null)))),
                React.createElement("div", { className: "" },
                    React.createElement(Product_1["default"], { products: ((_a = products === null || products === void 0 ? void 0 : products.products) !== null && _a !== void 0 ? _a : []), setChooseProducts: onSelectProduct, page: "featured" }))))));
}
exports["default"] = page;
