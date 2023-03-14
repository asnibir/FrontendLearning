// Arrow Function
let log = function(message) {
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

// Interfaces
let drawPoint = (point: { x:number, y:number }) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})

interface Point2D {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint2D = (point: Point2D) => {
    // ...
}

// Class, Object
class Point2D {
    x: number;
    y: number;

    draw2D(){
        console.log('X: ' + this.x +"," + " Y: " + this.y);
    }

    getDistance(another: Point2D){
        //...
    }
}

let point = new Point2D();
point.x = 1;
point.y = 2;
point.draw2D();


// Constructor, properties
class Point3D {
    // private x: number;
    // private y: number;
    // private z: number;

    constructor(private x?: number, private y?: number, private z?: number) {   // optional not need to give the type
        // this.x = x;
        // this.y = y;
        // this.z = z;
    }

    draw() {
        console.log(`X=${this.x}, Y=${this.y}, Z=${this.z}`);
    }

    get X() {
        return this.x;
    }

    set X(value){

        if(value == undefined){
            throw new Error('Value is undefined.');
        }

        if(value < 0){
            throw new Error('Value cannot be less than 0.');
        }
        this.x = value;
    }

}
let point3D = new Point3D(10, 15, 20);
let point3D2 = new Point3D();
point3D.draw();
point3D2.draw();

let x = point3D.X;
console.log("X = " + x);

point3D2.X = 100;
point3D2.draw();