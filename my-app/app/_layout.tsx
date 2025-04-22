import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuth } from "contexts/AuthContext";
import { useColorScheme } from "hooks/useColorScheme";
import { useState, useEffect } from "react";
import { StatusBar } from "react-native";

export function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    if (segments.length > 0) {
      setIsNavigationReady(true);
    }
  }, [segments]);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      router.replace("/login");
    } else if (isAuthenticated && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, isNavigationReady, segments]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="loading" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar />
    </ThemeProvider>
  );
}
