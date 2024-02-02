
import { StyleSheet, Text, View, Dimensions } from "react-native";


function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#04FBEC',
        padding: deviceWidth<380?12:24,//10,
        margin: deviceWidth<380?12:24,//5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberText: {
        color: 'red',
        fontSize: 30, //deviceWidth<380?12:24,
        fontWeight: 'bold'
    }
})