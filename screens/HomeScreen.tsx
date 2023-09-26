import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Products } from "../components";
import { products } from "../utils/products";
import { SIZES } from "../constants";

const Home = () => {
  const [productsData, setProductsData] = useState(products);

  const handleSearch = (value: string) => {
    if (!value.length) return setProductsData(products);

    const formattedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const filteredData = products.filter((item) => {
      const formattedName = item.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      return formattedName.includes(formattedValue);
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
