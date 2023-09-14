import React, { FC, useMemo, forwardRef } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import createStyles from "./styles";

interface IProps {
  onPress?: () => void;
}

const ButtonLink: FC<IProps> = forwardRef<TouchableOpacity, IProps>(
  ({ onPress }, ref) => {
    const styles = useMemo(() => createStyles(), []);

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={[styles.button]}
        ref={ref}
      >
        <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
      </TouchableOpacity>
    );
  }
);

export default ButtonLink;
