import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import SearchBar from "react-native-search-bar";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Homescreen() {
  const navigation = useNavigation();
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);

  const toggleCalendarModal = () => {
    setCalendarModalVisible(!isCalendarModalVisible);
  };

  const handleDateSelect = (date) => {
    console.log("Selected date:", date);
    toggleCalendarModal();
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          className="space-y-6 pt-14"
        >
          {/* Avatar and Bell Icon */}
          <View className="mx-4 flex-row justify-between items-center">
            <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
            <Image
              source={require("../../assets/images/woman.png")}
              style={{
                width: hp(5),
                height: hp(5),
                resizeMode: "cover",
              }}
              className="rounded-full"
            />
          </View>
          <View className="mx-4 space-y-1 mb-2"></View>
          <View
            style={{
              flex: 1,
              width: "auto",
              height: hp(86),
              backgroundColor: "#dfd0fd",
              borderRadius: 45,
            }}
          >
            <View className="mx-5 space-y-1 mt-5">
              <View>
                <Text
                  style={{
                    fontSize: hp(3.5),
                  }}
                  className="font-bold text-neutral-800"
                >
                  current plans
                </Text>
              </View>
            </View>
            <View style={{ marginHorizontal: 7, marginTop: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "black",
                }}
              >
                <Image
                  source={require("../../assets/images/search.png")}
                  style={{ width: hp(5), height: hp(5), marginRight: 10 }}
                />
                <TextInput
                  placeholder="Search"
                  clearButtonMode="always"
                  style={{
                    flex: 1,
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                  }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: hp(3.5),
                  }}
                  className="font-bold text-neutral-800"
                >
                  December
                </Text>
              </View>
            </View>
            <View style={{ position: "absolute", bottom: 10, left: 16 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                <Image
                  source={require("../../assets/images/home.png")}
                  style={{ width: hp(7), height: hp(7) }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", bottom: 10, left: 100 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                <Image
                  source={require("../../assets/images/chat.png")}
                  style={{ width: hp(7), height: hp(7) }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", bottom: 10, right: 100 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                <Image
                  source={require("../../assets/images/calender.png")}
                  style={{ width: hp(8), height: hp(8) }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ position: "absolute", bottom: 10, right: 16 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Image
                  source={require("../../assets/images/settings.png")}
                  style={{ width: hp(8), height: hp(8) }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
