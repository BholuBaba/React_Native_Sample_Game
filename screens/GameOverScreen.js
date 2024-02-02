import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";


function GameOverScreen({roundNumbers, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();
    let imageSize = 300;
    if(width< 380){
        imageSize = 150;
    }
    if(height< 400){
        imageSize = 80;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    }
    return (
        <ScrollView style={styles.screens}>
        <View style={styles.rootContainer}>
            <Title>Game is Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/image/waoo.jpg')} />
            </View>
            <Text style={styles.txt}>Need {roundNumbers} round to guess numbet {userNumber}.</Text>
            <PrimaryButton justClick={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    )
}
export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screens:{
        flex:1
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems: 'center'
    },
    imageContainer: {
        //width: deviceWidth < 380 ? 150:300,//300,
        //height: deviceWidth < 380 ? 150:300,//250,
        //borderRadius: deviceWidth < 380 ? 75:150,//50,
        borderWidth: 3,
        borderColor: 'white',
        overflow:'hidden',
        margin: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    txt:{
        fontSize: 20,
        color: 'yellow'
    }
})