import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const createStyles = () =>
  StyleSheet.create({
    button: {
      width: RFValue(140),
      height: RFValue(60),
      borderRadius: RFValue(50),
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: Colors.yellow.yellowPrimary,
    },
    label: {
      paddingRight: RFValue(15),
    },
    icon: {
      width: RFValue(60),
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: RFValue(50),
      backgroundColor: Colors.yellow.text,
    },
  });

export default createStyles;
