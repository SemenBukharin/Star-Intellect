import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { MicButton } from '../components/MicButton';
import Video from 'react-native-video';


const Titles = ({navigation}) => {

    const vid = require( '../../src/images/TitlesScene/vid1.mp4')

  return (

    <ImageBackground style={{height:'100%', width:'100%'}} source={require('../../src/images/TitlesScene/bg.png')}/> 

    <{/* View style={[styles.container, {flexDirection: "column", backgroundColor:'black', alignItems:'center', justifyContent:'center'}]}>
      
      <Video source={vid}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
      
    </View> */}

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

export default Titles;

 styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });