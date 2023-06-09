import { View, Text, Center } from 'native-base';

function Message({ bg, color, children, size, bold }) {
    return(
        <Center bg={bg} p={4} rounded={5}>
            <Text color={color} fontSize={size} bold>
                {children}
            </Text>
        </Center>
    )
}

export default Message;