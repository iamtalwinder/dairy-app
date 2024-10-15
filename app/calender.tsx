
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';

interface Day {
  day: number;
  month: number;
  year: number;
  timestamp: number;
  dateString: string;
}

const SimpleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <CalendarList
        onDayPress={(day: Day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#00adf5',
          },
        }}
        horizontal={true}
        pagingEnabled={true}
        showScrollIndicator={true}
        scrollEnabled={true}
        pastScrollRange={12}
        futureScrollRange={12}
        hideArrows={false}
        renderArrow={(direction) => {
          return <Text>{direction === 'left' ? '←' : '→'}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default SimpleCalendar;