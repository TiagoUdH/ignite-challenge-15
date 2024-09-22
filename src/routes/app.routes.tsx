import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/statistics";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="statistics"
        component={Statistics}
      />

      <Screen
        name="newMeal"
        component={NewMeal}
      />
    </Navigator>
  )
}