import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Logo } from '../../components/logo'
import { Foodlist } from '../../components/foodlist/index'

import { useNavigation } from '@react-navigation/native'


import api from '../../services/api'

export function Home() {

    const navigation = useNavigation()

    useEffect(() => {
        async function fetchApi() {
          const response = await api.get("/foods");
          setFoods(response.data);
        }
        fetchApi();
      }, []);

    // Nome do Estado, função para trocar a função que estiver dentro do "inputValue"
    // useState, começa com qual valor você quer dentro do inputValue
    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods] = useState([])

    function handleSearch() {
        if(!inputValue) return

        let input = inputValue
        setInputValue("")
        navigation.navigate("Search", { name: input })
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>Quem combina com você</Text>

            <View style={styles.form}>
                <TextInput   
                placeholder='Digite um nome da comida'
                style={styles.input}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color='#4cbe6c' />
                </TouchableOpacity>

            </View>

            <FlatList 
                data={foods}
                keyExtractor={ (item) =>  String(item.id)}
                renderItem={ ({ item }) => <Foodlist data={item}/>}
                showsVerticalScrollIndicator={false}
                />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e',
    },
    form:{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        // Margin fora de View em relação ao Top
        marginTop: 16,
        // Margin fora de View em relação ao Bottom
        marginBottom: 16,
        // Tamanho da borda
        borderWidth: 1,
        // Cor da borda
        borderColor: '#ececec',
        // Padding para a esquerda em relação dentro da Form
        paddingLeft: 8,
        // Padding para a direita em relação dentro da Form
        paddingRight: 8,
        // Direção dos elementos da linha em linha
        flexDirection: 'row',
        // Alinhar ao centro
        alignItems: 'center',
        // Maior espaço entre os elementos da Form
        justifyContent: 'space-between'
    },
    input:{
        // 90% da largura do elemento Input
        width: '90%',
        // O máximo até aonde o Input pode ir
        maxWidth: '90%',
        // Altura do Input
        height: 54,

    }
})
