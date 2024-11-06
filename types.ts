import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  CreateDairy: undefined;
  DiaryEntryDetails: { date: string; title: string; content: string }; // Define parameters for the entry details
};

// Define navigation and route props for each screen
export type DiaryEntryDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DiaryEntryDetails'>;
export type DiaryEntryDetailsScreenRouteProp = RouteProp<RootStackParamList, 'DiaryEntryDetails'>;
