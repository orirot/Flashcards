import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native'
import {black, white} from "../utils/colors";
import TextButton from "./TextButton";
import {saveDeck} from "../actions/index";
import {connect} from 'react-redux'

class AddDeck extends Component {

    state = {
        input: ""
    }

    handleTextChange(input) {
        this.setState(() => ({
            input
        }))
    }

    addNewDeck = (event) => {
        const title = this.state.input
        if (!this.titleAlreadyExists(title)) {
            this.saveDeck(title)
        } else {
            this.titleExists(title)
        }
    }

    titleAlreadyExists = (title) => {
        const {decks} = this.props
        return decks.hasOwnProperty(title)
    }

    titleExists = (title) => {
        const msg = "Title " + title + " already exists"
        Alert.alert(
            'Adding Deck Failed',
            msg,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false}
        )
    }

    saveDeck = (title) => {
        this.props.dispatch(
            saveDeck({
                [title]: {
                    'title': title,
                    'questions': []
                }
            })
        )
    }

    render() {
        const {input} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.title}>What is the title of your new deck?</Text>
                    <TextInput
                        value={input}
                        style={styles.input}
                        onChange={(e) => this.handleTextChange(e.nativeEvent.text)}
                    />
                    <TouchableOpacity>
                        <TextButton onPress={() => this.addNewDeck()}
                                    style={{backgroundColor: black, color: white}}>Start Quiz</TextButton>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: black,
        margin: 50
    },
    title: {
        fontSize: 24
    }
})


function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(AddDeck)
