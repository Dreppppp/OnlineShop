'use client';
"use strict";
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var Header_1 = require("@/components/Header");
var FeaturedProducts_1 = require("@/components/FeaturedProducts");
var Range_1 = require("@/components/Range");
var UniqueProportions_1 = require("@/components/UniqueProportions");
var Footer_1 = require("@/components/Footer");
var useAnimaton_1 = require("@/hooks/useAnimaton");
var useFetch_1 = require("@/hooks/useFetch");
var LoaderGif_1 = require("@/components/LoaderGif");
function mainPage() {
    var _a = useFetch_1["default"]('https://dummyjson.com/products/?limit=8', useFetch_1.RequestTypes.GET), isLoading = _a.isLoading, error = _a.error, data = _a.data;
    console.log(data);
    var shopingCard = shoppingCardStore_1.useShopingCatdStore().shopingCard;
    var isDisappearAnimationAdded = useAnimaton_1["default"](1000, shopingCard).isDisappearAnimationAdded;
    if (isLoading)
        return React.createElement("div", null,
            React.createElement(LoaderGif_1["default"], null));
    if (error)
        return React.createElement("div", null, "Some went wrong...");
    return (React.createElement("div", null,
        React.createElement(Header_1["default"], null),
        React.createElement(FeaturedProducts_1["default"], { data: (data === null || data === void 0 ? void 0 : data.products) || [] }),
        React.createElement(UniqueProportions_1["default"], null),
        React.createElement(Range_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = mainPage;
