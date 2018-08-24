import React, {Component} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {white, gray} from "../utils/colors";
import {handleGetDecks} from "../actions/index";
import {AppLoading} from 'expo'
import DeckListSingleDeck from './DeckListSingleDeck'

class DeckList extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetDecks())
    }

    renderItem = (deck) => {
        const _deck = deck.item
        return (
            <View>
                <View key={_deck.title} style={[styles.container, styles.center]}>
                    <DeckListSingleDeck title={_deck.title} questions={_deck.questions} navigation={this.props.navigation}/>
                </View>
                <View style={styles.line}/>
            </View>
        )
    }

    render() {
        const decks = Object.values(this.props.decks)

        if (decks) {
            return (

                <View style={styles.container}>
                    <FlatList
                        data={decks}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.title}>
                    </FlatList>
                </View>

            )
        } else {
            return (
                <View>
                    <AppLoading/>
                </View>
            )
        }
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
        borderWidth: 0.5,
        borderColor: gray,
        margin: 10,
    },
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)