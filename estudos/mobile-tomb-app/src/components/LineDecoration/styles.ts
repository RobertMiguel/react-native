import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../constants/Colors";

const createStyles = () =>
  StyleSheet.create({
    line: {
      height: RFValue(1),
      width: RFValue(100),
      justifyContent: "center",
      backgroundColor: Colors.dark.text,
    },
    dot: {
      height: RFValue(10),
      width: RFValue(10),
      borderRadius: RFValue(50),
      backgroundColor: Colors.dark.text,
    },
  });

export default createStyles;
