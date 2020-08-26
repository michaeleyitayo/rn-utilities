import React from "react";
import { StyleSheet } from "react-native";
import { Clickable } from "../Clickable";
import { Row } from "../Row";
import { lightColor } from "../variables";

const Tablet = ({ children, selected, onClick, style }) => {
  return (
    <Clickable onClick={onClick}>
      <Row
        style={{
          ...styles.tablet,
          backgroundColor: selected ? lightColor : "#fff0",
          ...style,
        }}
      >
        {children}
      </Row>
    </Clickable>
  );
};

const styles = StyleSheet.create({
  tablet: {
    height: 40,
    width: 100,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Tablet };
