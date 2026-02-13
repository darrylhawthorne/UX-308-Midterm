// src/GymCost.js

export function calculateGymCost(cost, friends) {
    let discount = 0; // Default to 0% discount

    if (friends === 1) {
        discount = 0.05;
    } else if (friends === 2) {
        discount = 0.10;
    } else if (friends >= 3) {
        discount = 0.15;
    }

    // Calculate final price: cost minus the discount amount
    let finalCost = cost - (cost * discount);
    return finalCost;
}