import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style.js";
import { View, ImageBackground } from "react-native";
import hotBg from "./assets/hot.png";
import coldBg from "./assets/cold.png";
import Input from "./components/input/input.jsx";
import { useState } from "react";
import Temperature from "./components/temperature/temperature.jsx";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemp,
} from "./utils/temperature.js";
import Convert from "./components/convert/convert.js";

export default function App() {
  const [temp, setTemp] = useState(0);
  const [unit, setUnit] = useState("°C");

  return (
    <ImageBackground style={s.bgImage} source={isIceTemp(temp, unit)}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Temperature
              temp={convertTemperatureTo(temp, getOppositeUnit(unit)).toFixed(
                2
              )}
              unit={getOppositeUnit(unit)}
            />
            <Input value={temp} setValue={setTemp} unit={unit} />
            <Convert
              unit={getOppositeUnit(unit)}
              onPress={() => {
                setUnit(getOppositeUnit(unit));
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
