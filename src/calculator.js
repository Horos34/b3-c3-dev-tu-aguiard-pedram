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

    puissance (a, b) {
        let sum = a
        for (let i = 1; i < b; i++) {
            sum *= a           
        }
        return sum
    }

    racine_carré (a) {
        if (a > -1) {
            let racine = 0
            for (let i = 1; i++;) {
                if (i*i === a) {
                    racine = i
                    break
                }
            }
            return racine
        } else {
            console.error("on ne peut trouver la racine carré d'un nombre négatif !");
        }
    }
}

module.exports = {
    Calculator: Calculator
}