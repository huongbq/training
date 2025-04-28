import { ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuth, AuthProvider } from "contexts/AuthContext";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useThemeContext, ThemeProviderCustom } from "contexts/ThemeContext";

function NavigationLayout() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { theme } = useThemeContext();

  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    if (segments.length > 0) {
      setIsNavigationReady(true);
    }
  }, [segments]);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup =
      segments[0] === "login" || segments[0] === "on-boarding";

    if (!isAuthenticated && !inAuthGroup) {
      router.replace("/login");
    } else if (isAuthenticated && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, isNavigationReady, segments]);

  return (
    <ThemeProvider value={theme}>
      <Stack initialRouteName="on-boarding">
        <Stack.Screen name="on-boarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar />
    </ThemeProvider>
  );
}

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <NavigationLayout />
      </ThemeProviderCustom>
    </AuthProvider>
  );
}
