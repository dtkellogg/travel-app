import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function location({ name }) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow h-64 w-64 rounded-b-lg">
      <Text>{ name }</Text>
    </TouchableOpacity>
  )
}