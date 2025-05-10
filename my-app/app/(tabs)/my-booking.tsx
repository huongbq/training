import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import SearchForm from "components/Search";
import ButtonBottom from "components/ButtonBottom";

interface IBookingProps {
  date: string;
  time: string;
  station: string;
  address: string;
  plug: string;
  power: string;
  duration: string;
  amount: string;
  remind: boolean;
}

const MyBookingScreen = () => {
  const [tab, setTab] = useState<string>("Upcoming");
  const [remindMe, setRemindMe] = useState<boolean>(true);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpenSearch((prev) => !prev);
  };
  const bookings = {
    Upcoming: [
      {
        date: "Dec 17, 2024",
        time: "10:00 AM",
        station: "Walgreens - Brooklyn, NY",
        address: "Brooklyn, 589 Prospect Avenue",
        plug: "Tesla (Plug)",
        power: "100 kW",
        duration: "1 hour",
        amount: "$14.25",
        remind: true,
      },
    ],
    Completed: [
      {
        date: "Dec 05, 2024",
        time: "14:00 PM",
        station: "ImPark Underhill Garage",
        address: "Brooklyn, 105 Underhill Ave",
        plug: "CHAdeMO",
        power: "100 kW",
        duration: "1 hour",
        amount: "$15.50",
        completed: true,
      },
      {
        date: "Nov 20, 2024",
        time: "09:00 AM",
        station: "Rapidpark 906 Union St.",
        address: "Brooklyn, 906 Union St",
        plug: "CCS",
        power: "50 kW",
        duration: "1 hour",
        amount: "$12.25",
        completed: true,
      },
    ],
    Canceled: [
      {
        date: "Dec 03, 2024",
        time: "15:30 PM",
        station: "MTP Parking 755 Kent Ave",
        address: "Brooklyn, 755 Kent Ave",
        plug: "J1772",
        power: "50 kW",
        duration: "30 mins",
        amount: "$8.50",
        canceled: true,
      },
      {
        date: "Nov 18, 2024",
        time: "12:30 AM",
        station: "ImPark 353 4th Ave",
        address: "Brooklyn, 353 4th Ave",
        plug: "Mennekes",
        power: "100 kW",
        duration: "1 hour",
        amount: "$14.25",
        canceled: true,
      },
    ],
  };

  const renderBookingCard = (item: IBookingProps) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        {tab === "Upcoming" && (
          <View style={styles.remindRow}>
            <Text style={styles.remindText}>Remind me</Text>
            <Switch
              value={remindMe}
              onValueChange={setRemindMe}
              trackColor={{ false: "#D1D5DB", true: "#10B981" }}
              thumbColor={remindMe ? "#fff" : "#fff"}
            />
          </View>
        )}
        {tab === "Completed" && (
          <View style={styles.statusTagCompleted}>
            <Text style={styles.statusText}>Completed</Text>
          </View>
        )}
        {tab === "Canceled" && (
          <View style={styles.statusTagCanceled}>
            <Text style={styles.statusText}>Canceled</Text>
          </View>
        )}
      </View>

      <View style={styles.stationInfo}>
        <View>
          <Text style={styles.stationName}>{item.station}</Text>
          <Text style={styles.stationAddress}>{item.address}</Text>
        </View>
        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="navigate" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Ionicons name="battery-charging" size={20} color="#6B7280" />
          <Text style={styles.detailText}>{item.plug}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{item.power}</Text>
          <Text style={styles.detailLabel}>Max. power</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{item.duration}</Text>
          <Text style={styles.detailLabel}>Duration</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{item.amount}</Text>
          <Text style={styles.detailLabel}>Amount</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        {tab === "Completed" ? (
          <TouchableOpacity style={styles.viewButtonComplete}>
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        ) : tab === "Canceled" ? (
          <TouchableOpacity style={styles.viewButtonOutline}>
            <Text style={styles.viewButtonOutlineText}>View</Text>
          </TouchableOpacity>
        ) : (
          <ButtonBottom firstText="Cancel Booking" secondText="View" />
        )}
        {tab === "Completed" && (
          <TouchableOpacity style={styles.bookAgainButton}>
            <Text style={styles.bookAgainText}>Book Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isOpenSearch === false ? (
        <View style={styles.header}>
          <Feather name="zap" size={24} color="#10B981" />
          <Text style={styles.headerTitle}>My Booking</Text>
          <Feather
            name="search"
            size={24}
            color="#111827"
            onPress={handleClick}
          />
        </View>
      ) : (
        <SearchForm />
      )}
      <View style={styles.tabs}>
        {Object.keys(bookings).map((key: any) => (
          <TouchableOpacity key={key} onPress={() => setTab(key)}>
            <Text style={[styles.tabText, tab === key && styles.activeTab]}>
              {key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {bookings[tab as keyof typeof bookings].map(
          (item: any, index: number) => (
            <View key={index}>{renderBookingCard(item)}</View>
          )
        )}
      </ScrollView>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 16,
    color: "#9CA3AF",
    paddingVertical: 4,
  },
  activeTab: {
    color: "#10B981",
    borderBottomWidth: 2,
    borderBottomColor: "#10B981",
  },
  content: {
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 16,
    marginBottom: 16,
    shadowColor: "#e5e7eb",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 5,
    fontWeight: "600",
  },
  time: {
    fontSize: 14,
    color: "#6B7280",
  },
  remindRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  remindText: {
    color: "#6B7280",
    fontSize: 14,
    marginRight: 8,
  },
  stationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#6B7280",
    borderTopWidth: 1,
    borderTopColor: "#6B7280",
  },
  stationName: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "700",
    color: "#111827",
  },
  stationAddress: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  mapButton: {
    backgroundColor: "#10B981",
    padding: 10,
    borderRadius: 30,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  detailItem: {
    alignItems: "center",
  },
  detailText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  detailLabel: {
    fontSize: 12,
    color: "#6B7280",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 8,
    flexWrap: "wrap",
  },
  viewButtonComplete: {
    flex: 1,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#10b981",
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  viewButtonOutline: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#10B981",
    borderRadius: 20,
    alignItems: "center",
  },
  viewButtonOutlineText: {
    color: "#10B981",
    fontSize: 16,
    fontWeight: "600",
  },
  bookAgainButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#10B981",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  bookAgainText: {
    color: "#10B981",
    fontSize: 16,
    fontWeight: "600",
  },
  statusTagCompleted: {
    backgroundColor: "#10B981",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusTagCanceled: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default MyBookingScreen;
