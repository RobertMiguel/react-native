import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Template from "../../src/components/Template/Template";
import Colors from "../../src/constants/Colors";
import ContentColumn from "../../src/components/ContentColumn/ContentColumn";
import CustomText from "../../src/components/CustomText/CustomText";
import CustomTextInput from "../../src/components/CustomTextInput/CustomTextInput";
import Center from "../../src/components/Center/Center";
import ButtonSend from "../../src/components/ButtonSend/ButtonSend";
import ButtonClear from "../../src/components/ButtonClear/ButtonClear";
import Form from "../../src/components/Form/Form";

export default function Products() {
  return (
    <Template bgColor={Colors.light.text}>
      <CustomText fontWeight="100" fontSize={20} textAlign="center">
        Cadastro de produtos tombados
      </CustomText>
      <Form />
      <ButtonSend />
      <ButtonClear />
    </Template>
  );
}
