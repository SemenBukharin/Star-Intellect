import React from 'react';
import { ImageBackground, StyleSheet, View, Text, BackHandler } from 'react-native';
import MyButton from '../components/MyButton';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

const Main = ({navigation}) => {  //Создаем переменную которая будет экспортироваться и что-то отрисовывать

  const play = require("../../src/images/MainPage/play.png")  
  const exit = require("../../src/images/MainPage/exit.png")  

  TrackPlayer.updateOptions({ //НЕ РАБОТАЕТ !!!!!!
    stopWithApp: true
})

  RepeatMode.Track //Ставим текущую музыку на повтор

  const start = async () => {
    await TrackPlayer.setupPlayer();    
    await TrackPlayer.add({
        id: '1',
        url: require('../../src/audio/music/start_screen_music.mp3'),
        title: 'Main scene music',
    });
    await TrackPlayer.play();
  };

//start()

  return (
    <View style={styles.container} onLayout={() => {
      start()
    }}>
        <ImageBackground source={require('../../src/images/MainPage/bg.png')} style={{flex: 1}}>

      <View style={{flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      </View>

      <View style={styles.abc}></View>

      <View style={styles.btnCont}>

        <View style={[styles.btns, {justifyContent: 'flex-start',}]}>
          <View style={{ width: "90%", alignItems: 'center', justifyContent: 'center'}}>
            <MyButton h="80%" w="60%" srcImg={play} func ={() => {
              TrackPlayer.stop()
                navigation.navigate('First')
                
            }}></MyButton>
          </View>
          
        </View>

        <View style={[styles.btns, {justifyContent: 'flex-end',}]}>
          <View style={{ width: "90%",  alignItems: 'center', justifyContent: 'center'}}>
            <MyButton h="80%" w="60%" srcImg={exit} func={() => {
              BackHandler.exitApp()
              TrackPlayer.stop()
            }}></MyButton>
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
