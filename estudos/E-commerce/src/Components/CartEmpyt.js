import { View, Text, Box, Center } from 'native-base';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../color';
import Buttone from './Buttone';

const CartEmpyt = () => {
    return(
        <Box flex={1} px={4}>
            <Center h="90%">
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
                </Center>
                <Text color={Colors.main} bold mt={5}>CART IS EMPYT</Text>
            </Center>
            <Buttone bg={Colors.black} color={Colors.white}>
                START SHOPPING
            </Buttone>
        </Box>
    )
}

export default CartEmpyt;