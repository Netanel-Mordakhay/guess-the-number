import { StyleSheet, View } from "react-native";
import Colors from "../utils/colors";

function CardContainer({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 25,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default CardContainer;
