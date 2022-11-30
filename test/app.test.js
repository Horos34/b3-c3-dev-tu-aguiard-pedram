const { Calculator } = require('../src/calculator');
const expect = require('chai').expect;

describe('Testing Functions of Classes', function() {

    it('1. Addition à 2 arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.addition(5, 8)).to.equal(13);
        done();
    });

    it('2. Addition à N arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.addition(5, 8, 5, 8, 5, 8)).to.equal(39);
        done();
    });

    it('1. Soustraction à 2 arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.soustraction(5, 8)).to.equal(-3);
        done();
    });

    it('2. Soustraction à N arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.soustraction(5, 8, 5, 8, 5, 8)).to.equal(-29);
        done();
    });

    it('1. Multiplication à 2 arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.multiplication(5, 8)).to.equal(40);
        done();
    });

    it('2. Multiplication à N arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.multiplication(5, 8, 5, 8, 5, 8)).to.equal(64000);
        done();
    });

    it('1. Division à 2 arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.division(5, 8)).to.equal(0.625);
        done();
    });

    it('2. Division à N arguments', function(done) {
        let c1 = new Calculator();
        expect(c1.division(50, 65, 10)).to.equal(0.07692);
        done();
    });

    it('1. Pourcentage', function(done) {
        let c1 = new Calculator();
        expect(c1.pourcent(15, 5)).to.equal(33.33);
        done();
    });

    it('1. Carré', function(done) {
        let c1 = new Calculator();
        expect(c1.carré(25, 1)).to.equal(25);
        done();
    });
    
});