import { Text } from "react-native";
import { s } from "./temperature.style";

const Temperature = ({ temp, unit }) => {
  return (
    <Text style={s.temp}>
      {temp} {unit}
    </Text>
  );
};

export default Temperature;
