import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const Button = ({ children, style, onClick, activeOpacity }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ? activeOpacity : 0.8}
      onPress={onClick}
    >
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({});
