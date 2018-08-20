import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'
import {connect} from 'react-redux'
import {white} from "../utils/colors";
import {getDecksFromAsyncStorage, initFirstData, initialData} from "../utils/api";
import {getDecks} from "../actions/index";
import {AppLoading} from 'expo'
import DeckListSingleDeck from './DeckListSingleDeck'

class DeckList extends Component {
    state = {
        ready: false,
    }

    dispatchGetDecks = (decks) => {
        this.props.dispatch(getDecks(decks))
    }


    getDecksFromStorage = () => {
        getDecksFromAsyncStorage()
            .then((decks) => {
                console.log('scuccess',decks)
                this.dispatchGetDecks(decks)
            })
            .catch(e => console.log('error', e))
            .then(() => this.setState(() => ({ready: true})))

    }

    componentDidMount() {
        //TODO remove the init data and just get from storage
        initFirstData()
            .then((this.getDecksFromStorage))
        //TODO change this to get real data and to remove the export of the initial Data from api class
        // const decks = initialData
        // dispatch(getDecks(decks))
        // this.setState(() => ({ready: true}))
    }

    renderItem = (deck) => {
        const _deck = deck.item
        return(
        <View key={_deck.title} style={[styles.container, styles.center]}>
            <DeckListSingleDeck title={_deck.title} questions ={_deck.questions} navigation={this.props.navigation}/>
            <View style={styles.line}/>
        </View>
        )
    }

    render() {
        const decks = Object.values(this.props.decks)
        const {ready} = this.state
        if (ready === false) {
            return <AppLoading/>
        }

        if (decks){
        return (

            <View style={styles.container}>
                <Text>LIST:</Text>
                <FlatList
                    data = {decks}
                    renderItem = {this.renderItem}
                    keyExtractor = {(item, index) => item.title}>
                </FlatList>
            </View>

        )
        }
        return(
            <View>
                <Text>NOTHING</Text>
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
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)