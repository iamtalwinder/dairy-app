import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { DiaryContext } from '@/context/DairyContext';

const { width, height } = Dimensions.get('window');

const DiaryCreated: React.FC = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) {
    throw new Error("DiaryContext is undefined, please check the provider.");
  }

  const { diaryEntries } = diaryContext;
  const currentYear = new Date().getFullYear();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.parentContainer}>
          <Text style={styles.yearText}>{currentYear}</Text>
          {diaryEntries.length > 0 ? (
            diaryEntries.map((entry, index) => (
              <View key={index} style={styles.dateContainer}>
                <Text style={styles.titleText}>{entry.title}</Text>
                <Text style={styles.dateText}>{entry.timeStamp}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noEntriesText}>No entries available</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: width - 32,
    height: height * 0.85,
    margin: 10,
    padding: 10,
    borderRadius: 16,
    overflow: 'hidden',
  },
  yearText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    paddingTop: 18,
    backgroundColor: '#F5F5F5',
  },
  dateContainer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noEntriesText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#888',
  },
});

export default DiaryCreated;
