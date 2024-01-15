import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/constants";

const BookAppointment = ({ isVisible, onClose }) => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleBookAppointment = () => {
    if (
      (patientName && doctorName && appointmentDate && additionalNotes) === ""
    ) {
      alert(`Please fill all filed`);
      onClose();
    } else {
      alert(`Appointment booked for ${patientName} on ${appointmentDate}`);
      onClose();
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Book Your Appointment</Text>
          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            value={patientName}
            onChangeText={(text) => setPatientName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Doctor Name"
            value={doctorName}
            onChangeText={(text) => setDoctorName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Appointment Date"
            value={appointmentDate}
            onChangeText={(text) => setAppointmentDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Additional Notes"
            value={additionalNotes}
            onChangeText={(text) => setAdditionalNotes(text)}
            multiline
          />
          <TouchableOpacity
            style={styles.bookButton}
            onPress={handleBookAppointment}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  bookButton: {
    backgroundColor: COLORS.dprimary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Poppins-Regular",
  },
});

export default BookAppointment;
