import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../constants/Colors";

const createStyles = () =>
  StyleSheet.create({
    button: {
      width: RFValue(75),
      height: RFValue(75),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(50),
      backgroundColor: Colors.gray.graySecondary,
    },
  });

export default createStyles;
