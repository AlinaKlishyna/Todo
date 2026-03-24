import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Button, Alert } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'

export default function App() {
const handleTextPress = () => {console.log("Text pressed..");}
const handleButtonPress = () => {
  console.log("Button pressed..");
  Alert.alert("Info", "Test message", [
    {text: "Ask me later", onPress: () => console.log("'Ask me later' pressed")},
    {text: "Okey", onPress: () => console.log("'Okey' pressed")},
    {text: "Cancel", onPress: () => console.log("'Cancel' pressed")}
  ]);
}
const handleButtonPressPrompt = () => {
  console.log('Button with adjusted color pressed');

  // Alert.prompt is only available for IOS
  Alert.prompt("Input", "Test message",
    text => console.log("Input text: ", text)
  )
}
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={handleTextPress}>Hello!{'\n'}This is my first React Native app!</Text>
        <Button 
        title="Click Me" 
        color="#94efff" 
        onPress={handleButtonPress} 
        />

        <Button
          title="Press me"
          color="#f194ff"
          onPress={handleButtonPressPrompt}
        />

        <Image source={require('./assets/splash-icon.png')} />

        <Image source={{
          width: 200,
          height: 250,
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwZKBvXavYoIL-VYtQTwtYtgOd1qB-neelQ&s"
        }} />

        <TouchableHighlight  onPress={() => console.log("Image pressed")}>
          <Image blurRadius={5} source={{
            width: 200,
            height: 250,
            uri: "https://ih1.redbubble.net/image.5037952726.4236/fposter,small,wall_texture,product,750x1000.u3.jpg"
          }} />
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => console.log("Image pressed")}>
          <Image source={{
            width: 200,
            height: 250,
            uri: "https://preview.redd.it/white-cat-digital-painting-v0-txigstb1tfmb1.png?auto=webp&s=6513acf479ad70e25f627d83c04a0ab6580f61b7"
          }} />
        </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: "space-evenly",
    alignItems:"center",
  },
   text: {
    color: 'blue',
    fontSize: 20,
  },
});
