import { View, TextInput, Text } from "react-native";
import { s } from "./input.style.js";

const Input = ({ value, setValue, unit }) => {
  return (
    <View>
      <TextInput
        style={s.input}
        placeholder="Type your temperature"
        maxLength={3}
        keyboardType="numbers-and-punctuation"
        defaultValue={value.toString()}
        onChangeText={(text) => setValue(text)}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
