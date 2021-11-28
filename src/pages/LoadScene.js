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

const Load = () => { //Создаем переменную которая будет экспортироваться и что-то отрисовывать
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {marginTop: 70}]}>Звёздный интеллект</Text>                    
      </View>
    )
}

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

  export default Load; //Экспортируем нужную переменную