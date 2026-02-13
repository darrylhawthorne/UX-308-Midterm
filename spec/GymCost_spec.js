// spec/calculateGymCost_spec.js

import { calculateGymCost } from '../src/GymCost.js';

describe("Gym membership cost calculator", function() {
    
    it("calculates cost with 1 friend (5% discount)", function() {
        let finalCost = calculateGymCost(100, 1);
        expect(finalCost).toBe(95);
    });

    it("calculates cost with 2 friends (10% discount)", function() {
        let finalCost = calculateGymCost(100, 2);
        expect(finalCost).toBe(90);
    });

    it("calculates cost with 3 friends (15% discount max)", function() {
        let finalCost = calculateGymCost(100, 3);
        expect(finalCost).toBe(85);
    });

    it("calculates cost with 4 friends (still 15% discount)", function() {
        let finalCost = calculateGymCost(100, 4);
        expect(finalCost).toBe(85);
    });

});