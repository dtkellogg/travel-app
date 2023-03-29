import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

export default function AddLocationScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <ScrollView>
      <Text>Add Location</Text>
      {/* Back btn */}
      <View className="relative">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-10 left-5 p-2 cursor-pointer bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
      </View>


    </ScrollView>
  )
}