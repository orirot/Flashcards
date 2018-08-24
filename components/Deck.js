import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {white, black} from "../utils/colors";
import {connect} from 'react-redux'
import {AppLoading} from 'expo'
import TextButton from "./TextButton";
import isEmpty from 'lodash/isEmpty';

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params
        return {
            title
        }
    }

    navigateTo = (target, title) => {
        this.props.navigation.navigate(
            target,
            {title}
        )
    }


    render() {
        const {decks} = this.props
        const deck = {...decks[this.props.navigation.state.params.title]}
        if (!isEmpty(deck)) {
        const {questions, title} = {...deck}
        return (
            <View key={title} style={styles.container}>
                 <Text>{title}</Text>
                 <Text>{questions.length} cards</Text>
                 <View style={styles.center}>
                     <TouchableOpacity>
                         <TextButton onPress={() => {this.navigateTo('AddCard', title)}} style={{backgroundColor: white, borderWidth: 2}}>Add Card</TextButton>
                     </TouchableOpacity>

                     <TouchableOpacity>
                         <TextButton onPress={() => {this.navigateTo('Quiz', title)}} style={{backgroundColor: black, color: white}}>Start Quiz</TextButton>
                     </TouchableOpacity>
                 </View>
             </View>
         )
        }
        return(<View><AppLoading/></View>)
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



