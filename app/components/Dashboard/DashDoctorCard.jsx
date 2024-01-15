import { View, Text, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/constants";

const DashDoctorCard = ({ doctor }) => {
  const renderStars = () => {
    const filledStars = Math.floor(doctor.rating);
    const hasHalfStar = doctor.rating % 1 !== 0;

    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        // Render a filled star
        stars.push(
          <Icon key={i} name="star-sharp" color={COLORS.dyellow} size={25} />
        );
      } else if (i === filledStars + 1 && hasHalfStar) {
        // Render a half-filled star
        stars.push(
          <Icon
            key={i}
            name="star-half-sharp"
            color={COLORS.dyellow}
            size={25}
          />
        );
      } else {
        // Render an empty star
        stars.push(
          <Icon key={i} name="star-outline" color={COLORS.dyellow} size={25} />
        );
      }
    }

    return stars;
  };
  return (
    <View className="flex flex-row">
      <View>
        <View className="relative">
          <View className="absolute top-0 left-1/3 h-[130px] w-[130px] bg-emerald-400 rounded-full blur-lg"></View>
          <Image
            style={boxshadow.image}
            source={require("../../../assets/images/nurse.png")}
          />
        </View>
        <View style={boxshadow.cardContainer}>
          <Text style={{ fontFamily: "Poppins-Bold" }} className="text-lg">
            {doctor.name}
          </Text>
          <Text className="leading-4" style={{ fontFamily: "Poppins-Regular" }}>
            {doctor.degignation}
          </Text>
          <View style={boxshadow.starsContainer}>{renderStars()}</View>
        </View>
      </View>
    </View>
  );
};

export const boxshadow = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  starsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default DashDoctorCard;
