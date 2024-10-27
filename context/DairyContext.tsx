import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

interface DiaryEntry {
  title: string;
  timeStamp: string;
  content: string;
}

interface DiaryContextType {
  diaryEntries: DiaryEntry[];
  addEntry: (entry: DiaryEntry) => void;
}

export const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

interface DiaryProviderProps {
  children: ReactNode;
}

export const DiaryProvider: React.FC<DiaryProviderProps> = ({ children }) => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

  const addEntry = (entry: DiaryEntry) => {
    setDiaryEntries((prevEntries) => [...prevEntries, entry]);
  
    const message = `Date: ${entry.timeStamp}\nTitle: ${entry.title || "Untitled Entry"}\nContent: ${entry.content || "No additional content"}`;
  
    Alert.alert("Diary created!", message);
  };
  

  return (
    <DiaryContext.Provider value={{ diaryEntries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};
