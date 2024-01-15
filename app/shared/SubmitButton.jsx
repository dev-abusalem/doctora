import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { font } from "./Button";

const SubmitButton = ({ title }) => {
  function handlePress() {
    alert("Login Button Pressed");
  }

  return (
    <TouchableOpacity
      className="bg-dprimary px-16 py-3 w-full rounded-2xl"
      onPress={handlePress}
    >
      <Text
        style={{ fontFamily: "Poppins-Medium" }}
        className="text-center text-xl text-dwhite uppercase "
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
