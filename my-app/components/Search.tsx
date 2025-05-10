import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function SearchForm() {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={20}
        color="#9CA3AF"
        style={styles.searchIcon}
      />
      <TextInput placeholder="Search station" style={styles.searchInput} />
      <Feather name="sliders" size={20} color="#10B981" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 4,
  },
});
