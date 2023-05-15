import { Box, HStack, Pressable } from 'native-base';
import React, { useState, useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import api from '../services/api';

const Swiper = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const response = await api.get('/games');
            setProducts(response.data);
        }
        fetchApi();
    }, []);

    return (
        <SwipeListView
            rightOpenValue={-50}
            previewRowKey={0}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            data={products.slice(0, 2)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

const renderItem = (data) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
                <Text>Item</Text>
            </HStack>
        </Box>
    </Pressable>
}

const CartIterms = ({ item }) => {
    return (
        <Box mr={6}>
            
        </Box>
    );
};

export default CartIterms;
