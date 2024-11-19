import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/types';

type DiaryEntryDetailsRouteProp = RouteProp<RootStackParamList, 'DiaryEntryDetails'>;

const DiaryEntryDetails: React.FC = () => {
  const route = useRoute<DiaryEntryDetailsRouteProp>();
  const { date, title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{date}</Text>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{title}</Text>

      <Text style={styles.label}>Content:</Text>
      <Text style={styles.value}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DiaryEntryDetails;
