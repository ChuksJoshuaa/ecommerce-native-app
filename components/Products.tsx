import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps, SingleProps } from "../utils/interface";
import { formatName } from "../utils/conversions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationIProps = NativeStackNavigationProp<NavigationProps, "Cart">;
type NavigationDetailsProps = NativeStackNavigationProp<
  NavigationProps,
  "ProductDetails"
>;

const Products = ({ dataObj }: SingleProps) => {
  const navigation = useNavigation<NavigationIProps | NavigationDetailsProps>();
  return (
    <View className="w-[163px] pb-3 bg-white border border-gray-100 mb-4 mx-2">
      <View className="">
        <View className="flex flex-row justify-between items-center px-2 py-3">
          <Text className="text-white bg-white">.</Text>
          <Ionicons name="ios-heart-outline" size={24} color="black" />
        </View>

        <TouchableOpacity
          className="flex justify-center items-center"
          onPress={() => navigation.navigate("ProductDetails")}
        >
          <Image
            source={{
              uri: dataObj.url,
            }}
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-between items-center px-2 py-3"
          onPress={() => navigation.navigate("ProductDetails")}
        >
          <Text className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]">
            {formatName(dataObj.name)}
          </Text>
          <Text className="font-medium leading-normal tracking-wider text-[14px] text-[#DB3C25]">
            {dataObj.price}
          </Text>
        </TouchableOpacity>
        <View className="pt-3">
          <TouchableOpacity
            className="flex flex-row rounded-[50px] justify-center items-center bg-[#DB3C25] mx-2 py-3 cursor-pointer"
            onPress={() => navigation.navigate("Cart")}
          >
            <SimpleLineIcons name="handbag" size={24} color="white" />
            <Text className="font-medium leading-normal tracking-wider text-[14px] text-white ml-2">
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Products;
