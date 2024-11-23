import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { sanityClientVerify } from "@/sanity";
import { FeaturedTpe } from "@/types/FeaturedTypes";
import { useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"

const HomeScren = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState<FeaturedTpe[]>([])

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation])

    useEffect(() => {
        getAllfeatured()
        //console.log(featuredCategories)
    }, [])

    const getAllfeatured = async () => {
        sanityClientVerify.fetch(`*[_type == 'featured'] {
                ...,
                restaurants[] -> {
                    ...,
                    dishes[]->
                }
            }`)
            .then(data => {
                //console.log("Testando claudio", data[0].name)
                setFeaturedCategories(data)
            })
    }

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

                {
                    featuredCategories && featuredCategories.map((featuredCategory: FeaturedTpe) => {
                        //console.log("No Server", featuredCategory.name)
                        return <FeaturedRow id={featuredCategory._id} title={`${featuredCategory.name}`} description={featuredCategory.short_description} featuredCategory="featured" />
                    })
                }


            </ScrollView>


        </SafeAreaView>
    </>);
}

export default HomeScren;