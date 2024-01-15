import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, navigation, screen }) => {
  function handlePress() {
    navigation.navigate(screen);
  }

  return (
    <TouchableOpacity
      className="bg-dprimary px-16 py-3 w-full rounded-2xl"
      onPress={handlePress}
    >
      <Text
        style={{ fontFamily: "Poppins-Medium" }}
        className="text-center text-xl text-dwhite uppercase"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const font = StyleSheet.create({
  fontsemibold: {
    fontFamily: "psemibold",
  },
  fontbold: {
    fontFamily: "pbold",
  },
  fontregular: {
    fontFamily: "pregular",
  },
  fontmedium: {
    fontFamily: "pmedium",
  },
});

export default Button;
