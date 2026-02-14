import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native';

export default function App() {
const handleTextPress = () => {  console.log("Text pressed");
}

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hello!{'\n'}This is my first React Native app!</Text>
      <Button title="Click Me" onPress={() => console.log("Button pressed")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   text: {
    color: 'blue',
    fontSize: 20,
  },
});
