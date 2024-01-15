import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./app/screens/Welcome";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import Dashboard from "./app/screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import Forget from "./app/screens/Forget";
import CustomFont from "./app/assets/fonts/CustomFont";
import SingleCategory from "./app/screens/SingleCategory";
import SingleDoctor from "./app/screens/SingleDoctor";
import { Provider } from "react-redux";
import store from "./app/redux/store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <CustomFont>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={Welcome}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Dashboard"
              component={Dashboard}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Forget"
              component={Forget}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SingleCategory"
              component={SingleCategory}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SingleDoctor"
              component={SingleDoctor}
            />
          </Stack.Navigator>
        </CustomFont>
      </Provider>
    </NavigationContainer>
  );
}
