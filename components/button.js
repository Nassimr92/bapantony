// button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonRed = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonRed}>
        <Text style={styles.text}>Red Button</Text>
    </TouchableOpacity>
);

export const ButtonBlue = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonBlue}>
        <Text style={styles.text}>Blue Button</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonRed: {
        alignItems: 'center',
        backgroundColor: '#f542b3',
        padding: 10,
        margin: 10,
    },
    buttonBlue: {
        alignItems: 'center',
        backgroundColor: '#4287f5',
        padding: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
    },
});
export default {ButtonRed, ButtonBlue};