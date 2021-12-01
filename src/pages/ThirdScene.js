import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Third = () => {

  
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      
      <ImageBackground source={require('../../src/images/FirstScene/bg.png')} 
      style={{flex: 1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}> 

        <View style={{ backgroundColor:'gray', height:'90%', width:'90%', 
        flexDirection:'column', justifyContent:'center',alignItems:'center', borderRadius:25}}>
        <View style={{backgroundColor:'white', height:'95%', width:'90%', borderRadius:25}}>
            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1, borderTopLeftRadius:25}}></View>
                <View style={{flex:2,height:'100%',  borderTopRightRadius:25}}></View>
            </View> 

           
            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:2,height:'100%'}}></View>
            </View> 

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:2,height:'100%'}}></View>
            </View>

            <View style={{flex: 1, backgroundColor:'gray', flexDirection:'row', justifyContent:'center',alignItems:'center'}}></View>

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:2,height:'100%'}}></View>    
            </View> 

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:2,height:'100%'}}></View>    
            </View> 

            <View style={{flex: 3, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1, borderBottomLeftRadius:25}}></View>
                <View style={{flex:2,height:'100%', borderBottomRightRadius:25}}></View>
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