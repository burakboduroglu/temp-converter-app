import { TouchableOpacity, Text } from "react-native";
import { s } from "./convert.style.js";

const Convert = ({ unit, onPress }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
};

export default Convert;
