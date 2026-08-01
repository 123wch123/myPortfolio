import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Menu from "./component/MenuButton";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      {/* 全局悬浮菜单：fixed 定位，覆盖在全部页面之上，所有路由共享 */}
      <Menu />
    </SafeAreaProvider>
  );
}