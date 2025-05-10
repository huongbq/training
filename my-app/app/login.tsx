import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { IconSymbol } from "components/ui/IconSymbol";
import { router } from "expo-router";
import { useAuth } from "contexts/AuthContext";

export default function SignInScreen() {
  const { login } = useAuth();

  const handleSignIn = async () => {
    await login("", "");
    router.replace("/(tabs)");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's you in</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>
          <IconSymbol name="face.dashed.fill" color="black" />
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.phoneButton} onPress={handleSignIn}>
        <Text style={styles.phoneText}>Sign in with Phone Number</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  illustration: {
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
  },
  socialButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  socialText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  orText: {
    marginVertical: 16,
    fontSize: 16,
    color: "#9CA3AF",
  },
  phoneButton: {
    width: "100%",
    backgroundColor: "#10B981",
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 24,
  },
  phoneText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    color: "#6B7280",
  },
  signUp: {
    color: "#10B981",
    fontWeight: "500",
  },
});
