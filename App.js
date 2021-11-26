import React from 'react';
import Voice from 'react-native-voice'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
        <View style={styles.container}>
         <Text style={styles.text}>Hello world!</Text>
         <Text style= {{ color: 'red', fontSize: 36 }} onPress ={() => {
          Voice.start('ru-RU')
          Voice.onSpeechResults = (res) => {
            console.log(JSON.stringify(res))
                    alert(JSON.stringify(res))
                  }        
      }}>Say something...</Text>
        <StatusBar style="auto" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 26
  }
});

export default App;
