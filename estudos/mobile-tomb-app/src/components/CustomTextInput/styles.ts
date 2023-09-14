import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const createStyles = () =>
  StyleSheet.create({
    inputContainer: {
      backgroundColor: Colors.light.lightPrimary,
      width: 270,
      height: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderBottomWidth: 2,
      borderTopColor: Colors.light.text,
      borderRightColor: Colors.light.text,
      borderLeftColor: Colors.light.text,
      borderBottomColor: Colors.gray.text,
      paddingLeft: 18,
    },
  });

export default createStyles;
