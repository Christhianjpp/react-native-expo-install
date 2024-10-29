import { Tabs } from "expo-router";
import { ImageBackground, View } from "react-native";
import { InfoIcon, HomeIcon } from "../../components/Icons";



export default function Layout({ }) {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'black' },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                // tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />
                }}
            />

        </Tabs>
    )
}