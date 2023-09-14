import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const createStyles = () =>
  StyleSheet.create({
    header: {
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    title: {
      fontWeight: "300",
      fontFamily: "Poppins_700Bold",
      fontSize: RFValue(20),
    },
    description: {
      alignItems: "center",
    },
  });

export default createStyles;
