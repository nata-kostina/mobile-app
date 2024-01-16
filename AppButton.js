import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function AppButton({ label, handler }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handler}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        height: 60,
        width: '100%',
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#01ddac",
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        textTransform: "uppercase",
    },
});