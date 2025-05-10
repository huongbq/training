import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import SearchForm from "components/Search";

const stations = [
  {
    id: "1",
    name: "ImPark Underhill Garage",
    address: "Brooklyn, 105 Underhill Ave",
    available: true,
  },
  {
    id: "2",
    name: "99 Prospect Park W",
    address: "Brooklyn, 99 Prospect Park W",
    available: false,
  },
  {
    id: "3",
    name: "Walgreens - Brooklyn, NY",
    address: "Brooklyn, 589 Prospect Avenue",
    available: true,
  },
  {
    id: "4",
    name: "Rapidpark 906 Union St.",
    address: "Brooklyn, 906 Union St",
    available: true,
  },
  {
    id: "5",
    name: "MTP Parking 755 Kent Ave",
    address: "Brooklyn, 755 Kent Ave",
    available: false,
  },
  {
    id: "6",
    name: "ImPark 302 2nd St",
    address: "Brooklyn, 302 2nd St",
    available: true,
  },
  {
    id: "7",
    name: "ImPark 353 4th Ave",
    address: "Brooklyn, 353 4th Ave",
    available: true,
  },
  {
    id: "8",
    name: "266 13th St",
    address: "Brooklyn, 266 13th St",
    available: true,
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.iconCircle,
            { backgroundColor: item.available ? "#10B981" : "#EF4444" },
          ]}>
          <Feather name="map-pin" size={20} color="white" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.stationName}>{item.name}</Text>
        <Text style={styles.stationAddress}>{item.address}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#6B7280" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchForm />

      {/* Station List */}
      <FlatList
        data={stations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 100,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  iconContainer: {
    marginRight: 12,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
  },
  stationName: {
    fontWeight: "600",
    fontSize: 18,
    color: "#111827",
  },
  stationAddress: {
    color: "#6B7280",
    fontSize: 16,
  },
});

export default HomeScreen;
