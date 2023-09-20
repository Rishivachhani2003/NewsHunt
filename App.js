import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
export default function App() {
  return (
    // <View style={styles.container}>
    <>
      {/* <Text>Hello !</Text> */}
      {/* <StatusBar style="auto" /> */}
      <DrawerNavigator />
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
