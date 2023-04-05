import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 35, fontFamily: 'Cookie' }}>Instagram</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/heart.png')} style={{ marginRight: 20 }} />
                <Image source={require('../../assets/images/messenger.png')} style={{ width: 28, height: 28 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    }
}

export default Header