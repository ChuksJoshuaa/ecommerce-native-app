import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Products } from "../components";
import { getLowerCase } from "../utils/conversions";
import { products } from "../utils/products";
import { SIZES } from "../constants";

const Home = () => {
  const [productsData, setProductsData] = useState(products);

  const handleSearch = (value: string) => {
    if (!value.length) return setProductsData(products);

    const formattedValue = getLowerCase(value);
    const filteredData = products.filter((item) => {
      const formattedName = getLowerCase(item.name);
      if (formattedName)
        return formattedName.includes(formattedValue as string);
    });

    if (filteredData.length > 0) setProductsData(filteredData);
    else setProductsData(products);
  };

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <Text className="flex justify-center items-center text-center py-4 font-semibold leading-normal tracking-wider">
        Menu
      </Text>
      <View className="border border-[#E1E5E9] bg-[#F9F9F9] h-full">
        <View>
          <Header onSearch={handleSearch} />
        </View>

        <ScrollView>
          <View className="flex-1 flex-row justify-center items-center mb-[20px] flex-wrap">
            {productsData.map((item) => (
              <Products dataObj={item} key={item.id} />
            ))}
          </View>
        </ScrollView>

        <View style={{ marginHorizontal: SIZES.xxxLarge }} className="mb-20">
          <Text>.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
