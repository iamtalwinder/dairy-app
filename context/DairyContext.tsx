import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DiaryEntry {
  title: string;
  timeStamp: string;
  content: string;
}

interface DiaryContextType {
  diaryEntries: DiaryEntry[];
  selectedEntry: DiaryEntry | null;
  addEntry: (entry: DiaryEntry) => void;
  viewDiaryEntry: (entry: DiaryEntry) => void;
  loadEntries: () => Promise<void>;
}

export const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

interface DiaryProviderProps {
  children: ReactNode;
}

export const DiaryProvider: React.FC<DiaryProviderProps> = ({ children }) => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null);

  const loadEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('diaryEntries');
      if (storedEntries) {
        setDiaryEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error("Error loading diary entries from AsyncStorage", error);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const addEntry = async (entry: DiaryEntry) => {
    const updatedEntries = [...diaryEntries, entry];
    setDiaryEntries(updatedEntries);

    const message = `Date: ${entry.timeStamp}\nTitle: ${entry.title || "Untitled Entry"}\nContent: ${entry.content || "No additional content"}`;
    Alert.alert("Diary created!", message);

    try {
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    } catch (error) {
      console.error("Error saving diary entry to AsyncStorage", error);
    }
  };

  const viewDiaryEntry = (entry: DiaryEntry) => {
    setSelectedEntry(entry);
  };

  return (
    <DiaryContext.Provider value={{ diaryEntries, addEntry, viewDiaryEntry, selectedEntry, loadEntries }}>
      {children}
    </DiaryContext.Provider>
  );
};
