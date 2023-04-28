import React, {useEffect, useState} from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { GameList } from '../../components/GameList'
import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api'



export default function GamesScreen() {

    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchApi() {
            const response = await api.get('/games')
            setGames(response.data)
        }
        fetchApi()
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.searchGame}>
                <TextInput
                    placeholder='Pesquisar'
                    styles={styles.input}
                    placeholderTextColor={styles.placeHolderColor.color}
                    underlineColorAndroid='transparent'
                />  
                <TouchableOpacity>
                    <Ionicons name='search' size={28} color='#666666'/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={games}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <GameList data={item}/>}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222831',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    searchGame:{
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#3c3c3c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
        paddingLeft: 30,
        paddingRight: 30,
        height: 50
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 60,
    },
    placeHolderColor: {
        color: '#666666'
    }
})