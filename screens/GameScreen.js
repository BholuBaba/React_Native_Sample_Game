import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import { AntDesign } from '@expo/vector-icons';
import GuessLogItems from "../components/game/GuessLogItems";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min.max, exclude);
    }
    else {
        return rndNum;
    }
}
let minBoundry = 1;
let maxBoundry = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRoundListLength);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundry = 1;
        maxBoundry = 100;
    }, [])

    function nextGuessHandler(direction) {   // direction => 'lower' or 'higher
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!", 'you are entering a wrong number', [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundry = currentGuess;
        }
        else {
            minBoundry = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
    }
    const guessRoundListLength = guessRounds.length;    //this veriable is hoisted above

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.cardContainer}>
                <Text style={styles.header}>Heigher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton justClick={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minus" size={20} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton justClick={nextGuessHandler.bind(this, 'greater')}>
                            <AntDesign name="plus" size={20} />
                        </PrimaryButton>
                    </View>
                </View>
            </View>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerwide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton justClick={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minus" size={20} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton justClick={nextGuessHandler.bind(this, 'greater')}>
                            <AntDesign name="plus" size={20} />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess!</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
                <FlatList data={guessRounds}
                    renderItem={(itemData) => {
                        return (
                            <GuessLogItems roundNumbers={guessRoundListLength - itemData.index}
                                guess={itemData.item} />
                        )
                    }}
                    keyExtractor={(item) => item} />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        padding: 25,
        alignItems: 'center'
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,              //it determines how much space the container should leave from top 
        marginHorizontal: 24,       //it determines how much space the container should leave horizontally from edge
        padding: 20,                 //it determines the size of that container
        backgroundColor: '#72063c',  //it determines background color of container
        borderRadius: 8,             //it determines the Curve shape of container
        elevation: 20,              //it determines the shadow of container | but only android specific 
        shadowColor: 'black',                //it determines the shadow Color of container | but only iOS specific 
        shadowOffset: { width: 6, height: 6 },   //it determines the shadow direction of container
        shadowOpacity: 0.5,                 //it determines the shadow intensity of container
        shadowRadius: 3                     //it determines the shadow sharpness of container
    },
    header: {
        fontSize: 20,
        fontFamily: 'open-sans',
        color: 'white',
        marginBottom: 20
    },
    buttonsContainerwide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 8,
        marginBottom: -32
    }
})