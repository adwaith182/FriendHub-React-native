import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

export default function WelcomeScreen() {
  const animation = useRef(null);
  const navigation = useNavigation();

  return (
    <View className="bg-[#dfd0fd] flex-1 justify-center items-center space-y-10 relative">
      <Image
        source={require("../../assets/images/LJ.png")}
        style={{
          position: "absolute",
          width: wp(110),
          height: hp(100),
          top: hp(31),
          resizeMode: "cover",
        }}
      />
      <StatusBar style="light" />

      {/* Lottie Logo */}
      {/* Title and Subtitle */}
      <View className="flex items-center space-y-2">
        <LottieView
          autoPlay
          ref={animation}
          style={{
            bottom: 40,
            width: wp(40),
            height: hp(60),
          }}
          source={require("../../assets/lottie/logo4.json")}
        />
        <Text
          className="text-[#482986] font-extrabold tracking-widest"
          style={{
            fontSize: hp(5),
            bottom: hp(31),
          }}
        >
          LJ
        </Text>

        <Text
          className="text-[#482986] tracking-widest font-medium"
          style={{
            fontSize: hp(2.5),
            bottom: hp(31),
          }}
        >
          Be Always Connected
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#482986",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(5),
            borderRadius: hp(1.5),
            bottom: hp(31),
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "white",
              fontSize: hp(2.2),
              fontWeight: "medium",
            }}
          >
            Let's Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
