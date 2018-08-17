import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {white} from "../utils/colors";

class DeckListSingleDeck extends Component {

    render() {
        const {title, questions} = this.props
        return (
            <TouchableOpacity
                onPress={() => this.props.navigate(
                    'Deck',
                    {title}
                )}
            >
                <View key={title} style={styles.container}>
                    <Text>{title}</Text>
                    <Text>{questions.length} cards</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
})

export default DeckListSingleDeck



