import { View, Text } from "react-native";
export default function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;

    if (percentage < 40) return "bg-red-500 text-white";
    if (percentage < 65) return "bg-yellow-500 text-white";
    return "bg-green-500 text-white";
  };

  const className = getColors();
  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}