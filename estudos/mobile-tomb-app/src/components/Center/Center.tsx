import React, { useMemo } from "react";
import { View } from "react-native";

import createStyles from "./styles";

interface IProps {
  children: React.ReactNode;
  bgColor: string;
}

const Center = ({ children, bgColor }: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {children}
    </View>
  );
};

export default Center;
