import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { MicButton } from '../components/MicButton';

const Third = () => {

  const mic = require('../../src/images/FirstScene/micOff.png')
  
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      
      <ImageBackground source={require('../../src/images/FirstScene/bg.png')} 
      style={{height:'100%', flexDirection:'column', justifyContent:'center',alignItems:'center'}}> 

        <View style={{ flex:8, backgroundColor:'gray', height:'90%', width:'90%', 
        flexDirection:'column', justifyContent:'center',alignItems:'center', borderRadius:25}}>
        <View style={{backgroundColor:'white', height:'95%', width:'90%', borderRadius:25}}>
            <View style={{flex: 9, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                
                <View style={{flex:2,height:'100%',  borderTopRightRadius:25}}>
                  <Image style={{width:'100%', borderRadius:25}} source={require('../../src/images/ThirdScene/Sounds_3.png')}/>
                </View>
            </View> 

            <View style={{flex: 1, backgroundColor:'gray', flexDirection:'row', justifyContent:'center',alignItems:'center'}}></View>

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:2,height:'100%'}}>
                <Image style={{width:'100%', borderRadius:25}} source={require('../../src/images/ThirdScene/myamya_notactive.png')}/>
                  </View>    
            </View> 

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:2,height:'100%'}}>
                <Image style={{width:'100%', borderRadius:25}} source={require('../../src/images/ThirdScene/shhh_notactive.png')}/>
                  </View>    
            </View> 

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:2,height:'100%', borderBottomRightRadius:25}}>
                <Image style={{width:'100%', borderRadius:25}} source={require('../../src/images/ThirdScene/murmur_notactive.png')}/>
                </View>
            </View>           
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

export default Third;