import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteParams, ProductProps, NavigationProps } from "../utils/interface";
import { useEffect, useState } from "react";
import { products } from "../utils/products";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FONTS, SIZES } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationIProps = NativeStackNavigationProp<NavigationProps, "Cart">;

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationIProps>();
  const [singleData, setSingleData] = useState({} as ProductProps);
  const [text, setText] = useState<string>("");
  const [readMore, setReadMore] = useState<boolean>(false);
  const [showIngredient, setShowIngredient] = useState<boolean>(false);
  const [showNutrition, setShowNutrition] = useState<boolean>(false);
  const [showPreparation, setShowPreparation] = useState<boolean>(false);
  const [showDietary, setShowDietary] = useState<boolean>(false);
  const [showStorage, setShowStorage] = useState<boolean>(false);
  const [showExtra, setShowExtra] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [images, setImages] = useState([] as Array<string>);
  const { id } = route.params as RouteParams;

  const changeImage = (i: number) => setIndex(i);

  const fetchData = () => {
    setLoading(true);
    const findObj = products.find((item) => item.id === id);
    if (findObj) {
      const imageValue = Array(3).fill(findObj.url);
      setSingleData(findObj);
      setImages(imageValue);
      setText(findObj.description.slice(0, 200));
      setInterval(() => {
        setLoading(false);
      }, 300);
    } else {
      setSingleData({} as ProductProps);
      setInterval(() => {
        setLoading(false);
      }, 300);
    }
  };

  const showMore = () => {
    if (!readMore) {
      setText(singleData.description);
      setReadMore(true);
    } else {
      setText(singleData.description.slice(0, 200));
      setReadMore(false);
    }
  };

  const Decrement = () => {
    if (count === 1) setCount(1);
    else setCount(count - 1);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text
          className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
          style={{ fontFamily: FONTS.medium }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  if (!loading && Object.keys(singleData).length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text
          className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
          style={{ fontFamily: FONTS.medium }}
        >
          Product not found!!!
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1 relative bg-[#F9F9F9]">
      <TouchableOpacity
        className="rounded-lg p-2 border border-[#E1E5E9] bg-white w-12 my-3 mx-8 shadow-sm cursor-pointer flex justify-center items-center"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
      </TouchableOpacity>

      <ScrollView>
        <View className="flex-1 mb-20">
          <View className="mx-8 my-2 bg-white h-[304px] flex justify-center items-center rounded-2xl">
            <Image
              source={{
                uri: images[index],
              }}
              resizeMode="contain"
              style={{
                width: 300,
                height: 300,
              }}
            />
          </View>
          <View className="flex flex-row justify-center items-center my-2">
            {images.map((item, i) => (
              <TouchableOpacity
                key={i}
                className="mx-1 rounded-full cursor-pointer"
                onPress={() => changeImage(i)}
                style={{
                  backgroundColor: `${i === index ? "#DB3C25" : "#fff"}`,
                }}
              >
                <Entypo
                  name="circle"
                  size={8}
                  color={`${i === index ? "#DB3C25" : "#222"}`}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View className="mx-8">
            <View className="flex flex-row items-center justify-between">
              <Text
                className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                style={{ fontFamily: FONTS.medium }}
              >
                {singleData.name}
              </Text>
              <Text
                className="font-medium leading-normal tracking-wider text-[16px] text-[#DB3C25]"
                style={{ fontFamily: FONTS.medium }}
              >
                {singleData.price}
              </Text>
            </View>
            <View>
              <Text
                className="font-normal leading-normal tracking-[0.36px] text-[13px] text-[#4A4A4A]"
                style={{ fontFamily: FONTS.regular }}
              >
                {text}
                {!readMore && "..."}
                <Text
                  onPress={showMore}
                  className="cursor-pointer text-[#DB3C25]"
                >
                  {readMore ? "Show Less" : "Read More"}
                </Text>
              </Text>
            </View>
          </View>
          <View className="my-5 mx-8 z-0">
            <View className="py-4 border-t border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  Ingredients
                </Text>
                {!showIngredient ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowIngredient(!showIngredient)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowIngredient(!showIngredient)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showIngredient ? (
                <View>
                  <Text
                    className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                    style={{ fontFamily: FONTS.regular }}
                  >
                    {singleData.ingredients}
                  </Text>
                </View>
              ) : null}
            </View>
            <View className="py-4 border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  Nutritional Information
                </Text>
                {!showNutrition ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowNutrition(!showNutrition)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowNutrition(!showNutrition)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showNutrition ? (
                <View>
                  <Text
                    className="font-medium leading-normal tracking-wider text-[14px] text-[#151515] py-4"
                    style={{ fontFamily: FONTS.medium }}
                  >
                    {singleData.nutritionalInformation.name}
                  </Text>

                  {singleData.nutritionalInformation.details.map((val, i) => (
                    <View
                      key={i}
                      className="flex flex-row items-center justify-start"
                    >
                      <Text
                        className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                        style={{ fontFamily: FONTS.regular }}
                      >
                        * {val.name}
                      </Text>
                      <Text
                        className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                        style={{ fontFamily: FONTS.regular }}
                      >
                        -{val.value}
                      </Text>
                    </View>
                  ))}

                  <Text
                    className="font-medium leading-normal tracking-wider text-[14px] text-[#151515] py-2"
                    style={{ fontFamily: FONTS.light }}
                  >
                    * {singleData.info}
                  </Text>
                </View>
              ) : null}
            </View>
            <View className="py-4 border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  How to Prepare
                </Text>
                {!showPreparation ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowPreparation(!showPreparation)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowPreparation(!showPreparation)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showPreparation ? (
                <View>
                  {singleData.prepare.map((val, i) => (
                    <View
                      key={i}
                      className="flex flex-row items-center justify-start"
                    >
                      <Text
                        className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                        style={{ fontFamily: FONTS.regular }}
                      >
                        * {val}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
            <View className="py-4 border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  Dietary Information
                </Text>
                {!showDietary ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowDietary(!showDietary)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowDietary(!showDietary)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showDietary ? (
                <View>
                  {singleData.dietaryInformation.map((val, i) => (
                    <View
                      key={i}
                      className="flex flex-row items-center justify-start"
                    >
                      <Text
                        className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                        style={{ fontFamily: FONTS.regular }}
                      >
                        * {val}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
            <View className="py-4 border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  Storage Information
                </Text>
                {!showStorage ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowStorage(!showStorage)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowStorage(!showStorage)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showStorage ? (
                <View>
                  <Text
                    className="my-2 font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                    style={{ fontFamily: FONTS.regular }}
                  >
                    {singleData.storageInformation}
                  </Text>
                </View>
              ) : null}
            </View>
            <View className="py-4 border-b border-[#E1E5E9]">
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="font-medium leading-normal tracking-wider text-[16px] text-[#151515]"
                  style={{ fontFamily: FONTS.medium }}
                >
                  Extra
                </Text>
                {!showExtra ? (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowExtra(!showExtra)}
                  >
                    <Ionicons name="chevron-down" size={20} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className="cursor-pointer"
                    onPress={() => setShowExtra(!showExtra)}
                  >
                    <Ionicons name="chevron-up" size={20} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              {showExtra ? (
                <View>
                  {singleData.extra.map((val, i) => (
                    <View
                      key={i}
                      className="flex flex-row items-center justify-start"
                    >
                      <Text
                        className="font-medium leading-normal tracking-wider text-[14px] text-[#151515]"
                        style={{ fontFamily: FONTS.regular }}
                      >
                        * {val}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ marginHorizontal: SIZES.xextraLarge }} className="mb-20">
        <Text>.</Text>
      </View>

      <View className="absolute bottom-0 left-0 right-0 z-50 bg-[#fafafa]">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            className="rounded-lg p-2 border border-[#E1E5E9] bg-white w-12 my-3 mx-8 shadow-sm cursor-pointer flex justify-center items-center"
            onPress={Decrement}
          >
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text
            className="font-normal leading-normal tracking-[0.36px] text-[14px] text-[#4A4A4A]"
            style={{ fontFamily: FONTS.bold }}
          >
            {count}
          </Text>
          <TouchableOpacity
            className="rounded-lg p-2 border border-[#E1E5E9] bg-white w-12 my-3 mx-8 shadow-sm cursor-pointer flex justify-center items-center"
            onPress={() => setCount(count + 1)}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="mx-6">
          <TouchableOpacity
            className="flex flex-row rounded-[50px] justify-center items-center bg-[#DB3C25] mx-2 py-3 cursor-pointer"
            onPress={() => navigation.navigate("Cart")}
          >
            <Text
              className="font-medium leading-normal tracking-wider text-[14px] text-white ml-2"
              style={{ fontFamily: FONTS.regular }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row rounded-[50px] justify-center items-center bg-white my-4 mx-2 py-3 cursor-pointer border border-[#DB3C25]">
            <Text
              className="font-medium leading-normal tracking-wider text-[14px] text-[#DB3C25] ml-2"
              style={{ fontFamily: FONTS.regular }}
            >
              Suscribe to a plan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
