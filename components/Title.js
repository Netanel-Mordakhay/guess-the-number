import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    color: Colors.primary800,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 12,
  },
});

export default Title;
