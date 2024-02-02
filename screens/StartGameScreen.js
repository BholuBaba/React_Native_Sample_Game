import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from 'react';
import Title from "../components/Title";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();//use to adjust dimension whenever the screen switches

    function inputNumberHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const num = parseInt(enteredNumber);
        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert('Invalid Number!', 'Please enter a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(num);
    }
    let marginTopDistance = height < 400 ? 30 : 100;
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                <Title>Guess My Number</Title>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Enter your Number</Text>
                    <TextInput style={styles.textInput}
                        maxLength={2}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={inputNumberHandler}
                        value={enteredNumber} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton justClick={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton justClick={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;//deviceWidth < 380 ? 150:300,

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 400 ? 30:100, //50,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'open-sans'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,              //it determines how much space the container should leave from top 
        marginHorizontal: 24,       //it determines how much space the container should leave horizontally from edge
        padding: 25,                 //it determines the size of that container
        backgroundColor: '#72063c',  //it determines background color of container
        borderRadius: 8,             //it determines the Curve shape of container
        elevation: 20,              //it determines the shadow of container | but only android specific 
        shadowColor: 'black',                //it determines the shadow Color of container | but only iOS specific 
        shadowOffset: { width: 6, height: 6 },   //it determines the shadow direction of container
        shadowOpacity: 0.5,                 //it determines the shadow intensity of container
        shadowRadius: 3                     //it determines the shadow sharpness of container
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 3,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});