import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
