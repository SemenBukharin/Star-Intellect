import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';
import Constants from 'expo-constants';


const Load = () => { //Создаем переменную которая будет экспортироваться и что-то отрисовывать
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "red" }} />
      <View style={{ flex: 1,flexDirection: "column", justifyContent: "center", alignItems:"center", backgroundColor: "green" }} >
        <View style={{width:"80%", height:"10%", flexDirection:"row", alignItems:"center", backgroundColor:"black"}}/>
        <Text style={{fontSize:30, fontWeight:"bold", fontStyle:'italic'}}>Загрузка...</Text>
      </View>
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

  export default Load; //Экспортируем нужную переменную