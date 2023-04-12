import { View, Text, StyleSheet } from 'react-native'


export function Ingredientes({data}) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        padding: 12
    },
    name:{
        fontWeight: 50,
        fontSize: 16
    }
})