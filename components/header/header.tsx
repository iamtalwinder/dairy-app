import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean; 
  onSavePress?: () => void;
  saveButtonText?: string; 
}

export default function Header({
  title,
  showBackButton = true, 
  onSavePress,
  saveButtonText = 'Save',
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {onSavePress && (
        <TouchableOpacity onPress={onSavePress}>
          <Text style={styles.saveButton}>{saveButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    fontSize: 16,
    color: 'blue',
  },
});
