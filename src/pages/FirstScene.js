import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { MicButton } from '../components/MicButton';


const First = ({navigation}) => {

  const mic = require('../../src/images/FirstScene/micOff.png')
  const Recognizer = require('../../src/components/ComRecognition')

  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      {/* ПОМЕНЯТЬ БЭКГРАУНД!!! */}
      <ImageBackground source={require('../../src/images/FirstScene/bg1.png')} style={{flex: 1}}> 

      <View style={{ flex: 7,flexDirection: "row-reverse" }}>
          <View style={{height:"10%", width:"40%", }}>
            <MyButton style={{backgroundColor:"black"}}/>
          </View>
      </View>

      <View style={{ flex: 1,flexDirection: "row", justifyContent: "space-between", alignItems:"flex-end",  }} >        
      
        <View style={{height:"100%", width:"20%",}}>   

        </View>
        
        <View style={{height:"100%", width:"20%",}}>
          <View style={{ width: "100%",  alignItems: 'center', justifyContent: 'center'}}>
          <MyButton h="80%" w="50%" srcImg={mic} func ={ async() => {
                let command = await MicButton()
                alert(command)
                navigation.navigate(`${Recognizer(command)}`)
                
            }}></MyButton>
          </View>
        </View>

      </View>

      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  } , 
  btns: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    height:'100%'    
  },
});

export default First;