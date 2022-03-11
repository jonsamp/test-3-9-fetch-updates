import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  AppState,
  AppStateStatus,
} from 'react-native';
import * as Updates from 'expo-updates';

import { helper } from './helpers';
import { helper as helper3 } from './helpers3';

export default function App() {
  helper();
  const fetchExpoUpdate = async () => {
    if (!__DEV__) {
      try {
        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (error) {
        alert(`Error fetching latest Expo update: ${error}`);
      }
    }
  };

  const handleAppStateChange = (state: AppStateStatus) => {
    if (state === 'active') {
      fetchExpoUpdate();
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Is __DEV__ true? {__DEV__ ? 'yes' : 'no'}</Text>
      <Text>Update 24</Text>
      <Text>{JSON.stringify(helper3())}</Text>
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
});
