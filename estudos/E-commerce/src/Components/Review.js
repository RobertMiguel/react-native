import { Text, Input, View, Box, Heading } from 'native-base';
import Colors from '../color'
import React, { Component } from 'react'
import Rating from './Rating';
import Message from './Message';

export class Review extends Component {
    render() {
        return(
            <Box my={9}>
                <Heading bold fontSize={15} isTruncated>
                    REVIEW
                </Heading>
                <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
                    <Heading font={15} color={Colors.black}>
                        User
                    </Heading>
                    <Rating value={4}/>
                    <Text mb={3}>Dez 10 2023</Text>
                    <Message bg={Colors.white} color={Colors.black} size={12} children={"Comment"}/>
                </Box>
            </Box>
        )
    }
}

export default Review;