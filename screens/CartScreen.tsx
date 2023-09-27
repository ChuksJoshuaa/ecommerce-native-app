import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, SIZES } from "../constants";
import { products } from "../utils/products";
import { Feather } from "@expo/vector-icons";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 relative bg-[#F9F9F9]">
      <View className="flex flex-row justify-between items-center mx-8 my-3">
        <TouchableOpacity
          className="rounded-lg p-2 border border-[#E1E5E9] bg-white w-12 shadow-sm cursor-pointer flex justify-center items-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
        <Text
          className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
          style={{ fontFamily: FONTS.medium }}
        >
          Cart
        </Text>
        <Text className="text-[#F9F9F9] bg-[#F9F9F9]">.</Text>
      </View>

      <ScrollView>
        <View className="flex-1 mb-20">
          <View className="border-t border-[#E1E5E9]">
            {products.slice(0, 3).map((item, i) => (
              <View
                className="mx-8 flex flex-row items-center justify-between my-4"
                key={i}
              >
                <View className="flex flex-row items-center justify-start">
                  <View>
                    <Image
                      source={{
                        uri: item.url,
                      }}
                      resizeMode="contain"
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </View>
                  <View className="flex items-start justify-start mx-4">
                    <Text
                      className="font-medium leading-normal tracking-wider text-[12px] text-[#151515] my-1"
                      style={{ fontFamily: FONTS.medium }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      className="font-medium leading-normal tracking-wider text-[13px] text-[#DB3C25] my-2"
                      style={{ fontFamily: FONTS.medium }}
                    >
                      {item.price}
                    </Text>
                    <TouchableOpacity className="my-1 cursor-pointer">
                      <Feather name="trash-2" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <TouchableOpacity className="rounded-lg py-2 px-2 border border-[#E1E5E9] bg-white shadow-sm cursor-pointer flex justify-center items-center">
                    <AntDesign name="minus" size={16} color="black" />
                  </TouchableOpacity>
                  <Text
                    className="font-medium leading-normal tracking-wider text-[14px] text-black text-center my-2"
                    style={{ fontFamily: FONTS.medium }}
                  >
                    1
                  </Text>
                  <TouchableOpacity className="rounded-lg py-2 border border-[#E1E5E9] bg-white shadow-sm cursor-pointer flex justify-center items-center">
                    <AntDesign name="plus" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{ marginHorizontal: SIZES.xextraLarge }} className="mb-20">
        <Text>.</Text>
      </View>
      <View className="absolute bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[200px]">
        <View className="flex flex-row justify-between mx-8 items-center m">
          <Text
            className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
            style={{ fontFamily: FONTS.medium }}
          >
            Total <Text style={{ fontFamily: FONTS.light }}>(3 items)</Text>
          </Text>
          <Text
            className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
            style={{ fontFamily: FONTS.medium }}
          >
            £90
          </Text>
        </View>
        <View className="my-2 mx-6">
          <TouchableOpacity className="flex flex-row rounded-[50px] justify-center items-center bg-[#DB3C25] mx-2 py-3 cursor-pointer">
            <Text
              className="font-medium leading-normal tracking-wider text-[14px] text-white ml-2"
              style={{ fontFamily: FONTS.regular }}
            >
              Checkout - £90
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
