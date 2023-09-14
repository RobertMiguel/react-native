import { useMemo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import createStyles from "./styles";
import CustomText from "../CustomText/CustomText";

const ButtonClear = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.button]}>
      <View style={[styles.label]}>
        <CustomText fontWeight="100" fontSize={16} textAlign="center">
          Limpar
        </CustomText>
      </View>
      <View style={[styles.icon]}>
        <AntDesign name="close" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonClear;
