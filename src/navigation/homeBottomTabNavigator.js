import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Inbox from '../screens/Inbox'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import Upload from '../screens/Upload'


import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'
import plusIcon from '../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator()

const HomeBottomTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000',
            },
            activeTintColor: '#fff'
        }}>
            <Tab.Screen name={'Home'} component={Home} options={{
                tabBarIcon: ({color}) => (
                    <Entypo name={'home'} size={26} color={color}/>
                )
            }}/>
            <Tab.Screen name={'Search'} component={Search} options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name={'search1'} size={26} color={color}/>
                )
            }}/>
            <Tab.Screen name={'Upload'} component={Upload} 
            options={{
                tabBarIcon: ({}) => (
                    <Image source={plusIcon} style={{height: 35 , resizeMode: 'contain'}}/>
                ),
                tabBarLabel: () => null,
            }}/>
            <Tab.Screen name={'Inbox'} component={Inbox} options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name={'message-minus-outline'} size={26} color={color}/>
                )
            }}/>
            <Tab.Screen name={'Profile'} component={Profile} options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={'ios-person-outline'} size={26} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default HomeBottomTabNavigator  