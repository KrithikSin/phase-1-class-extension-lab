// Your code here
class Polygon {
    constructor(sidesOfShape) {
        this.sidesOfShape = sidesOfShape;
    }

    get countSides() {
        const amountOfSides = this.sidesOfShape.length;
        return amountOfSides;
    }

    get perimeter() {
        const perimeter = this.sidesOfShape.reduce((accumulator, currValue) => {
            return accumulator + currValue;
        });
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (
            this.sidesOfShape[0] + this.sidesOfShape[1] >
                this.sidesOfShape[2] &&
            this.sidesOfShape[1] + this.sidesOfShape[2] >
                this.sidesOfShape[0] &&
            this.sidesOfShape[0] + this.sidesOfShape[2] > this.sidesOfShape[1]
        ) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    // [4, 4, 4, 4]
    get isValid() {
        if (
            this.sidesOfShape[0] === this.sidesOfShape[1] &&
            this.sidesOfShape[0] === this.sidesOfShape[2] &&
            this.sidesOfShape[0] === this.sidesOfShape[3]
        ) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sidesOfShape[0] * this.sidesOfShape[1];
    }
}
