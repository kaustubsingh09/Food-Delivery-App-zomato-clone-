import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import BasketScreen from "./Screens/BasketScreen";
import PreparingOrderScreen from "./Screens/PreparingOrderScreen";
import DeliveryScreen from "./Screens/DeliveryScreen";
import RestaurantScreen from "./Screens/RestaurantScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import "react-native-url-polyfill/auto";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              options={{ presentation: "modal", headerShown: false }}
              name="Basket"
              component={BasketScreen}
            />
            <Stack.Screen
              options={{ presentation: "fullScreenModal", headerShown: false }}
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
            />
            <Stack.Screen
              options={{ presentation: "fullScreenModal", headerShown: false }}
              name="Delivery"
              component={DeliveryScreen}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
