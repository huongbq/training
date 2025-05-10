import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  handleNext?: () => void;
  handleSkip?: () => void;
  firstText: string;
  secondText: string;
}

export default function ButtonBottom({
  handleSkip,
  handleNext,
  firstText,
  secondText,
}: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.firstButton} onPress={handleSkip}>
        <Text style={styles.firstButtonText}>{firstText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondButton} onPress={handleNext}>
        <Text style={styles.secondButtonText}>{secondText}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  firstButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#10B981",
    borderRadius: 20,
    alignItems: "center",
  },
  firstButtonText: {
    color: "#10B981",
    fontSize: 16,
    fontWeight: "600",
  },
  secondButton: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  secondButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
