import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const { navigate } = useNavigation();
  const origin = useSelector(selectOrigin);

  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatScreen",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.id}
        horizontal
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={!origin}
            onPress={() => navigate(item?.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          >
            <View style={tw`${!origin && "opacity-20"}`}>
              <Image
                style={{ height: 100, width: 100, resizeMode: "contain" }}
                source={{
                  uri: item?.image,
                }}
              />
            </View>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item?.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color={"white"}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

// const styles = StyleSheet.create({})
