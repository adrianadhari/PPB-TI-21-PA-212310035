import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default function Bicycle() {
    const city = "south west";
    const peoples = [{ name: 'Erdiana', fams: 'Sister' }, { name: 'Emanuel', fams: 'Brother' }];
    return (
        <View>
            <Text>Hi i'm a Bicycle</Text>
            <TakeARide sabeb={peoples} />
            {Place2Go(city)}
            <View>
                <Text>Sepeda Gunung</Text>
                <Image source={{ uri: "https://trexsporting.com/images/products/187-o_oPoPoG3u.png" }} style={{ width: 200, height: 200 }} />
            </View>

            <View>
                <Text>Sepeda Lipat</Text>
                <Image source={require("../assets/sepedalipat.jpg")} style={{ width: 200, height: 200 }} />
            </View>
        </View>
    )
}

const TakeARide = ({ sabeb }) => {
    return (
        <View>
            <Text>Let's go riding with us:</Text>
            {sabeb.map((v, index) => (
                <View key={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View>
    )
};

function Place2Go(value) {
    return <Text>We'r going to {value} now, come on</Text>
}
