import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const titles = ['First Entry', 'Second Entry', 'Third Entry'];

const DairyData = Array.from({ length: 3 }, (_, index) => {
  const currentTime = new Date().toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return { title: titles[index], timeStamp: currentTime };
});

const DiaryCreated = () => {
  const currentYear = new Date().getFullYear();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.parentContainer}>
          <Text style={styles.yearText}>{currentYear}</Text>
          {DairyData.map((entry, index) => (
            <View key={index} style={styles.dateContainer}>
              <Text style={styles.titleText}>{entry.title}</Text>
              <Text style={styles.dateText}>{entry.timeStamp}</Text>
            </View>
          ))}
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
    overflow: 'hidden'
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
    fontWeight: 'bold'
  }
});

export default DiaryCreated;
