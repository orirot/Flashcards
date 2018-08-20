import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {white, red} from "../utils/colors";
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import QA from './QA'

class Quiz extends Component {

    // static navigationOptions = ({navigation}) => {
    //     return {
    //         title: "Quiz"
    //     }
    // }

    state = {
        currentQuestion: 0,
        numberCorrectAns: 0,
    }

    outOf = (questions) => {
        return (
            <View>
                <Text>{this.state.currentQuestion +1}/{questions.length}</Text>
            </View>
        )
    }

    answer = () => (
        <Text style= {styles.answer}>Answer</Text>
    )

    render() {
        const {questions, title} = this.props
        if (!isEmpty(questions)) {
            return (
                <View key={title} style={styles.container}>
                    {this.outOf(questions)}
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

function mapStateToProps(decks, ownProps) {
    const {title} = ownProps.navigation.state.params
    const deck = decks[title]
    return {
        questions: deck.questions,
        title
    }
}

export default connect(mapStateToProps)(Quiz)