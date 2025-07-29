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
var React = require("react");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var TextField_1 = require("@mui/material/TextField");
var useFetch_1 = require("@/hooks/useFetch");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
function FieldWithHint() {
    var router = navigation_1.useRouter();
    var productArray = useFetch_1["default"]('https://dummyjson.com/products', useFetch_1.RequestTypes.GET).data;
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    react_1.useEffect(function () {
        if (productArray) {
            setProducts(function () {
                return productArray.products.map(function (item) { return (__assign(__assign({}, item), { label: item.title })); });
            });
        }
    }, [productArray]);
    return (React.createElement(Autocomplete_1["default"], { onChange: function (_, value) {
            router.push("/productDetailPage/" + value.id);
        }, disablePortal: true, options: products, sx: { width: 300 }, renderInput: function (params) { return React.createElement(TextField_1["default"], __assign({}, params, { label: "Movie" })); } }));
}
exports["default"] = FieldWithHint;
