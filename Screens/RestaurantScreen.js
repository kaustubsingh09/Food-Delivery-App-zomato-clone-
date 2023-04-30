import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect } from "react";
import { setRestaurant } from "../features/restaurantSlice";
import BasketIcon from "../Components/BasketIcon";
import DishRow from "../Components/DishRow";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";

export default function RestaurantScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className=" w-full h-56 bg-gray-300 p-4"
            source={{ uri: urlFor(imageUrl).url() }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className=" bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-green-500">
                  {rating} · {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="grey" opacity={0.4} size={22} />
                <Text className="text-green-500">Nearby · {address}</Text>
              </View>
            </View>
            <Text className=" text-green-500 mt-2 pb-4">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="grey" size={20} opacity={0.6} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <CheckCircleIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishrows */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
