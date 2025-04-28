import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import SearchForm from "components/Search";

const savedStations = [
  {
    name: "Walgreens - Brooklyn, NY",
    address: "Brooklyn, 589 Prospect Avenue",
    rating: 4.5,
    reviews: 128,
    status: "Available",
    distance: "1.6 km",
    duration: "5 mins",
  },
  {
    name: "108 Prospect Park W",
    address: "Brooklyn, 108 Prospect Park W",
    rating: 4.3,
    reviews: 104,
    status: "In Use",
    distance: "2.4 km",
    duration: "9 mins",
  },
];

const SavedScreen = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpenSearch((prev) => !prev);
  };
  return (
    <ScrollView style={styles.container}>
      {isOpenSearch === false ? (
        <View style={styles.header}>
          <Text style={styles.title}>
            <Feather name="zap" size={24} color="#10B981" className="ml-1" />{" "}
            Saved
          </Text>
          <Ionicons
            name="search"
            size={24}
            color="#9CA3AF"
            style={{ marginRight: 4 }}
            onPress={handleClick}
          />
        </View>
      ) : (
        <SearchForm />
      )}
      {savedStations.map((station, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1, gap: 8 }}>
              <Text style={styles.stationName}>{station.name}</Text>
              <Text style={styles.address}>{station.address}</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.rating}>{station.rating}</Text>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome
                    key={i}
                    name="star"
                    size={14}
                    color={
                      i < Math.floor(station.rating) ? "#facc15" : "#e5e7eb"
                    }
                  />
                ))}
                <Text style={styles.reviews}>({station.reviews} reviews)</Text>
              </View>
            </View>
            <Ionicons name="navigate-circle" size={28} color="#10B981" />
          </View>

          <View style={styles.detailsRow}>
            <Text
              style={[
                styles.statusTag,
                {
                  backgroundColor:
                    station.status === "Available" ? "#D1FAE5" : "#FECACA",
                  color: station.status === "Available" ? "#059669" : "#DC2626",
                },
              ]}>
              {station.status}
            </Text>
            <Text style={styles.infoText}>📍 {station.distance}</Text>
            <Text style={styles.infoText}>🚗 {station.duration}</Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  stationName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  address: {
    color: "#6B7280",
    marginVertical: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginRight: 4,
  },
  reviews: {
    marginLeft: 4,
    color: "#6B7280",
    fontSize: 12,
  },
  detailsRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    gap: 10,
  },
  statusTag: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontWeight: "600",
  },
  infoText: {
    fontSize: 12,
    color: "#4B5563",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
  },
  viewBtn: {
    flex: 1,
    borderColor: "#10B981",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  viewText: {
    color: "#10B981",
    fontWeight: "600",
  },
  bookBtn: {
    flex: 1,
    backgroundColor: "#10B981",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  bookText: {
    color: "white",
    fontWeight: "600",
  },
});

export default SavedScreen;
