import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const icon = require("./assets/icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aqui!</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
