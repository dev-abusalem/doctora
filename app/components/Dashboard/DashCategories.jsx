import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../../data/Categries";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/constants";

const DashCategories = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    navigation.navigate("SingleCategory", { category });
  };

  return (
    <View className="pr-10  relative">
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item)}
            className="bg-dprimary mr-2 px-5 py-0.5 rounded-lg my-4"
          >
            <Text
              style={{ fontFamily: "Poppins-Regular" }}
              className="text-dwhite uppercase"
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text className="absolute top-3 right-0 opacity-30">
        <Icon color={COLORS.dprimary} name="arrow-redo-outline" size={30} />
      </Text>
    </View>
  );
};

export default DashCategories;
