import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {red} from "../utils/colors";

class QA extends Component {

    state = {
        showingQuestion: false
    }

    flipCard = () => {
        this.setState(()=>({
        showingQuestion: !this.state.showingQuestion
        }))
    }

    render () {
        const {question, answer} = this.props.question
    return (
        <View>
            {this.state.showingQuestion
                ? <Text style={styles.content}>{question}</Text>
                : <Text style={styles.content}>{answer}</Text>
            }

            <TouchableOpacity onPress={()=> this.flipCard()}>
                {this.state.showingQuestion
                    ? <Text style={styles.goToAnswerQuestion}>Answer</Text>
                    : <Text style={styles.goToAnswerQuestion}>Question</Text>
                }
            </TouchableOpacity>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    content: {
        fontSize: 20,
    },
    goToAnswerQuestion: {
        color: red,
        fontSize: 14
    }
})

export default QA

