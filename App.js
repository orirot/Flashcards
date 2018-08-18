import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import {black, gray, white} from './utils/colors'
import { Constants } from 'expo'
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";

const store = createStore(reducer)

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
        },
    },
    NewDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: black,
        style: {
            height: 56,
            backgroundColor: white,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
        labelStyle: {
            color: black,
        },
    }
})

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null,

        }
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: black,
            }
        }
    }
})

export default class App extends React.Component {

    componentWillMount(){
        console.log("first")
        console.log("second")
    }


    render() {

        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={gray} barStyle="light-content" />
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}