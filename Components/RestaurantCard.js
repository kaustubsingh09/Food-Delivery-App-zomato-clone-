import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imageUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        className="h-36 w-64 rounded-sm"
        source={{ uri: urlFor(imageUrl).url() }}
      />
      <View className=" px-3 pb-4">
        <Text className=" font-bold text-lg pt-2">{title}</Text>
        <View className=" flex-row items-center space-x-1">
          <StarIcon size={22} color="green" opacity={0.5} />
          <Text className=" text-green-500">{rating}</Text>
          <Text className="text-green-500"> · {genre}</Text>
        </View>
        <View className="flex-row">
          <MapPinIcon color="grey" opacity={0.4} size={22} />
          <Text className=" text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
