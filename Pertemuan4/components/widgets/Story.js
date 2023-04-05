import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const Story = ({ users }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {users.map((v, index) => (
                    <View style={styles.eachStory} key={index}>
                        {v.gender == 'M' ?
                            <Image source={require('../../assets/images/male.png')} style={styles.imgStory} />
                            :
                            <Image source={require('../../assets/images/female.png')} style={styles.imgStory} />}
                        <Text>{v.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create = {
    container: {
        flex: 2,
        marginTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 10,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#F9F9F9'
    },
    eachStory: {
        alignItems: 'center',
        marginRight: 10
    },
    imgStory: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'purple'
    }
}

export default Story