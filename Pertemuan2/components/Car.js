import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state = {
            merek: 'Hyundai',
            types: { type: 'Matic', model: 'Palisade' }
        };
    }

    Come2Go(value) {
        return (
            <View>
                <Text>Let's go running away from duty</Text>
                <Text>with us only {value} IDR</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Hi i'm a car</Text>
                    <Text>Merek : {this.state.merek}</Text>
                </View>
                <View>
                    <Text>Type : {this.state.types.type}</Text>
                    <Text>Model : {this.state.types.model}</Text>
                </View>
                {this.Come2Go(200000)}
            </ScrollView>
        )
    }
}
