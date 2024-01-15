import { View, Text, Image, StyleSheet, Platform, Button } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/constants";

const InstantAppionment = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Text>Instant Appointment </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
        <View className="flex flex-row">
          <Text className="mt-2 px-3 py-0.5 bg-dsky text-dwhite rounded-2xl text-center">
            Read more...
          </Text>
        </View>
      </View>
      <Image
        className="ml-3"
        source={require("../../../assets/images/med.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  container: {
    flex: 1,
  },
  starsContainer: {
    flexDirection: "row",
  },
});

export default InstantAppionment;
