import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class AddDeck extends Component {

    render() {
        return (
            <View>
                <View>
                    <Text>AddDeck</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
})

export default AddDeck