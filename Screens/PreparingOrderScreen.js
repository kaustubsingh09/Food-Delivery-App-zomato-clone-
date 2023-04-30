import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress"

export default function PreparingOrderScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 5000)
    }, [])

  return (
    <SafeAreaView className="bg-[(0, 0%, 90%)] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00CCBB] font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Bar progress={0.7} width={200} color="grey" indeterminate={true}/>
    </SafeAreaView>
  );
}
