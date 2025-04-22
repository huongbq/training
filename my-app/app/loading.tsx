import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { router } from "expo-router";

const loadingScreens = [
  {
    title: "Welcome to EVPoint",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas, eius officia reprehenderit ducimus iure aperiam quasi cumque? Voluptas aliquam eaque error eius saepe delectus numquam molestias tempora eos quibusdam?",
    image: require("assets/images/EVPoint-logo.png"),
  },
  {
    title: "Find Charging Stations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas, eius officia reprehenderit ducimus iure aperiam quasi cumque? Voluptas aliquam eaque error eius saepe delectus numquam molestias tempora eos quibusdam?",
    image: require("assets/images/EVPoint-logo.png"),
  },
  {
    title: "Start Your Journey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas, eius officia reprehenderit ducimus iure aperiam quasi cumque? Voluptas aliquam eaque error eius saepe delectus numquam molestias tempora eos quibusdam?",
    image: require("assets/images/EVPoint-logo.png"),
  },
];

export default function LoadingScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showSkip, setShowSkip] = useState(true);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      if (currentScreen < loadingScreens.length - 1) {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setCurrentScreen(currentScreen + 1);
          fadeAnim.setValue(0);
        });
      } else {
        router.replace("/login");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentScreen]);

  const handleSkip = () => {
    router.replace("/login");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Animated.View
        className="w-full max-w-[384px]"
        style={{ opacity: fadeAnim }}>
        <Image
          source={loadingScreens[currentScreen].image}
          className="w-48 h-48 self-center mb-8"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-center mb-4 text-gray-800">
          {loadingScreens[currentScreen].title}
        </Text>
        <Text className="text-center text-gray-600 mb-8 truncate">
          {loadingScreens[currentScreen].description}
        </Text>

        {showSkip && (
          <TouchableOpacity
            className="bg-[#01B763] rounded-lg p-3"
            onPress={handleSkip}>
            <Text className="text-white text-center font-semibold">Skip</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
}
