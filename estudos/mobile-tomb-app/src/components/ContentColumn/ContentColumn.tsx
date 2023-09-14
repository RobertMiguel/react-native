import React, { useMemo } from "react";
import { View, TextStyle } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import createStyles from "./styles";

interface IProps {
  children: React.ReactNode;
  bRTR: number;
  bRTF: number;
  height: string;
  flexDirection: string;
  bgColor: string;
}

const ContentColumn = ({
  children,
  bRTR,
  bRTF,
  height,
  bgColor,
  flexDirection,
}: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  const flexDirectionMapping: Record<string, TextStyle["flexDirection"]> = {
    row: "row",
    column: "column",
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderTopRightRadius: bRTR,
          borderTopLeftRadius: bRTF,
          height: hp(height),
          flexDirection: flexDirectionMapping[flexDirection],
          backgroundColor: bgColor,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default ContentColumn;
