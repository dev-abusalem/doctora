import { View, Text, Image } from "react-native";
import React from "react";

const SingleDoctorHeader = ({ docinfo }) => {
  return (
    <View className="-mt-10">
      <Image source={require("../../../assets/images/single-dr.png")} />
      <View className="mt-6">
        <Text style={{ fontFamily: "Poppins-Bold" }} className="text-3xl ">
          {docinfo.name}
        </Text>
        <Text style={{ fontFamily: "Poppins-SemiBold" }} className="text-md">
          {docinfo.degignation}
        </Text>
      </View>
    </View>
  );
};

export default SingleDoctorHeader;
