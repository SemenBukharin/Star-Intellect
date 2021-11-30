import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { MicButton } from '../components/MicButton';

const Second = () => {

  const mic = require('../../src/images/FirstScene/micOff.png')

  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../../src/images/SecondScene/bg3.png')} 
      style={{flex: 1, flexDirection: "column", justifyContent:'center', alignItems:'center', width:'100%'}}>
      <View style={{flexDirection:'column', width:'85%', height:'80%'}}>
      
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}></View>
            <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}></View>
            <View style={{flex:2, }}></View>
        </View>

        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <Text style={[styles.text]}>1</Text>
            </View>
            <View style={{flex:3,  flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat1.png')}></Image>
            </View>
            <View style={{flex:2,}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>2</Text>
            </View>
            <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat3.jpg')}></Image>
            </View>
            <View style={{flex:2,}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>3</Text>
            </View>
            <View style={{flex:3,  flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat4.webp')}></Image>
            </View>
            <View style={{flex:2}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>4</Text>
            </View>
            <View style={{flex:3,  flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat5.jpg')}></Image>
            </View>
            <View style={{flex:2}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>5</Text>
            </View>
            <View style={{flex:3,  flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat2.jpg')}></Image>
            </View>
            <View style={{flex:2}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>6</Text>
            </View>
            <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat6.jpg')}></Image>
            </View>
            <View style={{flex:2}}>
            <MyButton h="100%" w="100%" text="да" />
            </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.text]}>7</Text>
            </View>
            <View style={{flex:3,  flexDirection:'row', justifyContent:'center'}}>
            <Image style={{height:'100%', resizeMode:'contain'}} source={require('../../src/images/SecondScene/rat7.webp')}></Image>
            </View>
            <View style={{flex:2}}>
            <MyButton h="100%" w="100%" text="да"/>
            </View>
        </View>

      </View> 
      </ImageBackground>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1
    width: '100%',
    height:'100%'  
  } , 
  btns: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    height:'100%'    
  },
  text:{
    fontSize:30, 
    fontWeight:"bold", 
    fontStyle:'italic', 
    color: 'red'
  }
});

export default Second;