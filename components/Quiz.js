import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {white, red} from "../utils/colors";
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import QA from './QA'
import { withNavigation } from 'react-navigation'

class Quiz extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Quiz"
        }
    }

    state = {
        currentQuestion: 0,
        numberCorrectAns: 0,
    }

    outOf = () => {
        return (
            <View>
                <Text>{state.currentQuestion +1}/{this.props.questions.length}</Text>
            </View>
        )
    }

    answer = () => (
        <Text style= {styles.answer}>Answer</Text>
    )

    render() {
        const {questions} = this.props

        if (!isEmpty(questions)) {
            return (
                <View key={title} style={styles.container}>
                    {this.outOf()}
                    <View style={styles.center}>
                        <QA question={questions[0]}></QA>
                    </View>
                </View>
            )
        }

        return (
            <View>
                <Text>There are no questions in that Deck</Text>
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
    answer: {
        color: red
    }
})

function mapStateToProps(decks) {
    console.log("In Quiz")
    console.log(this.props.navigation)
    const {title} = this.props.navigation.state.params
    const deck = decks[title]
    return {
        questions: deck.questions
    }
}

export default (connect(mapStateToProps)(Quiz))