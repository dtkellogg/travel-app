import { View, Text, ScrollView } from 'react-native'
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
    <ScrollView>
      <View className="items-center space-y-1">
        <Text className="font-bold text-lg pt-6">Locations</Text>
        {locations?.map(location => (
          <Location
            className="space-y-1"
            key={location._id}
            name={location.name}
            country={location.country}
            img={location.img}
          />
        ))}
      </View>
    </ScrollView>
  )
}