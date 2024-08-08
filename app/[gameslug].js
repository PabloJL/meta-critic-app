import { Link } from "expo-router";
import { Text, View } from "react-native";
import Screen from "../components/Screen";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  return (
    <Screen>
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Game Details {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </View>
    </Screen>
  );
}
