import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <View className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <View className="mx-4 mt-5">
          <Text className="text-3xl font-semibold text-black uppercase mb-1 text-center">
            Log In
          </Text>

          <View className="flex flex-row justify-center space-x-3  my-3">
            <View className="border-2 border-gray-300 p-3 rounded-full shadow-lg bg-white ">
              <FontAwesomeIcon name="twitter" size={25} color="#000" />
            </View>

            <View className=" border-2 border-gray-300 p-3 rounded-full shadow-lg bg-white ">
              <FontAwesomeIcon name="facebook" size={25} color="#000" />
            </View>

            <View className=" border-2 border-gray-300 p-3 rounded-full shadow-lg bg-white ">
              <FontAwesomeIcon name="google" size={25} color="#000" />
            </View>
          </View>

          <View>
            <Text className="text-center font-medium ">or use your email</Text>
          </View>

          <View className="my-5">
            <View>
              <Text className="mb-1 text-base font-bold">Email</Text>
              <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-4 rounded-lg">
                <Ionicons
                  name="md-mail-open-outline"
                  size={30}
                  color="#06b6d4"
                />
                <TextInput
                  type="text"
                  className="w-full  text-sm ml-3 shadow-sm placeholder-black "
                  placeholder="Your email"
                />
              </View>
            </View>

            <View>
              <Text className="mb-1 text-base font-bold">Password</Text>
              <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-1 rounded-lg">
                <Feather name="lock" size={30} color="#06b6d4" />
                <TextInput
                  type="text"
                  className="w-full  text-sm ml-3 shadow-sm placeholder-black "
                  placeholder="Your password"
                />
              </View>
            </View>

            <View>
              <Text className="mb-4 text-base font-bold text-right">
                Forget password?
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text className="text-lg bg-cyan-500 text-center py-3 text-white rounded-lg font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text className="text-base font-normal text-black mb-8 my-10">
            Don't have an account?{" "}
            <Text
              className="text-cyan-500 font-bold"
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up Here
            </Text>{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
