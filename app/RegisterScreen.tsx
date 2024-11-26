import { View, Text, TouchableOpacity, Image, Touchable } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigationBuilder } from '@react-navigation/native'
import { useNavigation, useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const RegisterScreen = () => {
  const navigation = useNavigation()
  const router = useRouter()
  return (
    <View className='flex-1 bg-white' style={{ backgroundColor: "#00665e" }}>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-bl-2xl ml-4'
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-center'>
          <Image
            source={require("@/assets/images/logo/NEtFarma1.png")}

            style={{ height: 111, width: 165 }}
          />
        </View>
      </SafeAreaView>

      <View className='flex-1 bg-white px-8 pt-8'
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50
        }}
      >
        <View className='form space-y-2'>
          {/* Email Input */}
          <Text className='text-gray-700 ml-4'>Full Name </Text>
          <TextInput className='p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3'
            value='jacinto@gmail.com' placeholder='Enter Full Name'

          />

          <Text className='text-gray-700 ml-4'>Email Address </Text>
          <TextInput className='p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3'
            value='jacinto@gmail.com' placeholder='Enter Email'

          />

          <Text className='text-gray-700 ml-4'>Password </Text>
          <TextInput className='p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3'
            value='jacinto@gmail.com' placeholder='Enter Email' secureTextEntry
          />

          <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl'>
            <Text className='font-xl font-bold text-center text-gray-700'>Register</Text>
          </TouchableOpacity>
        </View>

        <Text className='text-xl text-gray-700 font-bold text-center py-5'>Or</Text>
        <View className='flex-row justify-center space-x-12'>
          {/* Social Mídeia */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>


        </View>
        <View className='flex-row justify-center mt-7'>
          <Text className='text-gray-500 font-semibold'>Alread  have acount?</Text>
          <TouchableOpacity className='' onPress={() => router.push("/LoginScreen")}>
            <Text className='font-semibold text-yellow-400'>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen