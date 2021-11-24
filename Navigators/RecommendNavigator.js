import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import ProductContainer from "../Screens/Products/ProductContainer";
import Analysis from "../Screens/Recommend/Analysis";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Analysis"
        component={Analysis}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function RecommendNavigator() {
  return <MyStack />;
}
