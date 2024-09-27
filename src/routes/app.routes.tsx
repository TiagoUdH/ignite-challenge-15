import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewEditMeal } from "@screens/NewEditMeal";
import { Statistics } from "@screens/Statistics";
import { Success } from "@screens/Success";

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
        name="newEditMeal"
        component={NewEditMeal}
      />

      <Screen
        name="success"
        component={Success}
      />

      <Screen
        name="meal"
        component={Meal}
      />
    </Navigator>
  )
}