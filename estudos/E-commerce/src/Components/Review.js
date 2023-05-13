import { Text, Input, View, Box, Heading, VStack, FormControl, Select, CheckIcon, TextArea } from 'native-base';
import Colors from '../color';
import React, { Component, useState } from 'react';
import Rating from './Rating';
import Buttone from './Buttone';
import Message from './Message';


export default function Review() {
        const [ratings, setRatings] = useState('')
        return(
            <Box my={9}>
                <Heading bold fontSize={15} isTruncated>
                    REVIEW
                </Heading>
                {/* IF THERE IS NO REVIEW */}
                {/* <Message 
                        bg={Colors.main} 
                        color={Colors.deepestGray} 
                        size={12} 
                        children={"NO REVIEW"}
                        bold
                    /> */}
                {/* REVIEW */}
                <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
                    <Heading font={15} color={Colors.black}>
                        User
                    </Heading>
                    <Rating value={4}/>
                    <Text mb={2} fontSize={11}>Dez 10 2023</Text>
                    <Message 
                        bg={Colors.white} 
                        color={Colors.black} 
                        size={12} 
                        children={"REVIEW"}
                    />
                </Box>
                {/* WHERE REVIEW */}
                {/* <Box mt={6}>
                    <Heading fontSize={15} color={Colors.black}>
                        WRITE REVIEW THIS PRODUCT
                    </Heading>
                    <VStack space={6}>
                        <FormControl space={6}>
                            <FormControl.Label
                                _text={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}                            
                            >Rating</FormControl.Label>
                            <Select 
                                bg={Colors.subGreen}
                                borderWidth={0}
                                rounded={5}
                                py={4}
                                placeholder="Choose Rate"
                                _selectedItem={{
                                    bg:Colors.subGreen,
                                    endIcon: <CheckIcon size={3} />,
                                }}
                                selectedValue={ratings}
                                onValueChange={(e) => setRatings(e)}
                            >
                                <Select.Item label="1 - Poor" value="1" />
                                <Select.Item label="2 - Fair" value="2" />
                                <Select.Item label="3 - Good" value="3" />
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                                _text={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}
                            >
                                Comment
                            </FormControl.Label>
                            <TextArea 
                                h={24}
                                w="full"
                                placeholder="This product is good ..." 
                                borderWidth={0} 
                                bg={Colors.subGreen}
                                py={4}
                                _focus={{
                                    bg: Colors.subGreen,

                                }}
                            />
                        </FormControl>
                        <Buttone
                            bg={Colors.main}
                            color={Colors.white}
                        >SUBMIT</Buttone>
                        <Message
                            color={Colors.white}
                            bg={Colors.black}
                            children={"Please 'Login' to write a review"}
                        />
                    </VStack>
                </Box> */}
            </Box>
        )
    }