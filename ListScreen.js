import { StyleSheet, View, Text, ToastAndroid, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

export default function ListScreen({ route, navigation }) {
    const insets = useSafeAreaInsets();

    const [list, setList] = useState([]);
    useEffect(() => {
        const params = route.params;
        console.log({params});
        if (params.list && !Array.isArray(params.list)) {
            const parsed = JSON.parse(params.list);
            setList(parsed);
        }
    }, []);

    function showToast(arg1, arg2) {
        ToastAndroid.show(`arg1 = ${arg1}\n arg2 = ${arg2}`, ToastAndroid.LONG);
    }
    console.log(list);
    return (
        <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#25292e', paddingHorizontal: 20 }}>
            <Text style={styles.title}>Project 0</Text>
            <View style={styles.page}>
                <View style={styles.list}>
                    {list.map((el) => (
                        <Pressable onPress={() => showToast(el.arg1, el.arg2)} key={el.name + el.sum} style={styles.item}>
                            <Text style={styles.name}>{el.name}</Text>
                            <Text style={styles.sum}>{el.sum}</Text>
                            <Svg style={styles.progress} width="60" height="60" viewBox="0 0 60 60">
                                <Circle r="20" cx="30" cy="30" fill="transparent" stroke="#e0e0e0" strokeWidth="6px"></Circle>
                                <Circle r="20" cx="30" cy="30" fill="transparent" stroke="#00B1FF" strokeWidth="6px" strokeDasharray="100px" strokeDashoffset="90px"></Circle>
                            </Svg>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 6,
        padding: 3,
    },
    list: {
        flex: 1,
        gap: 5,
    },
    item: {
        backgroundColor: "#9CCDC4",
        borderRadius: 5,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
    },
    sum: {
        fontSize: 16,
        color: "#259745",
        fontStyle: "italic",
    },
    progress: {
        position: "absolute",
        top: -4,
        right: 0,
        width: 22,
        height: 22,
        // borderRadius: "50%",
        // backgroundColor: "red",
        // transform: "rotate(-90deg)",
        // background: 
        //   "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink 75%, pink 0)",    
    },
});