import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { locations } from '../data.js'
import Location from '../components/Location'

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Add Location', {
          })
        }}
      >
        <Text className="text-2xl mt-5 text-center bg-green-500 rounded">New Location</Text>
      </TouchableOpacity>
      <Text className="font-bold text-lg pt-6 text-center">Locations</Text>
      <View className="grid grid-cols-2 row-auto space-y-1 w-screen items-center">
        {locations?.map(location => (
          <Location
            key={location._id}
            name={location.name}
            country={location.country}
            img={location.img}
            startDate={location.startDate}
            endDate={location.endDate}
            summary={location.summary}
          />
        ))}
      </View>
    </ScrollView>
  )
}