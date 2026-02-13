// spec/convertTemp_spec.js

import { fahrenheitToCelsius } from '../src/ConvertTemp.js';

describe("Fahrenheit to Celsius converter", function() {
    
    it("tests freezing temp", function() {
        let temp = fahrenheitToCelsius(32);
        expect(temp).toBe(0);
    });

    it("tests boiling temp", function() {
        let temp = fahrenheitToCelsius(212);
        expect(temp).toBe(100);
    });

    it("tests room temp (70F)", function() {
        let temp = fahrenheitToCelsius(70);
        // Using toBeCloseTo because 70F is 21.111...C
        expect(temp).toBeCloseTo(21.11, 2); 
    });

});