import React, { useMemo, useEffect, useState, useCallback } from "react";
import { View, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

import Template from "../../src/components/Template/Template";
import Center from "../../src/components/Center/Center";
import { LOGO } from "../../src/assets";
import Colors from "../../src/constants/Colors";
import ButtonProcess from "../../src/components/ButtonLink/ButtonLink";
import ContentColumn from "../../src/components/ContentColumn/ContentColumn";
import createStyles from "./styles";
import CustomText from "../../src/components/CustomText/CustomText";
import LineDecoration from "../../src/components/LineDecoration/LineDecoration";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const styles = useMemo(() => createStyles(), []);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold: Poppins_700Bold,
    Poppins_400Regular: Poppins_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Template bgColor={Colors.green.text}>
      <Center bgColor={Colors.green.text}>
        <Image source={LOGO} style={{ width: 200, height: 200 }} />
      </Center>
      <ContentColumn
        bRTR={50}
        bRTF={50}
        height="50%"
        flexDirection="column"
        bgColor={Colors.light.text}
      >
        <View style={[styles.header]}>
          <LineDecoration alignItems="start" />
          <CustomText fontWeight="bold" fontSize={20} textAlign="center">
            TombApp
          </CustomText>
          <LineDecoration alignItems="end" />
        </View>
        <View style={[styles.description]}>
          <CustomText fontWeight="100" fontSize={15} textAlign="center">
            Seu app para facilitação no
          </CustomText>
          <CustomText fontWeight="100" fontSize={15} textAlign="center">
            cadastro de produtos
          </CustomText>
          <CustomText fontWeight="100" fontSize={15} textAlign="center">
            e tombamentos
          </CustomText>
        </View>
        <Link href="/products" asChild>
          <ButtonProcess />
        </Link>
      </ContentColumn>
    </Template>
  );
}
