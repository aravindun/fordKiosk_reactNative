import React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
                <View style={{ flex: 1, backgroundColor: '#0276b3', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{width:320, height:100}} source={require('./fordLogo.png')}  />
                <Text style={{ color: 'white', fontSize:30 }}
                onPress={ () => this.props.navigation.navigate('Details')}>FORD KIOSK</Text>
                </View>
                );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ color: 'black', fontSize:15, width:200 }} placeholder = "Enter Username" maxLength = {20}/>
                <TextInput style={{ color: 'black', fontSize:15, width:200 }} placeholder = "Enter Password" maxLength = {20}/>
                <Button
                title="Login"
                onPress={() => this.props.navigation.navigate('Dashboard')}
                />
                </View>
                );
    }
}

class DashboardScreen extends React.Component {
    render() {
        return (
                <View style={{ flex: 1, backgroundColor: '#0276b3', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize:30 }}>COMING SOON</Text>
                </View>
                );
    }
}

const RootStack = StackNavigator(
                                 {
                                 Home: {
                                 screen: HomeScreen,
                                 },
                                 Details: {
                                 screen: DetailsScreen,
                                 },
                                 Dashboard: {
                                 screen: DashboardScreen,
                                 },
                                 },
                                 {
                                 initialRouteName: 'Home',
                                 }
                                 );

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
