import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../layouts/Header";
import ForgetForm from "../components/Forget/ForgetForm";

const Forget = ({ navigation }) => {
  return (
    <View className="flex-1 relative justify-between ">
      <Header />
      <ForgetForm navigation={navigation} />
    </View>
  );
};

export default Forget;
