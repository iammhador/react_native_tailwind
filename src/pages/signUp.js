import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import LinearGradient from "react-native-linear-gradient";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <View className="mx-4">
          <Text className="text-3xl font-semibold text-cyan-500 uppercase mb-1">
            Sign UP
          </Text>

          <Text className="text-base font-normal text-black ">
            Are you new here? Create an account for you.
          </Text>

          <View className="my-5">
            <View className="my-5">
              <View>
                <Text className="mb-1 text-base font-bold">Username</Text>
                <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-4 rounded-lg">
                  <Ionicons
                    name="md-mail-open-outline"
                    size={30}
                    color="#06b6d4"
                  />
                  <TextInput
                    type="text"
                    className="w-full  text-sm ml-3 shadow-sm placeholder-black "
                    placeholder="Your username"
                  />
                </View>
              </View>

              <View>
                <Text className="mb-1 text-base font-bold">Email</Text>
                <View className="flex flex-row p-3  bg-white border-cyan-500 border-2  mb-4 rounded-lg">
                  <Ionicons
                    name="md-mail-open-outline"
                    size={30}
                    color="#06b6d4"
                  />
                  <TextInput
                    type="password"
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
                <Text className="text-base font-bold text-right">
                  Forget password?
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text className="text-lg bg-cyan-500 text-center py-3 text-white rounded-lg font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row justify-evenly my-5">
            <View className="flex flex-row items-center mr-2 space-x-2 border-2 border-blue-300 p-2 rounded-xl  bg-blue-300">
              <FontAwesomeIcon name="twitter" size={30} color="#fff" />
              <Text className="text-white text-sm font-medium">Twitter</Text>
            </View>

            <View className="flex flex-row items-center mr-2 space-x-2 border-2 border-red-500 p-2 rounded-xl  bg-red-500">
              <FontAwesomeIcon name="google" size={30} color="#fff" />
              <Text className="text-white text-sm font-medium">Google</Text>
            </View>

            <View className="flex flex-row items-center space-x-2 border-2 border-blue-400 p-2 rounded-xl  bg-blue-400">
              <FontAwesomeIcon name="facebook" size={30} color="#fff" />
              <Text className="text-white text-sm font-medium">Facebook</Text>
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
    </ScrollView>
  );
};

export default SignUp;

{
  /* <Feather name="lock" size={30} color="#900" />  */
}
