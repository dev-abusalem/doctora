import { View, Text } from "react-native";
import React from "react";
import Header from "../layouts/Header";
import RegisterForm from "../components/Register/RegisterForm";

const Register = ({ navigation }) => {
  return (
    <View className="flex-1 relative justify-between ">
      <Header />
      <RegisterForm navigation={navigation} />
    </View>
  );
};

export default Register;
