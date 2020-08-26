import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet } from "react-native";

const Row = ({
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
  let rowStyle = {};
  if (justifyCenter) {
    rowStyle.justifyContent = "center";
  } else if (justifyEvenly) {
    rowStyle.justifyContent = "space-evenly";
  } else if (justifyAround) {
    rowStyle.justifyContent = "space-around";
  } else if (justifyBetween) {
    rowStyle.justifyContent = "space-between";
  } else if (justifyEnd) {
    rowStyle.justifyContent = "flex-end";
  } else if (justifyStart) {
    rowStyle.justifyContent = "flex-start";
  }
  if (alignCenter) {
    rowStyle.alignItems = "center";
  } else if (alignEvenly) {
    rowStyle.alignItems = "space-evenly";
  } else if (alignAround) {
    rowStyle.alignItems = "space-around";
  } else if (alignBetween) {
    rowStyle.alignItems = "space-between";
  } else if (alignEnd) {
    rowStyle.alignItems = "flex-end";
  } else if (alignStart) {
    rowStyle.alignItems = "flex-start";
  }
  if (flexWrap) {
    rowStyle.flexWrap = "wrap";
  }
  return (
    <View style={{ ...styles.container, ...style, ...rowStyle }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
});

Row.propTypes = {};

export { Row };
