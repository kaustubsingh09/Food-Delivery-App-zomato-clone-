import React, { useEffect, useState } from "react";
import client from "../sanity";
import { View, Text, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";
import { ArrowRightIcon } from "react-native-heroicons/solid";

export default function FeaturedRow({ title, description, id }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id] {
          ...,
          restaurants[] -> {
            ...,
            dishes[] ->,
            type-> {
              name
            }
          
          },
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className=" text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className=" pt-4"
      >
        {/* Restaurant Cards */}

        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            // genre={}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            long={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
}
