// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as UI from "./lib/new";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

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
    <View style={styles.container}>
      <UI.Text textJustify>
        Open up App.js to start working on your app!
      </UI.Text>
      <UI.Button style={styles.btn} onClick={() => console.log("Checking")}>
        <UI.Text color="#fff" h1>
          Button
        </UI.Text>
      </UI.Button>
      <StatusBar style={styles.statusBar} backgroundColor="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
