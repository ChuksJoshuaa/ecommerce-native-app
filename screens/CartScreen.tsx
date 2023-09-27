import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, SIZES } from "../constants";
import { products } from "../utils/products";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 relative bg-[#F9F9F9]">
      <View className="flex flex-row justify-between items-center mx-8 my-3">
        <TouchableOpacity
          className="rounded-lg p-2 border border-[#E1E5E9] bg-white w-12 shadow-sm cursor-pointer"
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
          <View className="mx-8 border-t border-[#E1E5E9]">
            <View></View>
            <View></View>
          </View>
        </View>
      </ScrollView>
      <View style={{ marginHorizontal: SIZES.xextraLarge }} className="mb-20">
        <Text>.</Text>
      </View>
      <View className="absolute bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[200px]"></View>
    </SafeAreaView>
  );
};

export default Cart;
