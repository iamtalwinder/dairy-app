import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { IconButton } from 'react-native-paper';
import { DiaryProvider } from '@/context/DairyContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <DiaryProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            headerStyle: { marginTop: 5, padding: 5 }
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Dairy',
              tabBarIcon: ({ color, focused }) => (

                <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="createDairy"
            options={{
              title: '',
              tabBarIcon: ({ color, focused }) => (
                <View style={styles.iconWrapper}>
                  <View style={styles.iconContainer}>
                    <IconButton
                      icon={focused ? 'plus-circle' : 'plus-circle-outline'}
                      iconColor={color}
                      size={30}
                    />
                  </View>
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="calender"
            options={{
              title: 'Calender',
              tabBarIcon: ({ color, focused }) => (
                <IconButton
                  icon={focused ? 'calendar' : 'calendar-outline'}
                  iconColor={color}
                  size={30}
                />
              ),
            }}
          />
        </Tabs>
    </DiaryProvider>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    top: -20,
    left: '70%',
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    transform: [
      { translateX: -95 },
    ],
  }
});