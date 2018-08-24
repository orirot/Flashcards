import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'Flashcards:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Answer a quiz!',
        body: "👋 don't forget to practice",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                console.log("ASKING PERMISSION")
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(1)
                            tomorrow.setMinutes(3)


                            const schedulingOptions = {
                                time: tomorrow,
                                repeat: 'day'
                            };

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification()
                                , schedulingOptions
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            } else {
                console.log("NO DATA")
            }
        }).catch((error) => {
        console.log(error)
    })
}