import {
Box,
Text,
Flex,
Heading,
Image,
Pressable,
ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '../color'
import Rating from './Rating'
import api from '../services/api'

function HomeProducts() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchApi() {
            const response = await api.get('/games')
            setProducts(response.data)
        }
        fetchApi()
    }, [])

    return(
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {products.map((product) => (
                    <Pressable 
                        key={product.id}
                        w="47%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                    >
                        <Image 
                                source={{uri: product.coverImage}}
                                w="full"
                                h={24}
                                resizeMode="contain"
                        />
                        <Box
                            px={4}
                            pt={1}
                        >
                            <Heading
                                size="sm"
                                bold
                            >
                                R$ Valor
                            </Heading>
                            <Text 
                                fontSize={10}
                                mt={1}
                                isTruncated
                                w="full"
                            >
                                {product.title}
                            </Text>
                            {/* rating */}
                            {/* Simulation value={product.rating} */}
                            <Rating />
                        </Box>
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    )
}

export default HomeProducts;