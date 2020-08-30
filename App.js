import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import * as UI from "./lib/new";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <UI.Layout noscroll style={styles.container}>
      <UI.Spacer large />
      <TextInput />
      <UI.Button style={styles.btn} onClick={() => console.log("Checking")}>
        <UI.Text color="#fff" h1>
          Button
        </UI.Text>
      </UI.Button>
    </UI.Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    padding: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
});
