import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BookAppointment from "../Appionment/BookAppointment";

const SingleDoctorFooter = ({ docinfo }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View>
      <View className="mb-10">
        <View className="mb-6 px-8">
          <View className="flex-row justify-between ">
            <Text style={{ fontFamily: "Poppins-Regular" }}>Patients</Text>
            <Text style={{ fontFamily: "Poppins-Regular" }}>Experience</Text>
            <Text style={{ fontFamily: "Poppins-Regular" }}>Rating</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-lg" style={{ fontFamily: "Poppins-Bold" }}>
              {docinfo.patient}
            </Text>
            <Text className="text-lg" style={{ fontFamily: "Poppins-Bold" }}>
              {docinfo.experience} yr
            </Text>
            <Text className="text-lg" style={{ fontFamily: "Poppins-Bold" }}>
              {docinfo.rating}
            </Text>
          </View>
        </View>
        <View className=" px-8">
          <Text style={{ fontFamily: "Poppins-Bold" }} className="text-lg ">
            About
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular" }}>{docinfo.desc}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={openModal}
          className="px-8 py-5 bg-dprimary rounded-t-3xl"
        >
          <Text
            style={{ fontFamily: "Poppins-Bold" }}
            className="text-dwhite text-xl text-center uppercase tracking-wider	"
          >
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
      <BookAppointment isVisible={isModalVisible} onClose={closeModal} />
    </View>
  );
};

export default SingleDoctorFooter;
