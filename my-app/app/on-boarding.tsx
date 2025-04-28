import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { router } from "expo-router";
import ButtonBottom from "components/ButtonBottom";
import { useAuth } from "contexts/AuthContext";

const loadingScreens = [
  {
    title: "Welcome to EVPoint",
    description: "Lorem ipsum...",
    image: require("assets/images/EVPoint-logo.png"),
  },
  {
    title: "Find Charging Stations",
    description: "Lorem ipsum...",
    image: require("assets/images/EVPoint-logo.png"),
  },
  {
    title: "Start Your Journey",
    description: "Lorem ipsum...",
    image: require("assets/images/EVPoint-logo.png"),
  },
];

export default function LoadingScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showSkip, setShowSkip] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { login } = useAuth();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentScreen]);

  const handleNext = async () => {
    if (currentScreen < loadingScreens.length - 1) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentScreen((prev) => prev + 1);
        fadeAnim.setValue(0);
      });
    } else {
      try {
        await login("", "");
        router.replace("/login");
      } catch (error) {
        console.error("Navigation error:", error);
      }
    }
  };

  const handleSkip = async () => {
    try {
      await login("", "");
      router.replace("/login");
    } catch (error) {
      console.error("Navigation error:", error);
    }
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
          <ButtonBottom
            handleSkip={handleSkip}
            handleNext={handleNext}
            firstText="Skip"
            secondText="Next"
          />
        )}
      </Animated.View>
    </View>
  );
}
