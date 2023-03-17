import React, { Component } from 'react'
import { Text, View } from 'react-native'

var name = "Suzuki";
const types = { type: 'Manual', model: 'GSX-R150', harga: 30000000 }
export default function Motorcycle() {
    return (
        <View>
            <Text>Hi i'm a motorcycle</Text>
            <Text>Merek : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model : {types.model}</Text>
            <Text>Harga : {types.harga}</Text>
        </View>
    )
}
