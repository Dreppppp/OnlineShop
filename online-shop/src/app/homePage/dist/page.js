'use client';
"use strict";
exports.__esModule = true;
var shoppingCardStore_1 = require("@/store/shoppingCardStore");
var Header_1 = require("@/components/Header");
var FeaturedProducts_1 = require("@/components/FeaturedProducts");
var Range_1 = require("@/components/Range");
var UniqueProportions_1 = require("@/components/UniqueProportions");
var Ongoings_1 = require("@/components/Ongoings");
var Footer_1 = require("@/components/Footer");
var ShoppingCardIcon_1 = require("@/components/ShoppingCardIcon");
var useAnimaton_1 = require("@/hooks/useAnimaton");
function mainPage() {
    var _a = shoppingCardStore_1.useShopingCatdStore(), shopingCard = _a.shopingCard, addToCard = _a.addToCard, removeFromCard = _a.removeFromCard;
    console.log(shopingCard);
    var onSelectProduct = function (product) {
        addToCard(product);
    };
    var onRemoveProduct = function (id) {
        removeFromCard(id);
    };
    var isDisappearAnimationAdded = useAnimaton_1["default"](1000, shopingCard).isDisappearAnimationAdded;
    console.log('isDisappearAnimationAdded', isDisappearAnimationAdded);
    return (React.createElement("div", null,
        React.createElement(Header_1["default"], null),
        React.createElement(FeaturedProducts_1["default"], null),
        React.createElement(Range_1["default"], null),
        React.createElement(UniqueProportions_1["default"], null),
        React.createElement(Ongoings_1["default"], null),
        React.createElement(Footer_1["default"], null),
        React.createElement(ShoppingCardIcon_1["default"], { className: shopingCard.length > 0 ? 'opacity-100' : '', disappearAnimation: isDisappearAnimationAdded ? 'animate-smooth-disappear' : '' })));
}
exports["default"] = mainPage;
