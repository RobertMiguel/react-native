import React, { useMemo } from "react";
import { TextInput as RNTextInput } from "react-native";

import createStyles from "./styles";

interface IProps {
  placeholder: string;
}

const CustomTextInput = ({ placeholder }: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <RNTextInput
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      style={[styles.inputContainer]}
    />
  );
};

export default CustomTextInput;
