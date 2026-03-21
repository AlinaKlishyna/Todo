import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

export default function App() {
const handleTextPress = () => {console.log("Text pressed..");}
const handleButtonPress = () => {
  console.log("Button pressed..");
  alert("Button pressed");
} 


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={handleTextPress}>Hello!{'\n'}This is my first React Native app!</Text>
        <Button 
        title="Click Me" 
        color="#f194ff" 
        onPress={handleButtonPress} 
        />
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => showAlert('Button with adjusted color pressed')}
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   text: {
    color: 'blue',
    fontSize: 20,
  },
});
