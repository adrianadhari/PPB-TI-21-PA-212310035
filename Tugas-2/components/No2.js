import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ItemTypograp from './ItemTypograp'
import ItemImage from './ItemImage'

export class No2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {ItemTypograp()}
                {ItemImage()}
            </View>
        )
    }
}

export default No2