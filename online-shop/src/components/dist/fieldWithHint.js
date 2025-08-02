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
var icons_1 = require("@/images/icons");
function FieldWithHint(_a) {
    var isSearch = _a.isSearch, setIsSearch = _a.setIsSearch;
    var router = navigation_1.useRouter();
    var productArray = useFetch_1["default"]('https://dummyjson.com/products', useFetch_1.RequestTypes.GET).data;
    var _b = react_1.useState([]), products = _b[0], setProducts = _b[1];
    var _c = react_1.useState(null), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(''), inputValue = _d[0], setInputValue = _d[1];
    react_1.useEffect(function () {
        if (isSearch) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
        return function () {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isSearch]);
    react_1.useEffect(function () {
        if (productArray) {
            setProducts(productArray.products.map(function (item) { return (__assign(__assign({}, item), { label: item.title })); }));
        }
    }, [productArray]);
    return (React.createElement("div", { className: "flex items-center w-full border border-white rounded-[70px] h-[50px] px-[20px] gap-2 bg-transparent relative z-50" },
        React.createElement("div", { onClick: function () { return setIsSearch(false); }, className: "cursor-pointer" },
            React.createElement(icons_1.CrossIcon, null)),
        React.createElement(Autocomplete_1["default"], { freeSolo: true, options: products, value: value, inputValue: inputValue, onChange: function (_, newValue) {
                setValue(newValue);
                if (newValue) {
                    router.push("/productDetailPage/" + newValue.id);
                }
            }, onInputChange: function (_, newInputValue) {
                setInputValue(newInputValue);
            }, sx: { flexGrow: 1 }, componentsProps: {
                paper: {
                    sx: {
                        position: 'fixed',
                        top: '10px',
                        left: '-73px',
                        width: '100vw',
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadiusBottom: '16px',
                        zIndex: 9999,
                        maxHeight: '50vh',
                        overflowY: 'auto'
                    }
                }
            }, renderInput: function (params) { return (React.createElement(TextField_1["default"], __assign({}, params, { placeholder: "Search for...", autoFocus: !!isSearch, variant: "standard", InputProps: __assign(__assign({}, params.InputProps), { disableUnderline: true, sx: {
                        color: 'white',
                        '&::placeholder': {
                            color: 'white',
                            opacity: 1
                        },
                        '& input': {
                            color: 'white'
                        }
                    }, className: 'bg-transparent px-2' }) }))); } }),
        React.createElement(icons_1.SearchIcon, null)));
}
exports["default"] = FieldWithHint;
