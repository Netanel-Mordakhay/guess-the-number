import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 18,
  },
});

export default InstructionText;
