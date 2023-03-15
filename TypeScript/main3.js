"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Point } from "./point";
var like_component_1 = require("./like.component");
// let point = new Point(1, 2);
// point.draw();
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
