import { TextInput, View } from "react-native";
import { HeaderProps } from "../utils/interface";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <View className="items-center justify-center">
      <View className="flex-row items-center bg-white rounded-xl w-[90%] p-3 my-4 px-12">
        <TextInput
          placeholder="Search"
          className="flex-1 pl-8 text-gray-700"
          onChangeText={onSearch}
        />
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={{ position: "absolute", left: 50 }}
        />
      </View>
    </View>
  );
};

export default Header;
