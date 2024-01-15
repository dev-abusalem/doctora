import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <View>
      <View className="flex-row justify-between items-start pb-6">
        <View className="mt-[15%] px-8">
          <Logo />
        </View>
        <Image
          source={require("../../assets/images/circle.png")}
          className="absolute right-0 top-0 z-50"
        />
      </View>
    </View>
  );
};

export default Header;
