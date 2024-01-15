import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import icons from Expo vector-icons library

const Notification = () => {
  // Sample notification data
  const notifications = [
    {
      id: "1",
      title: "Appointment Reminder",
      message: "Your appointment is scheduled for tomorrow.",
    },
    {
      id: "2",
      title: "New Message",
      message: "You have a new message from Dr. Smith.",
    },
    {
      id: "3",
      title: "Payment Received",
      message: "Payment of $50.00 received for your recent visit.",
    },
    // Add more notification data as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <AntDesign name="notification" size={24} color="black" />
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  notificationTextContainer: {
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationMessage: {
    color: "gray",
  },
});

export default Notification;
