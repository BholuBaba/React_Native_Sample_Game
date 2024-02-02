import { View, Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
    return <View>
        <Text style={styles.title}>{children}</Text>
    </View>
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        margin: 0,
        fontSize:20,
        color: 'blue',
        textAlign:'center',
        //borderWidth: 2,
        //borderWidth: Platform.OS === 'android' ? 2 : 0,     
        borderWidth: Platform.select({ios: 0}),
        borderColor: 'blue',
        padding : 8 ,
        maxWidth: '80%'      
    }
})