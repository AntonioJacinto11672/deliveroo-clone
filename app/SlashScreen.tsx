import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Redirect } from 'expo-router'
import * as Progress from "react-native-progress"
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigationBuilder } from '@react-navigation/native'

const SlashScreen = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (!loading) {
    return <Redirect href={"/LoginScreen"} />
  }
  return (
    <View className='flex-1 flex flex-col justify-center items-center bg-gray-100'>
      <Image
            source={require("@/assets/images/logo/NEtFarma1.png")}

            style={{ height: 500, width: 500 }}
          />
      <Text className='text-[#00665e] mt-5 font-medium text-xl w-1/2 text-center mb-5'>Get started</Text>
      <Progress.Bar 
      indeterminate={true}
      width={300}
      accessible
      color='#00665e'
      />
    </View>
  )
}

export default SlashScreen