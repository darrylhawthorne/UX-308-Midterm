// spec/earthquake_spec.js

import { earthquakeDamage } from '../src/earthquake.js';

describe("Earthquake damage categorizer", function() {
    
    it("returns correct string for intensity under 5", function() {
        let result = earthquakeDamage(4.2);
        expect(result).toBe("Little or no damage");
    });

    it("returns correct string for intensity between 5 and 5.5", function() {
        let result = earthquakeDamage(5.0);
        expect(result).toBe("Some damage");
    });

    it("returns correct string for intensity between 5.5 and 6.5", function() {
        let result = earthquakeDamage(6.1);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });

    it("returns correct string for intensity between 6.5 and 7.5", function() {
        let result = earthquakeDamage(7.0);
        expect(result).toBe("Disaster: buildings may collapse");
    });

    it("returns correct string for intensity over 7.5", function() {
        let result = earthquakeDamage(8.2);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    });

});