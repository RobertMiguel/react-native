import { View, Text, Box, Center, ScrollView } from 'native-base';
import React from 'react';
import Colors from '../color';
import CartIterms from '../Components/CartIterms';

function CartScreen() {
    return(
        <Box flex={1} safeAreaTop bg={Colors.subGreen}>
            {/* HEADER */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Cart
                </Text>
            </Center>

            <CartIterms/>

            {/* IF CART IS EMPYT */}
            {/* <CartEmpyt/> */}
            {/* CART ITEMS */}
            <ScrollView showsVerticalScrollIndicator={false}>
            </ScrollView>
        </Box>
    )
}

export default CartScreen;