import { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

export const GameCard = ({ game }) => {
  return (
    <Link href={`/${game.slug}`}>
      <Pressable></Pressable>
      <View
        key={game.slug}
        className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      >
        <Image source={{ uri: game.image }} style={styles.image} />
        <View className="flex-shrink">
          <Text style={styles.title}>{game.title}</Text>
          <Score score={game.score} maxScore={100} />
          <Text className="mt-2 text-white font-medium text-base">{game.description.slice(0, 100)}</Text>
        </View>
      </View>
    </Link>
  );
};

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View key={game.slug} style={[styles.card, { opacity }]}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: 100,
    height: 140,
  },
  card: {
    padding: 2,
    margin: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  score: {
    fontSize: 18,
  },

});
