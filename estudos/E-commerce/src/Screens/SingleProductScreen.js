import { View, Text, Box, ScrollView, Image, Heading, HStack, } from 'native-base';
import React, {useState} from 'react';
import Colors from '../color'
import Buttone from '../Components/Buttone'
import Rating from '../Components/Rating';
import Review from '../Components/Review';
import NumericInput from 'react-native-numeric-input';

function SingleProductScreen() {

    return(
        <Box 
            safeArea
            flex={1}
            bg={Colors.white}
        >
            <ScrollView 
                px={5} 
                showsVerticalScrollIndicator={false}
            >
                <Image 
                    source={require("../../assets/image/arc.jpg")} 
                    alt="Jogo ARK" 
                    w="full" 
                    h={300} 
                    resizeMode="contain"
                    />
                 <Heading bold fontSize={15} isTruncated mb={2} lineHeight={22}>
                    ARK: Survival Of The Fittest
                 </Heading>
                 <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    R$ : 200,00
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    ARK: Survival of the Fittest is a Multiplayer Online Survival Arena (MOSA) game that pits as many as 72 combatants against one another in the struggle for survival in a harsh, changing environment packed with deadly creatures, &#x201C;Evolution Events,&#x201D; and other players.
                </Text>
                <Buttone bg={Colors.main} color={Colors.white} mt={10}>
                    ADD TO CART
                </Buttone>
                {/* Review */}
                <Review/>
            </ScrollView>
        </Box>
    )
}

export default SingleProductScreen;