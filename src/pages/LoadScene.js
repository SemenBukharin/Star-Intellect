import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const Load = ({navigation}) => { 

  setTimeout(() => {
    navigation.navigate('Main')
  }, 3000);
  
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <ImageBackground source={require('../../src/images/LoadingPage/bg.png')} style={{flex: 1}}>

      <View style={{ flex: 2,  }} />

      <View style={{ flex: 1,flexDirection: "column", justifyContent: "center", alignItems:"center",  }} >
        <View style={{width:"80%", height:"10%", flexDirection:"row", alignItems:"center", backgroundColor:"black"}}/>
        <Text style={{fontSize:30, fontWeight:"bold", fontStyle:'italic', color: 'white'}}>Загрузка...</Text>
      </View>

      </ImageBackground>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    fontSize:30,
  }
});

export default Load; 