import React from 'react';
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const MyButton = ({ text="", h, w, srcImg, func=()=>{} }) => {

    return (
      <View style={{height: h, width: w}}>
        <TouchableOpacity style={{ height: '100%', width: '100%'}} onPress={func}>
          <ImageBackground source={srcImg} style={{flex: 1}}>

            <Text>{text}</Text>

          </ImageBackground>       
        </TouchableOpacity>
      </View>
    )
}

MyButton.PropTypes = {
  text: PropTypes.string,
  h: PropTypes.number,
  w: PropTypes.number,
  srcImg: PropTypes.object,
  func: PropTypes.func

}

export default MyButton