import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import icons from Expo vector-icons library

const Account = () => {
  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/me.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Account Information Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        {/* Add more account-related options as needed */}
      </View>

      {/* Payments Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payments</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text style={styles.optionText}>Manage Payment Methods</Text>
        </TouchableOpacity>
        {/* Add more payment-related options as needed */}
      </View>

      {/* Services as Patient Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Services as Patient</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <AntDesign name="medicinebox" size={24} color="black" />
          <Text style={styles.optionText}>View Medical Records</Text>
        </TouchableOpacity>
        {/* Add more patient services-related options as needed */}
      </View>

      {/* Settings Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.optionText}>General Settings</Text>
        </TouchableOpacity>
        {/* Add more settings options as needed */}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    marginTop: 5,
    color: "gray",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Account;
