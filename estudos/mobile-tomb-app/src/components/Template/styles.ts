import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.light.text,
    },
  });

export default createStyles;
