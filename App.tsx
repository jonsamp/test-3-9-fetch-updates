import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, AppState, AppStateStatus } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  const fetchExpoUpdate = async () => {
    if (!__DEV__) {
      try {
        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Updates.reloadAsync();
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
    <View style={styles.container}>
      <Text>Is __DEV__ true? {__DEV__ ? 'yes' : 'no'}</Text>
      <Text>Update 8</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
