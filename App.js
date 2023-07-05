import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 bg-blue-500 p-4">
      <View className="mb-4">
        <Text className="text-4xl font-bold text-white mb-2">
          Welcome to the Tailwind CSS Demo!
        </Text>
        <Text className="text-lg text-white">
          This is a sample text classNamed with Tailwind CSS.
        </Text>
      </View>

      <View className="mb-4">
        <Text className="text-2xl font-bold mb-4 text-white">
          About React Native
        </Text>
        <Text className="text-lg text-white">
          React Native is a popular JavaScript framework for building native
          mobile applications. It allows you to write code in JavaScript and
          create high-quality apps for both iOS and Android platforms.
        </Text>
        <Text className="text-lg text-white mt-4">
          With React Native, you can leverage your existing web development
          skills to develop mobile apps, saving time and effort. It uses a
          single codebase, enabling you to write once and deploy to multiple
          platforms.
        </Text>
        <Text className="text-lg text-white mt-4">
          React Native combines the power of React, a JavaScript library for
          building user interfaces, with native components. This allows you to
          create performant and responsive apps that have a native look and
          feel.
        </Text>
        <Text className="text-lg text-white mt-4">
          By using React Native, you can take advantage of a vast ecosystem of
          open-source libraries and components, making development faster and
          more efficient. It has a vibrant community that actively contributes
          to its growth and improvement.
        </Text>
      </View>
      <StatusBar className="auto" />
    </View>
  );
}
