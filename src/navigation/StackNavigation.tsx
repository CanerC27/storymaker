import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StoryEditor from "../screens/StoryEditor";

const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StoryEditor">
        <Stack.Screen
          name="StoryEditor"
          component={StoryEditor}
          options={{ title: "Hikaye Düzenleyici" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
