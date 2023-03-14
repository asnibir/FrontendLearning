// Arrow Function
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
// Interfaces
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
var drawPoint2D = function (point) {
    // ...
};
// Class, Object
var Point2D = /** @class */ (function () {
    function Point2D() {
    }
    Point2D.prototype.draw2D = function () {
        console.log('X: ' + this.x + "," + " Y: " + this.y);
    };
    Point2D.prototype.getDistance = function (another) {
        //...
    };
    return Point2D;
}());
var point = new Point2D();
point.x = 1;
point.y = 2;
point.draw2D();
// Constructor, properties
var Point3D = /** @class */ (function () {
    // private x: number;
    // private y: number;
    // private z: number;
    function Point3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // this.x = x;
        // this.y = y;
        // this.z = z;
    }
    Point3D.prototype.draw = function () {
        console.log("X=".concat(this.x, ", Y=").concat(this.y, ", Z=").concat(this.z));
    };
    Object.defineProperty(Point3D.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value == undefined) {
                throw new Error('Value is undefined.');
            }
            if (value < 0) {
                throw new Error('Value cannot be less than 0.');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point3D;
}());
var point3D = new Point3D(10, 15, 20);
var point3D2 = new Point3D();
point3D.draw();
point3D2.draw();
var x = point3D.X;
console.log("X = " + x);
point3D2.X = 100;
point3D2.draw();
