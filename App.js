import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeWindStyleSheet } from "nativewind";
import Login from "./src/pages/login";
import SignUp from "./src/pages/signUp";

const Stack = createNativeStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign UP" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { Text, View, TouchableOpacity, TextInput } from "react-native";

// export default function App() {
//   return (
//     <View className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//       <View className="mx-auto max-w-lg">
//         <Text className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//           Are you ready to buy new product ?
//         </Text>

//         <Text className="mx-auto mt-4 max-w-md text-center text-gray-500">
//           Delicious delights delivered to your doorstep - Experience foodie
//           heaven with us!
//         </Text>

//         <Text className="text-center text-lg font-medium">
//           Sign in to your account
//         </Text>

//         <View className="my-5 border-gray-200 rounded-2xl">
//           <View>
//             <Text htmlFor="email" className="sr-only">
//               Email:
//             </Text>

//             <View className="relative">
//               <TextInput
//                 type="email"
//                 className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                 placeholder="Enter email"
//               />
//             </View>
//           </View>

//           <View>
//             <Text htmlFor="password" className="sr-only">
//               Password:
//             </Text>

//             <View className="relative">
//               <TextInput
//                 type="password"
//                 className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//                 placeholder="Enter password"
//               />
//             </View>
//           </View>
//         </View>

//         <Text
//           type="submit"
//           className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
//         >
//           Sign in
//         </Text>

//         <Text className="text-center text-sm text-gray-500">
//           No account?
//           <Text className="underline" href="">
//             Sign up
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// }
