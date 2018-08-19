import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native'
import {black, white} from "../utils/colors";
import TextButton from "./TextButton";
import {addCardToDeck, saveDeck} from "../actions/index";
import {connect} from 'react-redux'

class AddCard extends Component {

    //TODO change from tab to stack navigation

    state = {
        question: "",
        answer: "",
        title: "React", //TODO change to get from navigation
    }

    handleTextChange(qa, text) {
        this.setState(() => ({
            [qa]: text
        }))
    }

    //TODO add AsyncStorage
    saveCard = () => {
        card = this.createCard()
        this.props.dispatch(
            addCardToDeck(this.state.title, card)
        )
    }

    createCard = () => {
        const {question, answer} = this.state
        return {
            question,
            answer
        }
    }

    render() {
        const {question, answer} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.title}>What is the title of your new deck?</Text>
                    <TextInput
                        value={question}
                        placeholder = 'Question'
                        style={styles.input}
                        onChange={(e) => this.handleTextChange("question", e.nativeEvent.text)}
                    />

                    <TextInput
                        value={answer}
                        placeholder = 'Answer'
                        style={styles.input}
                        onChange={(e) => this.handleTextChange("answer", e.nativeEvent.text)}
                    />

                    <TouchableOpacity>
                        <TextButton onPress={() => this.saveCard()}
                                    style={{backgroundColor: black, color: white}}>Submit</TextButton>
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

export default connect(mapStateToProps)(AddCard)
