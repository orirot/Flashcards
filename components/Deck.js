import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {white, black} from "../utils/colors";
import {connect} from 'react-redux'
import TextButton from "./TextButton";

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params
        return {
            title
        }
    }

    render() {
        const {decks} = this.props
        const deck = {...decks[this.props.navigation.state.params.title]}
        const {questions, title} = {...deck}
        return (
            <View key={title} style={styles.container}>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
                <View style={styles.center}>
                    <TouchableOpacity>
                        <TextButton style = {{backgroundColor: white, borderWidth: 2}}>Add cxvCard</TextButton>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextButton style = {{backgroundColor: black, color: white}}>Start Quiz</TextButton>
                    </TouchableOpacity>
                </View>
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
        decks,
    }
}

export default connect(mapStateToProps)(Deck)



