import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"

const HomeScren = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation])
    return (<>
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-9 w-9 rounded-full bg-gray-300 "
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon color={"#00CCBB"} size={20} />
                    </Text>
                </View>

                <UserIcon size={35} color={"#00CCBB"} />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color={"gray"} size={20} />
                    <TextInput placeholder="Restaurant and cuisiness" keyboardType="default" className="placeholder:text-gray-400" />
                </View>
                <AdjustmentsHorizontalIcon color={"#00CCBB"} />
            </View>

            {/* COntent */}

            {/* Body */}
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Categories */}
                <Categories />

                {/* featured  Rows*/}

                <FeaturedRow id="123" title="Featured" description="Paid placements from our partners" featuredCategory="featured" />
                <FeaturedRow id="1234" title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts!" featuredCategory="featured" />
                <FeaturedRow id="12345" title="Offers near you!" description="Why not support your local restaourant tonigth " featuredCategory="featured" />

            </ScrollView>


        </SafeAreaView>
    </>);
}

export default HomeScren;