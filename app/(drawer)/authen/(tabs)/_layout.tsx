import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options = {{title: "Home"}} />
            <Tabs.Screen name="favorite" options = {{title: "Favorites"}} />
            <Tabs.Screen name="categories" options = {{title: "Categories"}} />
            <Tabs.Screen name="profile" options = {{title: "Profile"}} />
        </Tabs>
    )
}