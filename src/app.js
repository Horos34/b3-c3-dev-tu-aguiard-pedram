class Cube {
    constructor(sides) {
        this.sides = sides;
    }
    
    getSideLength () {
        return this.sides;
    }
    
    getSurfaceArea () {
        return (this.sides * this.sides) * 6;
    }
    
    getVolume () {
        return Math.pow(this.sides,3);
    }
}

class Triangle {

    sides = {
        a: 0,
        b: 0,
        c: 0,
    }

    constructor(a, b, c) {
        this.sides.a = a;
        this.sides.b = b;
        this.sides.c = c;      
    }

    getArrayOfSides () {
        let array = []
        for (const val of Object.values(this.sides)) {
            array.push(val)
        }
        return array
    }
    
    getTotalLength () {
        return this.sides.a + this.sides.b + this.sides.c;
    }

    getLongestSide () {
        let sidesList = this.getArrayOfSides()
        return Math.max(...sidesList)
    }

    isRightAngledTriangle() {
        let longestSide = this.getLongestSide()
        let totalLength = this.getTotalLength()
        if (longestSide === (totalLength - longestSide)) {
            return true
        } else {
            return false
        }
    }
    
    getSurfaceArea () {
        let totalLength = this.getTotalLength()
        let s = 0.5 *  totalLength; // demi-périmètre
        let aire = Math.sqrt(s * (s - this.sides.a) * (s - this.sides.b) * (s - this.sides.c))

        return (Math.round(aire*100))/100
    }   
    
    getVolume () {
        return Math.pow(this.sides,3);
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle,
}