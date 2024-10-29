import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metracritic";
import { Score } from "../components/Score";

export default function detail() {


    const { id } = useLocalSearchParams()

    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        if (id) {
            getGameDetails(id).then((data) => {
                setGameInfo(data);
            });
        }
    }, [id]);

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "red" },
                    headerTintColor: "#fff",
                    headerLeft: () => { },
                    headerRight: () => { },
                    headerTitle: `${gameInfo?.title}`,

                }}
            />
            <View >
                {
                    gameInfo === null ? <ActivityIndicator color={"#fff"} size={"large"} /> : (
                        <ScrollView>
                            <View className="justify-center items-center text-center">
                                <Image source={{ uri: gameInfo.img }} className="w-60 h-64 mb-8" />
                                <Score score={gameInfo.score} maxScore={100} />

                                <Text className="text-white font-bold mb-8 text-2xl">{gameInfo.title}</Text>
                                <Text className="text-white/70 d mb-8 text-base">{gameInfo.description}</Text>
                            </View>
                        </ScrollView>
                    )
                }
            </View>
        </Screen>
    )
}