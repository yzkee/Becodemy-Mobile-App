import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/context/theme.context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fontSizes,
  IsAndroid,
  windowHeight,
  windowWidth,
} from "@/themes/app.constant";
import GradiantText from "@/components/common/gradient.text";
import { scale, verticalScale } from "react-native-size-matters";
import SkeltonLoader from "@/utils/skelton";
import CourseCard from "@/components/cards/course.card";
import useGetCourses from "@/hooks/fetch/useGetCourses";

export default function CoursesScreen() {
  const { theme } = useTheme();
  const { courses, loading } = useGetCourses();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.dark ? "#131313" : "#fff",
      }}
    >
      <View style={{ marginTop: verticalScale(-35) }}>
        <StatusBar barStyle={!theme.dark ? "dark-content" : "light-content"} />
        {loading ? (
          <View>
            <SkeltonLoader />
            <SkeltonLoader />
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: scale(8),
            }}
          >
            <FlatList
              data={courses}
              ListHeaderComponent={() => (
                <View style={{ marginHorizontal: windowWidth(20) }}>
                  <View
                    style={{ flexDirection: "row", marginTop: windowHeight(8) }}
                  >
                    <Text
                      style={{
                        fontSize: fontSizes.FONT35,
                        fontFamily: "Poppins_500Medium",
                        color: theme.dark ? "#fff" : "#000",
                      }}
                    >
                      Popular
                    </Text>
                    <GradiantText
                      text="Courses"
                      styles={{
                        fontSize: fontSizes.FONT35,
                        fontFamily: "Poppins_500Medium",
                        paddingLeft: scale(5),
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        backgroundColor: "#12BB70",
                        width: windowWidth(15),
                        height: windowWidth(15),
                        borderRadius: 100,
                        marginTop: verticalScale(-18),
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontSize: fontSizes.FONT18,
                        paddingLeft: windowWidth(5),
                        paddingBottom: windowHeight(20),
                        color: theme.dark ? "#fff" : "#000",
                      }}
                    >
                      our comprehensive project based courses
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <CourseCard item={item} />}
              ListEmptyComponent={<Text>No courses Available yet!</Text>}
              ListFooterComponent={() => (
                <View
                  style={{
                    paddingBottom: theme.dark
                      ? verticalScale(40)
                      : verticalScale(0),
                  }}
                ></View>
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
