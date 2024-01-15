import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import SubmitButton from "../../shared/SubmitButton";

const ForgetForm = ({ navigation }) => {
  function handleSignIn() {
    navigation.navigate("Login");
  }

  return (
    <View className="bg-dgray transition-all justify-end flex-1 px-8 pt-20 pb-12 h-full rounded-t-[50px] z-10 overflow-scroll">
      <View className="mb-5">
        <Text
          style={{ fontFamily: "Poppins-Bold" }}
          className="text-center text-xl mb-1"
        >
          Forget Your Password ?
        </Text>
        <Image
          source={require("../../../assets/images/forget.png")}
          className="my-6 mx-auto"
        />
      </View>

      <View className="mt-6 form">
        <TextInput
          style={{ fontFamily: "Poppins-Medium" }}
          className="px-6 pb-3 pt-4 rounded-2xl  mb-8 bg-dwhite border border-slate-200  "
          placeholder="Enter your email"
        />
      </View>

      <SubmitButton title="SEND OTP" />
      <View className="mt-2">
        <Text style={{ fontFamily: "Poppins-Medium" }} className="text-center">
          Don't need to change password ?{" "}
          <Text onPress={handleSignIn} className=" text-dprimary underline">
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ForgetForm;
