"use strict";
exports.__esModule = true;
var bedroomFurniture_png_1 = require("../images/bedroomFurniture.png");
var livingRoom_png_1 = require("../images/livingRoom.png");
var diningRoom_png_1 = require("../images/diningRoom.png");
var sofaSetsFurniture_png_1 = require("../images/sofaSetsFurniture.png");
function Range() {
    console.log(bedroomFurniture_png_1["default"]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "w-[609px] h-[109px] text-center mx-[auto] mt-[90px]" },
            React.createElement("h1", { "data-aos": "fade-up", className: "text-[36px] font-medium " }, "View Our Range Of Categories"),
            React.createElement("p", { "data-aos": "fade-up", className: "text-[#666666] text-[16px] text-center" }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.")),
        React.createElement("div", { className: "w-[1240px] flex justify-between mx-auto mt-[68px]" },
            React.createElement("div", { className: "w-[392] h-[513px] rounded-[20px] relative" },
                React.createElement("img", { src: bedroomFurniture_png_1["default"].src, alt: "bedroom", className: "w-full h-full object-cover absolute inset-0 rounded-[20px]" }),
                React.createElement("p", { className: "text-white text-[22px] absolute bottom-[25px] left-[25px]" }, "Bedroom Furniture")),
            React.createElement("div", null,
                React.createElement("div", { "data-aos": "fade-right", "data-aos-delay": 700, className: "w-[392] h-[240px] bg-[#A6A6A6] rounded-[20px] relative" },
                    React.createElement("img", { src: livingRoom_png_1["default"].src, alt: "living room", className: "w-full h-full object-cover absolute inset-0 rounded-[20px]" }),
                    React.createElement("p", { className: "text-white text-[22px] absolute bottom-[25px] left-[25px]" }, "Living Room Furniture")),
                React.createElement("div", null,
                    React.createElement("div", { "data-aos": "fade-left", "data-aos-delay": 500, className: "w-[392] h-[240px] bg-[#A6A6A6] rounded-[20px] relative mt-[33px]  " },
                        React.createElement("img", { src: diningRoom_png_1["default"].src, alt: "dining room", className: "w-full h-full object-cover absolute inset-0 rounded-[20px]" }),
                        React.createElement("p", { className: "text-white text-[22px] absolute bottom-[25px] left-[25px]" }, "Dinning Room Furniture")))),
            React.createElement("div", { "data-aos": "fade-left", "data-aos-delay": 450, className: "w-[392] h-[513px] bg-[#A6A6A6] rounded-[20px] relative" },
                React.createElement("img", { src: sofaSetsFurniture_png_1["default"].src, alt: "sofaSets", className: "w-full h-full object-cover absolute inset-0 rounded-[20px]" }),
                React.createElement("p", { className: "text-white text-[22px] absolute bottom-[25px] left-[25px]" }, "Sofa Sets")))));
}
exports["default"] = Range;
