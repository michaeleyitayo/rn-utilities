import React from "react";
import { StyleSheet, Text as TXT } from "react-native";
import {
  defaultFontSize,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  smallFontSize,
  fontFamilyBold,
  fontFamilyNormal,
} from "./config";

//

const Text = ({
  children,
  style,
  size,
  h1,
  h2,
  h3,
  h4,
  small,
  normal,
  bold,
  color,
  textCenter,
  textRight,
  textJustify,
  numberOfLines,
  underlined,
  lineThrough,
}) => {
  //
  const styles = StyleSheet.create({
    txt: {
      fontSize: size
        ? size
        : h1
        ? h1FontSize
        : h2
        ? h2FontSize
        : h3
        ? h3FontSize
        : h4
        ? h4FontSize
        : small
        ? smallFontSize
        : defaultFontSize,
      fontFamily: normal
        ? fontFamilyNormal
        : bold
        ? fontFamilyBold
        : h1
        ? fontFamilyBold
        : h2
        ? fontFamilyBold
        : h3
        ? fontFamilyBold
        : h4
        ? fontFamilyBold
        : fontFamilyNormal,
      color: color,
      fontWeight:
        normal && !fontFamilyNormal
          ? "normal"
          : bold && !fontFamilyBold
          ? "bold"
          : h1 && !fontFamilyBold
          ? "bold"
          : h2 && !fontFamilyBold
          ? "bold"
          : h3 && !fontFamilyBold
          ? "bold"
          : h4 && !fontFamilyBold
          ? "bold"
          : "normal",
      textAlign: textCenter
        ? "center"
        : textRight
        ? "right"
        : textJustify
        ? "justify"
        : "left",
      textDecorationLine: lineThrough
        ? "line-through"
        : underlined
        ? "underline"
        : "none",
    },
  });
  //
  return (
    <TXT style={{ ...styles.txt, ...style }} numberOfLines={numberOfLines}>
      {children}
    </TXT>
  );
};

export { Text };
