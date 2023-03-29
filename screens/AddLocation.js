import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

export default function AddLocation() {
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
        <Image
          source={{
            uri: img
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
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