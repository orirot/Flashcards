import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native'
import {connect} from 'react-redux'
import {white} from "../utils/colors";
import {getDecksFromStorage, initialData} from "../utils/api";
import {getDecks} from "../actions/index";
import {AppLoading} from 'expo'

class DeckListView extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        const {dispatch} = this.props

        //TODO change this to get real data and to remove the export of the initial Data from api class
        const decks = initialData
        dispatch(getDecks(decks))
        this.setState(() => ({ready: true}))
        // getDecksFromStorage()
        //     .then((decks) => {dispatch(getDecks(decks))})
        //     .then(() => {this.setState(() => ({ready: true}))})
    }

    render() {
        const decks = Object.values(this.props.decks)
        console.log({decks})
        const {ready} = this.state

        if (ready === false) {
            return <AppLoading/>
        }

        return (
            <View>
                {decks && decks.map((deck) => (
                    <View key={deck.title}>
                        <Text>{deck.title}</Text>
                        <Text>{deck.questions.length} cards</Text>
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckListView)