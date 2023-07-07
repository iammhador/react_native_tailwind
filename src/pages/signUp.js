import React from "react";
import { Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import LinearGradient from "react-native-linear-gradient";

const SignUp = ({ navigation }) => {
  return (
    <View className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <View className="mx-4 mt-5">
        <Text className="text-3xl font-semibold text-cyan-500 uppercase mb-1">
          Sign UP
        </Text>

        <Text className="text-base font-normal text-black mb-8">
          Are you new here? Create an account for you.
        </Text>

        <View className="my-5">
          <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-3 rounded-lg">
            <FontAwesomeIcon name="user-o" size={30} color="#06b6d4" />
            <TextInput
              type="text"
              className="w-full  text-sm ml-3 shadow-sm placeholder-black "
              placeholder="Your username"
            />
          </View>

          <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-3 rounded-lg">
            <Ionicons name="md-mail-open-outline" size={30} color="#06b6d4" />
            <TextInput
              type="text"
              className="w-full  text-sm ml-3 shadow-sm placeholder-black "
              placeholder="Your email"
            />
          </View>

          <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-3 rounded-lg">
            <Feather name="lock" size={30} color="#06b6d4" />
            <TextInput
              type="text"
              className="w-full  text-sm ml-3 shadow-sm placeholder-black "
              placeholder="Your password"
            />
          </View>
        </View>

        <TouchableOpacity>
          <Text className="text-lg bg-cyan-500 text-center py-3 text-white rounded-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-evenly my-10">
          <View className="flex flex-row items-center space-x-2 border-2 border-blue-600 p-4 rounded-xl  bg-blue-600">
            <FontAwesomeIcon name="facebook" size={30} color="#fff" />
            <Text className="text-white text-lg">Facebook</Text>
          </View>

          <View className="flex flex-row items-center space-x-2 border-2 border-red-500 p-4 rounded-xl  bg-red-500">
            <FontAwesomeIcon name="google" size={30} color="#fff" />
            <Text className="text-white text-lg">Google</Text>
          </View>
        </View>

        <Text className="text-base font-normal text-black mb-8">
          Already have an account?{" "}
          <Text
            className="text-cyan-500 font-bold"
            onPress={() => navigation.navigate("Login")}
          >
            Login Here
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

{
  /* <Feather name="lock" size={30} color="#900" />  */
}
