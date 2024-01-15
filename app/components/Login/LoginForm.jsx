import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import SubmitButton from "../../shared/SubmitButton";
import Icon from "react-native-vector-icons//FontAwesome5";
import { COLORS } from "../../constants/constants";
import { Picker } from "@react-native-picker/picker";
const LoginForm = ({ navigation }) => {
  // show password value by press eye button
  const [passwordShow, setPasswordShow] = useState(false);
  function handlePasswordShowHide() {
    setPasswordShow(!passwordShow);
  }

  function handleSignUp() {
    navigation.navigate("Register");
  }
  function handleForget() {
    navigation.navigate("Forget");
  }

  return (
    <View className="bg-dgray transition-all justify-end flex-1 px-8 pt-20 pb-12 h-full rounded-t-[50px] z-10 overflow-scroll">
      <View className="mb-5">
        <Text
          style={{ fontFamily: "Poppins-Bold" }}
          className="text-center text-xl mb-1"
        >
          Welcome Back !
        </Text>
        <Image
          source={require("../../../assets/images/login.png")}
          className="my-6 mx-auto"
        />
      </View>

      <View className="mt-6 form">
        <TextInput
          style={{ fontFamily: "Poppins-Medium" }}
          className="px-6 pb-3 pt-4 rounded-2xl  mb-8 bg-dwhite border border-slate-200 "
          placeholder="Enter your email"
        />
        <View className="relative">
          <TextInput
            style={{ fontFamily: "Poppins-Medium" }}
            secureTextEntry={passwordShow ? false : true}
            className="px-6 pb-3 pt-4  rounded-2xl  mb-8 bg-dwhite border border-slate-200 "
            placeholder="Enter your password"
          />
          <View className="absolute top-5 right-5">
            {passwordShow ? (
              <Icon
                onPress={handlePasswordShowHide}
                name="eye"
                size={20}
                color={COLORS.dprimary}
              />
            ) : (
              <Icon
                onPress={handlePasswordShowHide}
                name="eye-slash"
                size={20}
                color={COLORS.dprimary}
              />
            )}
          </View>
        </View>
      </View>
      <View className="mb-3">
        <Text
          onPress={handleForget}
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-center text-lg text-dsky"
        >
          Forgot Password ?
        </Text>
      </View>

      <SubmitButton title="Sign In" />
      <View className="mt-2">
        <Text style={{ fontFamily: "Poppins-Medium" }} className="text-center">
          Dont have an account?{" "}
          <Text onPress={handleSignUp} className=" text-dprimary underline">
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
