import React, { useMemo } from "react";
import { TextStyle, View } from "react-native";

import createStyles from "./styles";

interface IProps {
  alignItems: string;
}

const LineDecoration = ({ alignItems }: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  const alignItemsMapping: Record<string, TextStyle["alignItems"]> = {
    center: "center",
    end: "flex-end",
    start: "flex-start",
  };

  return (
    <View
      style={[
        styles.line,
        { alignItems: alignItemsMapping[alignItems] || undefined },
      ]}
    >
      <View style={[styles.dot]}></View>
    </View>
  );
};

export default LineDecoration;
