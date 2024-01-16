import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import AppButton from './AppButton';
import AppInput from './AppInput';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const [formValues, setFormValues] = useState({
        name: "",
        arg1: "",
        arg2: "",
    });
    const [name, setName] = useState("");
    const [sum, setSum] = useState(0);
    const [list, setList] = useState([]);
    const onAdd = () => {
        // console.log({...formValues});
        // console.log(+formValues.arg1);
        const sum = +formValues.arg1 + +formValues.arg2;
        setSum(sum);
        setName(formValues.name);
        const updatedList = [...list, { ...formValues, sum }]
        setList(updatedList);
        saveData(updatedList);
    }
    const onDisplay = () => {
        navigation.navigate('List', { list });
    }
    const onClear = () => {
        AsyncStorage.removeItem('list');
        setList([]);
        setFormValues({
            name: "",
            arg1: "",
            arg2: "",
        });
        ToastAndroid.show("The list has been emptied", ToastAndroid.LONG);
    }


    const saveData = async (data) => {
        try {
            await AsyncStorage.setItem('list', JSON.stringify(data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const extractData = async () => {
        try {
            const data = await AsyncStorage.getItem('list');
            if (data) {
                setList(data);
            } else {
                setList([]);
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    useEffect(() => {
        extractData();
    }, [])

    console.log({ data: list });
    return (
        <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#25292e', paddingHorizontal: 20 }}>
            <Text style={styles.title}>Project 0</Text>
            <View style={styles.block}>
                <AppInput placeholder="name" text={formValues.name} handler={(value) => setFormValues({ ...formValues, name: value })} />
                <AppInput placeholder="arg1" text={formValues.arg1} handler={(value) => setFormValues({ ...formValues, arg1: value })} />
                <AppInput placeholder="arg2" text={formValues.arg2} handler={(value) => setFormValues({ ...formValues, arg2: value })} />
            </View>
            <View style={styles.block}>
                <AppButton label="Add" handler={onAdd} />
                <AppButton label="Display" handler={onDisplay} />
                <AppButton label="Clear" handler={onClear} />
            </View>
            <View style={styles.block}>
                <View style={styles.row}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.label}>{name.length === 0 ? "none" : name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Sum</Text>
                    <Text style={styles.label}>{sum}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    block: {
        height: "auto",
        marginBottom: 5,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 6,
        padding: 3,
    },
    row: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        color: "#ffffff",
    },
});