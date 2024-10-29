import React from "react";
import { Text, View } from "react-native";

export const Score = ({ score, maxScore }) => {
  const getColors = () => {
    const porcentage = (score / maxScore) * 100;
    if (porcentage < 40) return "bg-red-300";
    if (porcentage < 98) return "bg-yellow-300";
    return "bg-green-500";
  };
  const className = getColors();
  return (
    <View
      className={`${className} w-8 h-8  rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
};
