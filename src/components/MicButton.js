/* Компонент кнопки микрофона */

import React from "react";
import Voice from 'react-native-voice'
import { Button } from "react-native";

export const MicButton = () => {

    function ListenVoice() {
        Voice.start('ru-RU') //включаем микрофон и устанавливаем язык русский
        Voice.onSpeechResults = (res) => { 
          res = JSON.parse(JSON.stringify(res)).value[0] //вытаскиваем первый элемент из массива с вариантами распознанной фразы
                  alert(res)
        }
      }

    return (
        <Button title="Say something" color='red' onPress = {ListenVoice}/>
    )
}