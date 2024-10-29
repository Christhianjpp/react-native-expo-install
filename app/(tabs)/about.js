import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
export default function About() {
    return (
        <Screen>

            <ScrollView >
                <Link asChild href="/" style={{ padding: 10 }} className="text-blue-400">
                    <Pressable>
                        {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}

                    </Pressable>
                </Link>
                <Text className="text-white font-bold mb-8 text-2xl">Sobre el Proyecto</Text>
                <Text className=" text-white/90 mb-4">This is a simple app that demonstrates how to use the Expo Router with Tailwind CSS in a React Native app.</Text>
                <Text className=" text-white/90 mb-4">This is a simple app that demonstrates how to use the Expo Router with Tailwind CSS in a React Native app.</Text>
                <Text className=" text-white/90 mb-4">This is a simple app that demonstrates how to use the Expo Router with Tailwind CSS in a React Native app.</Text>
                <Text className=" text-white/90 mb-4">This is a simple app that demonstrates how to use the Expo Router with Tailwind CSS in a React Native app.</Text>
                <Text className=" text-white/90 mb-4">This is a simple app that demonstrates how to use the Expo Router with Tailwind CSS in a React Native app.</Text>
            </ScrollView>
        </Screen>

    )
}