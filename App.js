import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MicButton } from './src/components/MicButton';

const App = () => {

  return (
    <View style={styles.container}>

      <View style={{flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[styles.text, {marginTop: 70}]}>Звёздный интеллект</Text>
      </View>

      <View style={styles.btnCont}>

        <View style={[styles.btns, {justifyContent: 'flex-start',}]}>
          <View style={{ width: "30%"}}>
            <Button title="Играть" />
          </View>
          
        </View>

        <View style={[styles.btns, {justifyContent: 'flex-end',}]}>
          <View style={{ width: "30%"}}>
            <Button title="Выход" />
          </View>       
        </View>

      </View>
     
      <View style={styles.abc}></View>
                    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  text: {
    color: '#000',
    fontSize: 26
  },

  btns: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    width: '100%'
    
  },

  btnCont: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  abc: {
    flex: 2,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default App;
