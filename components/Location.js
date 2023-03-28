import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Location({ name, country, img }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      className="relative bg-white shadow h-64 w-64 rounded-lg mb-4"
      onPress={() => {
        navigation.navigate('Location', {
          name,
          country,
          img
        })
      }}
    >
      <Text className="z-10 text-white text-3xl pl-3 pt-3 absolute bottom-10">{ name }</Text>
      <Text className="z-10 text-white text-xl pl-3 absolute bottom-4">{ country }</Text>
      <View 
        className="absolute w-full h-64 bg-black rounded-lg"
      >
      <Image 
        source={{
          uri: img
        }}
        className="absolute w-full h-64 bg-white opacity-60 rounded-lg"
      />
      </View>
    </TouchableOpacity>
  )
}