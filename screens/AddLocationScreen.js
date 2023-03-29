import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

export default function AddLocationScreen() {
  const [name, changeName] = useState()
  const [country, changeCountry] = useState()
  const [img, changeImg] = useState()
  const [summary, changeSummary] = useState()
  const [startDate, changeStartDate] = useState()
  const [endDate, changeEndDate] = useState()

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  const onSubmit = () => {
    console.log('Add Location Form Submitted!')
  }

  return (
    <ScrollView className="pt-10">
      <Text className="text-3xl text-center">Add Location</Text>
      {/* Back btn */}
      {/* <View className="relative"> */}
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 p-2 cursor-pointer bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
      {/* </View> */}

      {/* Form */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={name => changeName(name)}
      />
      <Text className="ml-4">Name: {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={country => changeCountry(country)}
      />
      <Text className="ml-4">Country: {country}</Text>
      <TextInput
        style={styles.input}
        placeholder="Image"
        value={img}
        onChangeText={img => changeImg(img)}
      />
      <Text className="ml-4">Image: {img}</Text>
      <TextInput
        style={styles.input}
        placeholder="Summary"
        value={summary}
        onChangeText={summary => changeSummary(summary)}
      />
      <Text className="ml-4">Summary: {summary}</Text>
      <TextInput
        style={styles.input}
        placeholder="Start Date"
        value={startDate}
        onChangeText={startDate => changeStartDate(startDate)}
      />
      <Text className="ml-4">Start Date: {startDate}</Text>
      <TextInput
        style={styles.input}
        placeholder="End date"
        value={endDate}
        onChangeText={endDate => changeEndDate(endDate)}
      />
      <Text className="ml-4">End Date: {endDate}</Text>

      <Button
        onPress={onSubmit}
        title="Submit"
        className="bg-orange text-orange-500"
        accessibilityLabel="Create new Location"
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    // marginTop: 80,
    borderWidth: 1,
    padding: 10,
  },
});