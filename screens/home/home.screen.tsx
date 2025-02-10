import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/context/theme.context";
import WelcomeHeader from "@/components/home/welcome.header";
import HomeBanner from "@/components/home/home.banner";
import {
  fontSizes,
  IsAndroid,
  windowHeight,
  windowWidth,
} from "@/themes/app.constant";
import { scale, verticalScale } from "react-native-size-matters";
import GradiantText from "@/components/common/gradient.text";
import SkeltonLoader from "@/utils/skelton";
import useGetCourses from "@/hooks/fetch/useGetCourses";
import CourseCard from "@/components/cards/course.card";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
  const { theme } = useTheme();
  const { courses, loading } = useGetCourses();

  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <>
      <LinearGradient
        colors={
          theme.dark ? ["#180D41", "#2A2D32", "#131313"] : ["#fff", "#f7f7f7"]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flex: 1,
          backgroundColor: theme.dark ? "#101010" : "#fff",
        }}
      >
        <WelcomeHeader />
        <View style={{ flex: 1 }}>
          {loading ? (
            <>
              <SkeltonLoader />
              <SkeltonLoader />
            </>
          ) : (
            <View
              style={{
                paddingHorizontal: scale(8),
              }}
            >
              <FlatList
                ListHeaderComponent={() => (
                  <>
                    <HomeBanner />
                    <View
                      style={{
                        marginHorizontal: windowWidth(20),
                        marginTop: verticalScale(-25),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: windowHeight(5),
                        }}
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
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View
                          style={{
                            backgroundColor: "#12BB70",
                            width: windowWidth(15),
                            height: windowWidth(15),
                            borderRadius: 100,
                          }}
                        />
                        <Text
                          style={{
                            fontFamily: "Poppins_400Regular",
                            fontSize: fontSizes.FONT18,
                            paddingLeft: windowWidth(5),
                            color: theme.dark ? "#fff" : "#000",
                          }}
                        >
                          our comprehensive project based courses
                        </Text>
                      </View>
                    </View>
                  </>
                )}
                data={courses}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CourseCard item={item} />}
                ListEmptyComponent={<Text>No courses Available yet!</Text>}
                ListFooterComponent={() => (
                  <View
                    style={{
                      height: theme.dark
                        ? verticalScale(60)
                        : verticalScale(10),
                    }}
                  ></View>
                )}
              />
            </View>
          )}
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({});
