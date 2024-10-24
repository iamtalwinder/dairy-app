import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal, Button, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "@/components/header/header";

export default function CreateDairy() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate: Date) => {
    hideDatePicker();
    setDate(selectedDate);
    showTimePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (selectedTime: Date) => {
    hideTimePicker();
    const updatedDate = new Date(date);
    updatedDate.setHours(selectedTime.getHours());
    updatedDate.setMinutes(selectedTime.getMinutes());
    setDate(updatedDate);
    Alert.alert("Timestamp updated!", `New Date: ${updatedDate.toLocaleString()}`);
  };

  const handleSave = () => {
    alert("Dairy saved with timestamp: " + date.toLocaleString());
  };

  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <Header title="Create Dairy" onSavePress={handleSave} saveButtonText="Save" />

      <View style={styles.container}>
        <TouchableOpacity style={styles.dropdown} onPress={showDatePicker}>
          <Text style={styles.dropdownText}>{date.toLocaleString()}{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  dropdown: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  dropdownText: {
    fontSize: 16,
  },
});
