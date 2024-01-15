import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../shared/Logo";
import Button, { font } from "../shared/Button";
const Welcome = ({ navigation }) => {
  return (
    <View className="flex-1 justify-between items-center my-[18%]">
      <Logo />
      <View>
        <Image
          alt="doctor-welcome"
          source={require("../../assets/images/doctors.png")}
          className="w-[310px] h-[230px] mx-auto"
        />
        <View className="py-3 px-8">
          <Text
            className="text-center text-2xl mb-2 leading-8"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Consult Specialist Doctors Securely And Privately
          </Text>
          <Text
            className="text-center"
            style={{ fontFamily: "Poppins-Medium" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            vulputate facilisi eget neque, nunc suspendisse massa augue. Congue
            sit augue volutpat vel. Dictum dignissim ac pharetra.
          </Text>
        </View>
      </View>
      <View>
        <Button title="Get Started" navigation={navigation} screen="Login" />
      </View>
    </View>
  );
};

export default Welcome;
