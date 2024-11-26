import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { sanityClientVerify } from "@/sanity";
import { FeaturedTpe } from "@/types/FeaturedTypes";
import { Redirect, useNavigation } from "expo-router";
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
        <Redirect href={"/SlashScreen"} />
    </>);
}

export default HomeScren;