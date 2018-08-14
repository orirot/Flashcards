import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import {white} from "../utils/colors";


class DeckListView extends Component {
    render() {

        const decks = Object.values(this.props.decks)

        return (
            <View>
            {decks.map((deck)=>(
                <View key = {deck.title}>
                    <text>{deck.title}</text>
                    <text>{deck.questions.length} cards</text>
                </View>
            ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
     center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckListView)