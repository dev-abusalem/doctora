import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import Loader from "../shared/Loader";
import Logo from "../shared/Logo";
import Header from "../layouts/Header";
import LoginForm from "../components/Login/LoginForm";
import ProctedRoute, { isUser } from "../utils/ProctedRoute";

const Login = ({ navigation }) => {
  useEffect(() => {
    ProctedRoute(navigation);
  }, [isUser]);

  return (
    <View className="flex-1 relative justify-between ">
      <Header />
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default Login;
