// src/convertTemp.js

export function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}