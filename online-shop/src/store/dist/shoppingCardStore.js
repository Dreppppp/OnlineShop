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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useShopingCatdStore = void 0;
var zustand_1 = require("zustand");
exports.useShopingCatdStore = zustand_1.create()(function (set) { return ({
    shopingCard: [
        { id: 1, title: 'Кружка', price: 15, image: null, count: 1 },
        { id: 2, title: 'Футболка', price: 25, image: null, count: 1 },
    ],
    onIncreaseItemCount: function (id) {
        return set(function (state) { return ({
            shopingCard: state.shopingCard.map(function (product) {
                return product.id === id ? __assign(__assign({}, product), { count: product.count + 1 }) : product;
            })
        }); });
    },
    onReduceItemCount: function (id) {
        return set(function (state) { return ({
            shopingCard: state.shopingCard
                .map(function (product) { return (product.id === id ? __assign(__assign({}, product), { count: product.count - 1 }) : product); })
                .filter(function (_a) {
                var count = _a.count;
                return !!count;
            })
        }); });
    },
    addToCard: function (product) {
        return set(function (state) {
            var productIndex = state.shopingCard.findIndex(function (item) { return item.id === product.id; });
            if (productIndex > -1) {
                var findedProduct = state.shopingCard[productIndex];
                findedProduct.count += 1;
                var shopingCardCopy = structuredClone(state.shopingCard);
                shopingCardCopy.splice(productIndex, 1, findedProduct);
                return ({
                    shopingCard: shopingCardCopy
                });
            }
            return { shopingCard: __spreadArrays([product], state.shopingCard) };
        });
    },
    removeFromCard: function (ID) {
        return set(function (state) { return ({ shopingCard: state.shopingCard.filter(function (_a) {
                var id = _a.id;
                return id !== ID;
            }) }); });
    }
}); });
