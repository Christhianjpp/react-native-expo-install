import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator, Pressable, Text } from "react-native";
import { getLatestGames } from "../lib/metracritic";
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons";



export function Main() {
  const [games, setGames] = useState([]);
  const inset = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => {

      setGames(data);
    });
  }, []);

  return (
    <View className="bg-black"
    // style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
    >

      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
