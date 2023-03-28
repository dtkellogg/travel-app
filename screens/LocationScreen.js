import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LocationScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <ScrollView>
      <View className="items-center space-y-1">
        <Text className="font-bold text-lg pt-6">Location</Text>
      </View>
    </ScrollView>
  )
}