import { ScrollView, Text, View } from 'react-native';
import React from 'react'

const ListScrollView = ({ Users }) => {
    return (
        <ScrollView style={{ paddingHorizontal: 10 }}>
            {Users.map((v, index) => (
                <View key={index} style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginVertical: 10 }}>
                    <Text>{v.id}. {v.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default ListScrollView