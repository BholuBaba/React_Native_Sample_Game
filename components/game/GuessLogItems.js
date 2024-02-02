import { StyleSheet, Text, View } from "react-native";


function GuessLogItems({roundNumbers,guess}){
return (
    <View style={styles.listitem}>
        <Text>#{roundNumbers}</Text>
        <Text>Opponent's Guess : {guess}</Text>
    </View>
)
}

export default GuessLogItems;

const styles=StyleSheet.create({
    listitem:{
        borderRadius: 30,
        borderWidth:1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: 'yellow',
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        elevation: 4,
        shadowColor:'black',
        shadowOffset: {width: 3, height:3},
        shadowOpacity: 0.25,
        shadowRadius:3
    },
})