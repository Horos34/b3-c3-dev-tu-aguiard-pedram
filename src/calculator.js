class Calculator {
    addition(a, b, ...c) {
        if (c) {
            let sum = a + b 
            for (let i = 0; i < c.length; i++) {
                sum += c[i];    
            }           
            return sum
        } else {
            return a + b
        }
    }  
    
    soustraction (a, b, ...c) {
        if (c) {
            let sum = a - b
            for (let i = 0; i < c.length; i++) {
                sum -= c[i];    
            }           
            return sum
        } else {
            return a - b
        }
    }

    multiplication (a, b, ...c) {
        if (c) {
            let sum = a * b
            for (let i = 0; i < c.length; i++) {
                sum *= c[i];    
            }           
            return sum
        } else {
            return a * b
        }
    }

    division (a, b, ...c) {
        if (c) {
            let sum = a / b
            for (let i = 0; i < c.length; i++) {
                sum /= c[i];    
            }           
            return (Math.round(sum*100000))/100000
        } else {
            return a / b
        }
    }

    pourcent (a, b) {
        let percent = (b * 100) / a
        return (Math.round(percent*100))/100
    }

    carré (a, b) {
        let sum = a
        for (let i = 1; i < b; i++) {
            sum *= a           
        }
        return sum
    }
}

module.exports = {
    Calculator: Calculator
}