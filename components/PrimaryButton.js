import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, justClick }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={justClick}
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
                android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72900d',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,              //it determines the shadow of container | but only android specific 
        shadowColor: 'black',                //it determines the shadow Color of container | but only iOS specific 
        shadowOffset: { width: 4, height: 4 },   //it determines the shadow direction of container
        shadowOpacity: 1,                 //it determines the shadow intensity of container
        shadowRadius: 5,                    //it determines the shadow sharpness of container

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});