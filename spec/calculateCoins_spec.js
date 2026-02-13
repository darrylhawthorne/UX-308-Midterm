// spec/calculateCoins_spec.js

import { calculateCoins } from '../src/calculateCoins.js';

describe("calculateCoins function", function() {
    
    it("returns 0 when given 0 of all coins", function() {
        let total = calculateCoins(0, 0, 0, 0, 0);
        expect(total).toBe(0);
    });

    it("calculates the total correctly with 1 of each coin", function() {
        // 0.05 + 0.10 + 0.25 + 1.00 + 2.00 = 3.40
        let total = calculateCoins(1, 1, 1, 1, 1);
        expect(total).toBe(3.40);
    });

    it("calculates a random assortment of coins correctly", function() {
        // 2 nickels (0.10) + 0 dimes (0) + 4 quarters (1.00) + 2 loonies (2.00) + 1 toonie (2.00) = 5.10
        let total = calculateCoins(2, 0, 4, 2, 1);
        expect(total).toBe(5.10);
    });

});