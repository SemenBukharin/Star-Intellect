import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

const Main = ({navigation}) => {  //Создаем переменную которая будет экспортироваться и что-то отрисовывать

  const play = require("../../src/images/MainPage/play.png")  
  const exit = require("../../src/images/MainPage/exit.png")  

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../src/images/MainPage/bg.png')} style={{flex: 1}}>

      <View style={{flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      </View>

      <View style={styles.abc}></View>

      <View style={styles.btnCont}>

        <View style={[styles.btns, {justifyContent: 'flex-start',}]}>
          <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <MyButton h="80%" w="50%" srcImg={play} func ={() => {
                navigation.navigate('First')
            }}></MyButton>
          </View>
          
        </View>

        <View style={[styles.btns, {justifyContent: 'flex-end',}]}>
          <View style={{ width: "100%",  alignItems: 'center', justifyContent: 'center'}}>
            <MyButton h="80%" w="50%" srcImg={exit}></MyButton>
          </View>       
        </View>

      </View>

      <View style={styles.abc}></View>
     
      
      </ImageBackground>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  btns: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',

    
  },

  btnCont: {
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%'


    
  },

  abc: {
    flex: 1,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default Main; //Экспортируем нужную переменную