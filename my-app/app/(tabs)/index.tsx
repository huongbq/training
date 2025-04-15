import React from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const chessBoard = (size: number = 8): string[] => {
    const cellSize = 3;
    const lines: string[] = [];

    for (let row = 0; row < size; row++) {
      let middleRow = "";

      for (let col = 0; col < size; col++) {
        const isBlack = (row + col) % 2 === 1;
        middleRow +=
          " * " +
          (isBlack ? "-".repeat(cellSize - 2) : " ".repeat(cellSize - 2));
      }

      lines.push(middleRow);
    }

    return lines;
  };

  const chessBoardLines = chessBoard();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Vẽ bàn cờ vua:
      </ThemedText>
      <View style={styles.boardContainer}>
        {chessBoardLines.map((line, index) => (
          <ThemedText key={index} style={styles.monoText}>
            {line}
          </ThemedText>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  boardContainer: {
    alignItems: "center",
  },
  monoText: {
    fontSize: 24,
    lineHeight: 32,
  },
});
