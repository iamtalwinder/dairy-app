import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "@/components/header/header";
import { Ionicons } from '@expo/vector-icons';

export default function CreateDairy() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [moreContent, setMoreContent] = useState('');


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

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
    return `${day} ${month} ${year}`;
  };

  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <Header title="Create Dairy" onSavePress={handleSave} saveButtonText="Save" />

      <View style={styles.container}>
        <TouchableOpacity style={styles.dropdown} onPress={showDatePicker}>
          <Text style={styles.dropdownText}>
            {formatDate(date)} , {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            <Ionicons name="chevron-down" size={20} color="black" style={{ marginTop: 10 }} />
          </Text>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#999"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Write more here...."
            value={moreContent}
            onChangeText={setMoreContent}
            placeholderTextColor="#999"
          />
        </View>
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
  icon: {
    paddingTop: 5,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 0,
    color: '#000',
  },
});
