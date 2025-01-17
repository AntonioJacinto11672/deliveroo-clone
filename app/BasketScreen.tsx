import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { selectRestaurants } from '@/features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '@/features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '@/sanity'
import { FormatPrice } from '@/utils/FormPrice'

const BasketScreen = () => {
  const navigation = useNavigation()
  const router = useRouter()
  const restaurant = useAppSelector(selectRestaurants)
  const items = useAppSelector(selectBasketItems)
  const dispatch = useAppDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<any[]>([])
  const basketTotal = useAppSelector(selectBasketTotal)

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
    //console.log("Restaurant value", groupedItems)

  }, [items])

  console.log("Restaurant values", restaurant)

  return (
    <>
      <SafeAreaView className='flex-1 bg-white'>
        <View className='flex-1 bg-gray-100 '>
          <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
            <View>
              <Text className='text-lg font-bold text-center'>Basket</Text>
              <Text className='text-center text-gray-400'>

              </Text>
            </View>

            <TouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray-100 absolute top-3 right-5'>
              <XCircleIcon color={"#00CCBB"} height={50} width={50} />
            </TouchableOpacity>
          </View>

          <View className='flex-row  items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image source={{
              uri: "https://links.papareact.com/wru"
            }}
              className='h-9 w-9 bg-gray-300 rounded-full'
            />
            <Text className='flex-1'>Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className='text-[#00CCBB]'>Change</Text>
            </TouchableOpacity>
          </View>

          <ScrollView className='divide-y divide-gray-200'>
            {
              Object.entries(groupedItemsInBasket).map(([key, items]) => {
                return <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5 '>
                  <Text className='text-[#00CCBB]'> {items.length} x</Text>
                  <Image
                    source={{
                      uri: urlFor(items[0].image).url()
                    }}
                    className='h-12 w-12 rounded-full mx-1'
                  />
                  <Text className='flex-1'> {items[0]?.name} </Text>
                  <Text className='text-gray-600'> {FormatPrice(items[0].price)} </Text>

                  <TouchableOpacity>

                    <Text className='text-[#00CCBB] text-xs'
                      onPress={() => dispatch(removeFromBasket({ id: key }))}
                    >Remover
                    </Text>
                  </TouchableOpacity>
                </View>
              })
            }
          </ScrollView>

          <View className=' p-5 bg-white mt-5 space-y-4'>

            <View className='flex-row justify-between '>
              <Text className='text-gray-400'> Delivery fee </Text>
              <Text className='text-gray-400'> {FormatPrice(basketTotal)} </Text>
            </View>

            <View className='flex-row justify-between '>
              <Text className='text-gray-400'> Subtotal </Text>
              <Text className='text-gray-400'> {FormatPrice(basketTotal)} </Text>
            </View>

            <View className='flex-row justify-between pb-5'>
              <Text className='text-gray-400'> Order Total </Text>
              <Text className='text-gray-400 font-extrabold'> {FormatPrice(basketTotal)} </Text>
            </View>

            <TouchableOpacity className='rounded-lg bg-[#00CCBB] p-4' onPress={() => router.push('/PreparingOrderScreen')}>
              <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default BasketScreen