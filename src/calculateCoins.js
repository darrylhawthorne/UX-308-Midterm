// src/calculateCoins.js

export function calculateCoins (nickels, dimes, quarters, loonies, toonies) {
    // Calculate total in cents to avoid JavaScript floating-point errors
    let totalCents = (nickels * 5) + (dimes * 10) + (quarters * 25) + (loonies * 100) + (toonies * 200);
    // Convert back to dollars
    return totalCents / 100;
}