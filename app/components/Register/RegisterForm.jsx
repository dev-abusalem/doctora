import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import SubmitButton from "../../shared/SubmitButton";
import Icon from "react-native-vector-icons//FontAwesome5";
import { COLORS } from "../../constants/constants";
const RegisterForm = ({ navigation }) => {
  // show password value by press eye button
  const [passwordShow, setPasswordShow] = useState(false);
  function handlePasswordShowHide() {
    setPasswordShow(!passwordShow);
  }

  function handleSignIn() {
    navigation.navigate("Login");
  }
  return (
    <View className="bg-dgray flex-1 justify-end px-8 pt-20 pb-12 h-full rounded-t-[50px] z-10 overflow-scroll">
      <View>
        <View className="mb-5">
          <Text
            style={{ fontFamily: "Poppins-Bold" }}
            className="text-center text-xl mb-1"
          >
            Register With Us!
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-center"
          >
            Your Information is safe with us
          </Text>
        </View>

        <View className="mt-6 form">
          <TextInput
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-6 py-3 rounded-2xl mb-8 bg-dwhite border border-slate-200 "
            placeholder="Enter your full name"
          />
          <TextInput
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-6 py-3 rounded-2xl  mb-8 bg-dwhite border border-slate-200 "
            placeholder="Enter your email"
          />
          <TextInput
            style={{ fontFamily: "Poppins-Medium" }}
            className="px-6 py-3 rounded-2xl  mb-8 bg-dwhite border border-slate-200 "
            placeholder="Mobile number"
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
        <SubmitButton title="Sign Up" />
        <View className="mt-2">
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-center"
          >
            Already have an account?{" "}
            <Text onPress={handleSignIn} className=" text-dprimary">
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;
