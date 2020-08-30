import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";

const Layout = ({ noscroll, children, style }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {noscroll ? (
        <View style={{ ...styles.container, ...style }}>{children}</View>
      ) : (
        <ScrollView style={{ ...styles.container, ...style }}>
          {children}
        </ScrollView>
      )}
    </TouchableWithoutFeedback>
  );
};

export { Layout };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
