// spec/cubeVolume_spec.js

import { cubeVolume } from '../src/CubeVolume.js';

describe("Cube volume calculator", function() {
    
    it("returns 0 when the height is 0", function() {
        let volume = cubeVolume(0);
        expect(volume).toBe(0);
    });

    it("calculates the volume correctly for a height of 2", function() {
        // 2 * 2 * 2 = 8
        let volume = cubeVolume(2);
        expect(volume).toBe(8);
    });

    it("calculates the volume correctly for a height of 3", function() {
        // 3 * 3 * 3 = 27
        let volume = cubeVolume(3);
        expect(volume).toBe(27);
    });

});