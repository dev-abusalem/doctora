import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import SingleDoctorHeader from "../components/Doctor/SingleDoctorHeader";
import SingleDoctorFooter from "../components/Doctor/SingleDoctorFooter";
import DashHeader from "../components/Dashboard/DashHeader";

const SingleDoctor = ({ route }) => {
  const doct = route.params.doctor;

  return (
    <View className="flex-1 justify-between  bg-white">
      <DashHeader />
      <View className="px-8">
        <SingleDoctorHeader docinfo={doct} />
      </View>
      <View>
        <SingleDoctorFooter docinfo={doct} />
      </View>
    </View>
  );
};

export default SingleDoctor;
