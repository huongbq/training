import React from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const menuItems = [
  { icon: "car", label: "My Vehicle" },
  { icon: "credit-card", label: "Payment Methods" },
  { icon: "user", label: "Personal Info" },
  { icon: "lock", label: "Security" },
  { icon: "globe", label: "Language", right: "English (US)" },
  { icon: "moon", label: "Dark Mode", toggle: true },
  { icon: "help-circle", label: "Help Center" },
  { icon: "file-text", label: "Privacy Policy" },
  { icon: "info", label: "About EVPoint" },
];

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Account</Text>
        <Feather name="settings" size={20} color="#111" />
      </View>

      {/* User Info */}
      <TouchableOpacity style={styles.profileRow}>
        <Image
          source={{
            uri: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/461319032_2897519397052862_5624551193977713148_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE2QYA9cFou3O6O6LvXdULpEcZ5XlPMP6kRxnleU8w_qRAN3LlbzJS3NyD7t52M-Cx81gDlmkste1LtvNyYj4gU&_nc_ohc=KQJvLNBXEgQQ7kNvwGCxrHE&_nc_oc=AdkHy0Gc_d2BO-TnbXEY5g5W_lRekvuTuO0IdaArf1pmtMLQcRLCIc5uPOO4Hqnsfl8&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=XmFy-X7kCgpyFD1buLE0_w&oh=00_AfEEnJKWPvCm9rNWFQ3bO8btKZsoBBrmaJFFjJd0pvKfNg&oe=6811186B",
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>fat guy</Text>
          <Text style={styles.phone}>1900 1001</Text>
        </View>
      </TouchableOpacity>

      {/* Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Feather
              name={item.icon}
              size={20}
              color="#374151"
              style={{ width: 24 }}
            />
            <View style={styles.menuLabelWrapper}>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            {item.toggle ? (
              <Switch value={false} onValueChange={() => {}} />
            ) : item.right ? (
              <Text style={styles.menuRight}>{item.right}</Text>
            ) : (
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutRow}>
        <Feather
          name="log-out"
          size={20}
          color="#EF4444"
          style={{ width: 24 }}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  phone: {
    color: "#6B7280",
    marginTop: 2,
  },
  menuContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginTop: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  menuLabelWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  menuLabel: {
    fontSize: 16,
    color: "#111827",
  },
  menuRight: {
    fontSize: 14,
    color: "#6B7280",
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  logoutText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12,
  },
});

export default AccountScreen;
