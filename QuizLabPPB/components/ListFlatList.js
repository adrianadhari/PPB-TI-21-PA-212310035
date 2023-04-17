import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListFlatList = ({ Users }) => {
    return (
        <FlatList
            data={Users}
            renderItem={({ item }) => <Item name={item.name} />}
            keyExtractor={item => item.id}
            style={{ paddingHorizontal: 10 }}
        />
    )
}

const Item = ({ name }) => (
    <View style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginVertical: 10 }}>
        <Text>{name}</Text>
    </View>
)
export default ListFlatList