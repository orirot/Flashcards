import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {white} from "../utils/colors";
import {connect} from 'react-redux'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title
        }
    }

    render() {
        const {decks} = this.props
        const deck = {...decks[this.props.navigation.state.params.title]}
        const {questions, title } = {...deck}
        return (
                <View key={title} style={styles.container}>
                    <Text>{title}</Text>
                    <Text>{questions.length} cards</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        padding: 5,
        borderRadius: 8,
        width: 250,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
})

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Deck)



