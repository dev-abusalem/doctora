import { View, Text, Image } from "react-native";
import React from "react";

const DashHeader = () => {
  return (
    <View className="relative">
      <Image
        className="absolute top-0 right-0"
        alt="bar"
        source={require("../../../assets/images/dash.png")}
      />
      <View className="flex-row justify-between items-center  px-8 py-10">
        <Image
          className="w-5 h-5"
          alt="bar"
          source={require("../../../assets/images/bar.png")}
        />
        <View>
          <Text style={{ fontFamily: "Poppins-Regular" }}>Hello,</Text>
          <Text className="leading-4" style={{ fontFamily: "Poppins-Bold" }}>
            Emmanuel !
          </Text>
        </View>
        <Image
          className="w-10 h-10"
          alt="bar"
          source={require("../../../assets/images/me.png")}
        />
      </View>
    </View>
  );
};

export default DashHeader;
