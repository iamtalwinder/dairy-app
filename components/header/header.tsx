import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  showBackButton?: boolean;
  onSavePress?: () => void;
  saveButtonText?: string;
  onListPress?: () => void;
}

export default function Header({
  showBackButton = true,
  onSavePress,
  saveButtonText = 'Save',
  onListPress
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onListPress}>
          <Ionicons name="document-text" size={28} color="black" style={styles.documentIcon} />
        </TouchableOpacity>
        {onSavePress && (
          <TouchableOpacity onPress={onSavePress}>
            <Text style={styles.saveButton}>{saveButtonText}</Text>
          </TouchableOpacity>
        )}
      </View>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    fontSize: 14,
    padding: 6,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 8,
    color: 'white',
    backgroundColor: '#0A84FF'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  documentIcon :{
    marginRight: 10
  }
});
