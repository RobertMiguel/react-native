import React, { useMemo } from "react";
import { Text as RNText, TextStyle } from "react-native";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import createStyles from "./styles";

interface IProps {
  fontWeight: string;
  fontSize: number;
  textAlign: string;
  children: React.ReactNode;
}

const CustomText: React.FC<IProps> = ({
  fontWeight,
  fontSize,
  textAlign,
  children,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const styles = useMemo(() => createStyles(), []);

  const fontWeightMapping: Record<string, TextStyle["fontWeight"]> = {
    normal: "normal",
    bold: "bold",
    100: "100",
    200: "200",
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    700: "700",
    800: "800",
    900: "900",
  };

  const textAlignMapping: Record<string, TextStyle["textAlign"]> = {
    left: "left",
    center: "center",
    right: "right",
  };

  return (
    <RNText
      style={[
        styles.text,
        {
          fontWeight: fontWeightMapping[fontWeight] || undefined,
          fontSize: fontSize,
          textAlign: textAlignMapping[textAlign] || undefined,
        },
      ]}
    >
      {children}
    </RNText>
  );
};

export default CustomText;
