import { Box, Center, HStack, Pressable } from 'native-base';
import React, { useState, useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import api from '../services/api';
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons'

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
            previewRowKey="0"
            previewOpenValue={-40}
            previewOpenDelay={3000}
            data={products.slice(0, 2)}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItermns}
            showsVerticalScrollIndicator={false}
        />
    );
};

const renderItem = ({ item }) => {
    return (
      <Pressable>
        <Box ml={6} mb={3}>
          <HStack
            alignItems="center"
            bg={Colors.white}
            shadow={1}
            rounded={10}
            overflow="hidden"
          >
            <Center w="25%" bg={Colors.deepestGray} />
          </HStack>
        </Box>
      </Pressable>
    );
  };
  
const renderHiddenItermns = ({ item }) => {
    return (
      <Pressable
        w={50}
        roundedTopRight={10}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        justifyContent="center"
        bg={Colors.red}
      >
        <Center alignItems="center" space={2}>
          <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>
      </Pressable>
    );
  };

const CartIterms = () => {
    return (
      <Box mr={6}>
        <Swiper />
      </Box>
    );
};
  

export default CartIterms;
