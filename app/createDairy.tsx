import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "@/components/header/header";
import { Ionicons } from '@expo/vector-icons';
import { DiaryContext } from "@/context/DairyContext";
import { useNavigation } from "@react-navigation/native";

const CreateDairy: React.FC = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) {
    throw new Error("DiaryContext is undefined, please check the provider.");
  }

  const { addEntry } = diaryContext;
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [moreContent, setMoreContent] = useState<string>('');
  const navigation = useNavigation();

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleDateConfirm = (selectedDate: Date) => {
    hideDatePicker();
    setDate(selectedDate);
    showTimePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleTimeConfirm = (selectedTime: Date) => {
    hideTimePicker();
    const updatedDate = new Date(date);
    updatedDate.setHours(selectedTime.getHours());
    updatedDate.setMinutes(selectedTime.getMinutes());
    setDate(updatedDate);
    Alert.alert("Timestamp updated!", `New Date: ${updatedDate.toLocaleString()}`);
    navigation.goBack();
  };

  const handleSave = () => {
    addEntry({
      title: title || "Untitled Entry",
      timeStamp: date.toLocaleString(),
      content: moreContent,
    });

    setTitle('');
    setMoreContent('');
    navigation.goBack();
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
    return `${day} ${month} ${year}`;
  };

  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <Header onSavePress={handleSave} saveButtonText="Save" />

      <View style={styles.container}>
        <TouchableOpacity style={styles.dropdown} onPress={showDatePicker}>
          <Text style={styles.dropdownText}>
            {formatDate(date)}, {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            <Ionicons name="chevron-down" size={20} color="black" style={{ marginTop: 10 }} />
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Write more here...."
          value={moreContent}
          onChangeText={setMoreContent}
          placeholderTextColor="#999"
        />
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
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20 },
  dropdown: { padding: 10, backgroundColor: "#f0f0f0" },
  dropdownText: { fontSize: 16, display: 'flex' },
  input: { fontSize: 18, padding: 10, color: '#000' },
});

export default CreateDairy;
