import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { locations } from '../data.js'
import Location from '../components/Location'

export default function LocationsScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <View className="items-center">
      <Text className="font-bold text-lg pt-6">Locations</Text>
      {locations?.map(location => (
        <Location
          name={location.name}
        />
      ))}
    </View>
  )
}