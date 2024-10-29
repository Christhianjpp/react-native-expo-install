import { Link, Slot, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import "../global.css"
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "#000" },
                    headerTintColor: "#fff",
                    headerTitle: "",
                    headerLeft: () => (<View >
                        <Text className="text-white" >Logo</Text>
                    </View>),
                    headerRight: () => (<Link asChild href="/about"  >
                        <Pressable>
                            <CircleInfoIcon />
                        </Pressable>
                    </Link>)
                }}
            />
        </View>
    )
}

