import React, { useMemo } from "react";
import { SafeAreaView } from "react-native";

import createStyles from "./styles";

interface IProps {
  children: React.ReactNode;
  bgColor: string;
}

const Template = ({ children, bgColor }: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      {children}
    </SafeAreaView>
  );
};

export default Template;
