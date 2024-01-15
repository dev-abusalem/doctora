import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View className="flex">
      <View className="flex-row gap-2 items-center">
        <Image
          alt="doctor-welcome"
          source={require("../../assets/images/fab.png")}
        />
        <Text
          style={{ fontFamily: "Poppins-Bold" }}
          className="text-[25px] text-dprimary"
        >
          CONSULT
        </Text>
      </View>
    </View>
  );
};

export default Logo;
