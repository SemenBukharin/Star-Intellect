import React from 'react';
import PropTypes from 'prop-types'

const Recognizer = ({command}) => {
    //const command = "возьми флешку"
    const words = command.split(' ')
    let res = 'Main'
    for (word in words) {
        alert(word)
        if (word === "флешку") {

            res = 'Second'
        }
            
    }
    return res
}
module.exports = Recognizer