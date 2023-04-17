import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export class RCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainText: 'Sedang melaksanakan',
            subText: 'Ujian Tengah Semester'
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>{this.state.mainText} {this.state.subText}</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <TextInput
                        placeholder='Masukkan teks'
                        onChangeText={(text) => this.setState({ subText: text })}
                        style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 10 }} />
                </View>
            </View>
        )
    }
}

export default RCC