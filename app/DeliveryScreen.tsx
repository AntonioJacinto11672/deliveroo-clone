import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useAppSelector } from '@/hooks'
import { selectRestaurants } from '@/features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from "react-native-progress"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


const DeliveryScreen = () => {

  const navigation = useNavigation()
  const router = useRouter()
  const restaurant = useAppSelector(selectRestaurants)

  const latitudeEstatic = 51.51923880936022
  const longtudeEstatic = -0.13234916521933


  console.log("Hire void", restaurant)
  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => router.navigate("/")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimate Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>

            <Image
              source={{
                uri: "https://links.papareact.com/fls"
              }}

              className='h-20 w-20'
            />
          </View>

          <Progress.Bar indeterminate={true} color='#00CCBB' progress={0.4} />
          <Text className='mt-3 text-gray-500'>Your Order is being prepared</Text>
        </View>
      </SafeAreaView>


      <MapView
        initialRegion={{
          latitude: latitudeEstatic,
          longitude: longtudeEstatic,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-50 bg-white w-32 h-32'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: -8.9176056,
            longitude: 13.2098184
          }}

          title='CINFOTEC, 35MX+FRR, Belas'
          description='Centro de formação cinfotec'
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}

          className='h-12 w-12 bg-gray-300  rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'> Sonny Sangha</Text>
          <Text className='text-gray-400'> Your Rider </Text>
        </View>

        <Text className='text-[#00CCBB] text-lg ml-5 font-bold'>Call 2</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen