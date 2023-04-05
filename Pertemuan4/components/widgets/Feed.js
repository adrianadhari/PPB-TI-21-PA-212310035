import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const Feed = ({ users }) => {
    return (
        <View style={styles.container}>
            {users.map((v, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                        {v.gender == 'M' ?
                            <Image source={require('../../assets/images/male.png')} style={styles.avatar} /> :
                            <Image source={require('../../assets/images/female.png')} style={styles.avatar} />}
                        <Text style={{ fontWeight: 'bold' }}>{v.username}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Image source={require('../../assets/images/1.jpg')} style={{ width: 420, height: 460 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/images/heart.png')} style={{ marginRight: 15 }} />
                            <Image source={require('../../assets/images/comment.png')} style={{ marginRight: 15 }} />
                            <Image source={require('../../assets/images/share.png')} />
                        </View>
                        <View>
                            <Image source={require('../../assets/images/bookmark.png')} style={{ flexDirection: 'row-reverse' }} />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>2.333 Likes</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 3, fontWeight: 'bold' }}>{v.username}</Text>
                            <Text>Best places to rest</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create = {
    container: {
        flex: 8,
        marginTop: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 100,
        marginRight: 10
    }
}

export default Feed