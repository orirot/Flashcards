import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {white, red, green} from "../utils/colors";
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import QA from './QA'
import TextButton from "./TextButton";

class Quiz extends Component {

    state = {
        currentQuestion: 0,
        numberCorrectAns: 0,
    }

    answered = (correct)=>{
        const numCorrect = correct ? this.state.numberCorrectAns + 1 : this.state.numberCorrectAns
        this.lastQuestion() ? this.finishQuiz(numCorrect) : this.nextQuestion(numCorrect)
    }

    lastQuestion = () => {
        return this.props.questions.length === (this.state.currentQuestion + 1);
    }

    nextQuestion = (numCorrect) =>{
        this.setState(()=>({
            currentQuestion: this.state.currentQuestion +1,
            numberCorrectAns: numCorrect
        }))
    }

    alertResult = (numCorrect) => {
        const msg = "% " + (100*(numCorrect / this.props.questions.length)).toFixed(2) + " Success Rate"
        Alert.alert(
            `The ${this.props.title} quiz is finished`,
            msg,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false}
        )
    }

    finishQuiz = (numCorrect) => {
        this.alertResult(numCorrect)
        this.props.navigation.popToTop()
    }

    outOf = () => {
        return (
            <View>
                <Text>{this.state.currentQuestion +1}/{this.props.questions.length}</Text>
            </View>
        )
    }

    answer = () => (
        <Text style= {styles.answer}>Answer</Text>
    )

    render() {
        const {questions, title} = this.props
        const question = questions[this.state.currentQuestion]
        if (!isEmpty(questions)) {
            return (
                <View key={title} style={styles.container}>
                    {this.outOf()}
                    <View style={styles.center}>
                        <QA question={question}></QA>
                        <TouchableOpacity>
                            <TextButton onPress={() => this.answered(true)}
                                        style={{backgroundColor: green, color: white}}>Correct</TextButton>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <TextButton onPress={() => this.answered(false)}
                                        style={{backgroundColor: red, color: white}}>Incorrect</TextButton>
                        </TouchableOpacity>
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

function mapStateToProps(decks, ownProps) {
    const {title} = ownProps.navigation.state.params
    const deck = decks[title]
    return {
        questions: deck.questions,
        title
    }
}

export default connect(mapStateToProps)(Quiz)