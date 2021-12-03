/* Компонент кнопки микрофона */

import React from "react";
import Voice from 'react-native-voice'

// export const MicButton = async () => {

//   Voice.start('ru-RU') //включаем микрофон и устанавливаем язык русский

//   Voice.onSpeechResults = async function(res) { 
//     res = await JSON.parse(JSON.stringify(res)).value[0] //вытаскиваем первый элемент из массива с вариантами распознанной фразы
//     //alert(res)
//     return res
//   }
  
//   return await Voice.onSpeechResults()
// }


export const MicButton = () => new Promise((resolve, reject) => {
  Voice.start('ru-RU')
  Voice.onSpeechResults = (res) => { 
    resolve(res.value[0])
  }
  Voice.onSpeechError = reject
}).finally(() => {
  Voice.removeAllListeners() // clean up
})