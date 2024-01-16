import { StyleSheet, View, TextInput } from 'react-native';

export default function AppInput({ text, handler, placeholder }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={handler}
                value={text}
                placeholder={placeholder}
                autoComplete='off'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        height: 60,
        width: '100%',
    },
    input: {
        height: '100%',
        width: '100%',
        margin: 12,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 50,
        backgroundColor: "#eef3ff",
    },
});
