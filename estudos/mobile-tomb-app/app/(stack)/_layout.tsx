import { Stack } from "expo-router/stack";

export default function TabRoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="products"
        options={{ title: "Produtos", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
