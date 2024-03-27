import hotBg from "../assets/hot.png";
import coldBg from "../assets/cold.png";

export const Units = {
  celsius: "°C",
  fahrenheit: "°F",
};

export function convertTemperatureTo(temp, unit) {
  if (unit === Units.celsius) {
    return ((temp - 32) * 5) / 9;
  } else if (unit === Units.fahrenheit) {
    return (temp * 9) / 5 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

export function getOppositeUnit(unit) {
  if (unit === Units.celsius) {
    return Units.fahrenheit;
  } else if (unit === Units.fahrenheit) {
    return Units.celsius;
  } else {
    throw new Error("Invalid unit");
  }
}

export function isIceTemp(temp, unit) {
  if (unit === Units.celsius && temp <= 0) return coldBg;
  if (unit === Units.fahrenheit && temp <= 32) return coldBg;
  return hotBg;
}
