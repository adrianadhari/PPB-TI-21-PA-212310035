import { View, Text, SectionList } from 'react-native'
import React from 'react'

const ListSectionList = ({ Users }) => {
    const data = [{ title: 'Mahasiswa', data: Users }]
    return (
        <SectionList sections={data}
            renderItem={({ item }) => <UserItem item={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text>{title}</Text>
            )}
            style={{ paddingHorizontal: 10 }}
        />
    )
}

const UserItem = ({ item }) => (
    <View style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginVertical: 10 }}>
        <Text>{item.name}</Text>
    </View>
)
export default ListSectionList