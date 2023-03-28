import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  ArrowLeftIcon
} from 'react-native-heroicons/solid'

export default function LocationScreen() {
  const navigation = useNavigation()

  const {
    params: {
      name,
      country,
      img
    }
  } = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: img
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View className="items-center space-y-1">
        <Text className="font-bold text-lg pt-6">{name}</Text>
        <Text className="font-bold text-lg pt-6">{country}</Text>
      </View>
    </ScrollView>
  )
}