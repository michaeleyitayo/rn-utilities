import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet } from "react-native";

const Col = ({
  children,
  style,
  justifyCenter,
  justifyEvenly,
  justifyAround,
  justifyBetween,
  justifyEnd,
  justifyStart,
  alignCenter,
  alignEvenly,
  alignAround,
  alignBetween,
  alignEnd,
  alignStart,
  flexWrap,
}) => {
  let ColStyle = {};
  if (justifyCenter) {
    ColStyle.justifyContent = "center";
  } else if (justifyEvenly) {
    ColStyle.justifyContent = "space-evenly";
  } else if (justifyAround) {
    ColStyle.justifyContent = "space-around";
  } else if (justifyBetween) {
    ColStyle.justifyContent = "space-between";
  } else if (justifyEnd) {
    ColStyle.justifyContent = "flex-end";
  } else if (justifyStart) {
    ColStyle.justifyContent = "flex-start";
  }
  if (alignCenter) {
    ColStyle.alignItems = "center";
  } else if (alignEvenly) {
    ColStyle.alignItems = "space-evenly";
  } else if (alignAround) {
    ColStyle.alignItems = "space-around";
  } else if (alignBetween) {
    ColStyle.alignItems = "space-between";
  } else if (alignEnd) {
    ColStyle.alignItems = "flex-end";
  } else if (alignStart) {
    ColStyle.alignItems = "flex-start";
  }
  if (flexWrap) {
    ColStyle.flexWrap = "wrap";
  }
  return (
    <View style={{ ...styles.container, ...style, ...ColStyle }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

Col.propTypes = {};

export { Col };
