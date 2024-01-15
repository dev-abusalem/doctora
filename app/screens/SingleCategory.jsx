import { View, Text } from "react-native";
import React, { useState } from "react";
import DashHeader from "../components/Dashboard/DashHeader";
import { CATEGORIES } from "../data/Categries";

const SingleCategory = ({ route }) => {
  const cate = route.params.category;

  return (
    <View>
      <DashHeader />
      <View>
        <Text>{cate.title}</Text>
      </View>
    </View>
  );
};

export default SingleCategory;
