import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../../redux/slices/searchSlice";
const DashSearch = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <View className="bg-dgray relative rounded-xl shadow-2xl ">
        <Text className="absolute top-2.5 left-3 opacity-30">
          <Icon name="search" size={20} color={COLORS.dblack} />;
        </Text>
        <TextInput
          style={{ fontFamily: "Poppins-Regular" }}
          placeholder="Search doctor..."
          className="pl-10  py-2"
          onChangeText={(text) => dispatch(updateSearch(text))}
        />
      </View>
      <View className="mt-6">
        <Text
          style={{ fontFamily: "Poppins-Bold" }}
          className="text-3xl text-dprimary"
        >
          Doctors
        </Text>
      </View>
    </View>
  );
};

export default DashSearch;
