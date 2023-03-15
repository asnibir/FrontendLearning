// module error given for es6 but not for es5

// import { Point } from "./point";
import { LikeComponent } from "./like.component";

// let point = new Point(1, 2);
// point.draw();

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);