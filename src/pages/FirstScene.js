import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import MyButton from '../components/MyButton';

const First = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 7, backgroundColor: "red",flexDirection: "row-reverse" }}>
          <View style={{height:"10%", width:"40%", backgroundColor:"blue"}}>
          <MyButton style={{backgroundColor:"black"}}/>
          </View>
      </View>
      <View style={{ flex: 1,flexDirection: "row", justifyContent: "space-between", alignItems:"flex-end", backgroundColor: "green" }} >        
      
      <View style={{height:"100%", width:"20%", backgroundColor:"blue"}}>   
      <MyButton style={{backgroundColor:"black"}}>
        <Text>sajdoahosf</Text>
      </MyButton>
      </View>
      
      <View style={{height:"100%", width:"20%", backgroundColor:"blue"}}/>

      </View>
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