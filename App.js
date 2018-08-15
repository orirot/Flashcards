import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import {black, purple, white} from './utils/colors'
import { Constants } from 'expo'
import DeckListView from "./components/DeckListView";
import AddDeck from "./components/AddDeck";

const store = createStore(reducer)

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
    DeckListView: {
        screen: DeckListView,
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
                    <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}