import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import React, { useEffect } from 'react'

import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'

const PreparingOrderScreen = () => {
    const router = useRouter()
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            router.replace("/DeliveryScreen")
        }, 4000)
    }, [])
    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require("@/assets/images/delivery.gif")}
                /* source={require("@/assets/images/7572138.jpg")} */
                animation={"slideInUp"}
                className='text-lg my-10 text-white font-bold text-center'
            />
            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center'
            >
                Waint to restaurant to accept our order
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen