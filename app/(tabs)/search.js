import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import Screen from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function search() {
  return (
    <Screen>
      <ScrollView className="pt-24 bg-black">
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">About</Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit culpa ullam, velit, voluptatibus hic ipsam esse, atque saepe
          accusamus dolorum fugiat est tempora aliquam vel consectetur doloribus
          molestiae quis.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit culpa ullam, velit, voluptatibus hic ipsam esse, atque saepe
          accusamus dolorum fugiat est tempora aliquam vel consectetur doloribus
          molestiae quis.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit culpa ullam, velit, voluptatibus hic ipsam esse, atque saepe
          accusamus dolorum fugiat est tempora aliquam vel consectetur doloribus
          molestiae quis.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit culpa ullam, velit, voluptatibus hic ipsam esse, atque saepe
          accusamus dolorum fugiat est tempora aliquam vel consectetur doloribus
          molestiae quis.
        </Text>
      </ScrollView>
    </Screen>
  );
}
