import { View, Text, Image } from 'react-native'
import React from 'react'

const ItemImage = () => {
    return (
        <View style={{ backgroundColor: 'aqua', padding: 20 }}>
            <View style={{ borderWidth: 1, backgroundColor: 'white' }}>
                <Image source={require('../assets/avatar.png')} style={{ width: 80, height: 80 }}
                />
            </View>
        </View>
    )
}

export default ItemImage