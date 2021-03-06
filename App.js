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
                <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <TextInput style={{ color: 'black', fontSize:15, width:200, height: 50 }} placeholder = "Enter Username" maxLength = {20}/>
                <TextInput style={{ color: 'black', fontSize:15, width:200, height: 50 }} placeholder = "Enter Password" secureTextEntry={true} maxLength = {20}/>
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
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TextInput style={{ color: 'black', fontSize:15, width:300, top: 10, left: 20, height: 50 }} placeholder = "SEARCH HERE" maxLength = {20}/>
                <View style={{ width: 200, left: 20, top: 50 }}>
                <Button title="GBS Holiday Calendar" onPress={() => this.props.navigation.navigate('GBSHoliday')}/>
                </View>
                <View style={{ width: 200, left: 20, top: 100 }}>
                <Button title="ADMIN CONTACTS" onPress={() => this.props.navigation.navigate('AdminContacts')}/>
                </View>
                </View>
                );
    }
}

class GBSHolidayScreen extends React.Component {
    render() {
        return (
                <Image source={require('./gbsHoliday2018.png')}  />
                );
    }
}

class AdminContactsScreen extends React.Component {
    render() {
        return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ width: 200, left: 20, top: 50 }}>
                <Button title="TRANSPORT" onPress={() => this.props.navigation.navigate('Transport')}/>
                </View>
                <View style={{ width: 200, left: 20, top: 100 }}>
                <Button title="BCP" onPress={() => this.props.navigation.navigate('BCP')}/>
                </View>
                <View style={{ width: 200, left: 20, top: 150 }}>
                <Button title="FIRE" onPress={() => this.props.navigation.navigate('Fire')}/>
                </View>
                <View style={{ width: 200, left: 20, top: 200 }}>
                <Button title="FACILITY" onPress={() => this.props.navigation.navigate('Facility')}/>
                </View>
                </View>
                );
    }
}

class TransportScreen extends React.Component {
    render() {
        return (
                <Image source={require('./transport.png')}  />
//                <View style={{ flex: 1, backgroundColor: 'white', top: 0 }}>
//                <View style={{ flex: 1, backgroundColor: 'white', left: 140 }}>
//                <Text style={{ color: 'black', fontSize:15 }}>TRANSPORT</Text>
//                <Image style={{ width:70, height:50, left: 200, top: -30, bottom: 0 }} source={require('./fordLogo.png')}  />
//                </View>
//                </View>
                );
    }
}

class BCPScreen extends React.Component {
    render() {
        return (
                <Image source={require('./bcp.png')}  />
//                <View style={{ flex: 1, backgroundColor: '#0276b3', alignItems: 'center', justifyContent: 'center' }}>
//
//                <Text style={{ color: 'white', fontSize:30 }}>BCP</Text>
//                </View>
                );
    }
}

class FireScreen extends React.Component {
    render() {
        return (
                <Image source={require('./fire.png')}  />
//                <View style={{ flex: 1, backgroundColor: '#0276b3', alignItems: 'center', justifyContent: 'center' }}>
//
//                <Text style={{ color: 'white', fontSize:30 }}>FIRE</Text>
//                </View>
                );
    }
}

class FacilityScreen extends React.Component {
    render() {
        return (
                <Image source={require('./facility.png')}  />
//                <View style={{ flex: 1, backgroundColor: '#0276b3', alignItems: 'center', justifyContent: 'center' }}>
//
//                <Text style={{ color: 'white', fontSize:30 }}>FACILITY</Text>
//                </View>
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
                                 GBSHoliday: {
                                 screen: GBSHolidayScreen,
                                 },
                                 AdminContacts: {
                                 screen: AdminContactsScreen,
                                 },
                                 Transport: {
                                 screen: TransportScreen,
                                 },
                                 BCP: {
                                 screen: BCPScreen,
                                 },
                                 Fire: {
                                 screen: FireScreen,
                                 },
                                 Facility: {
                                 screen: FacilityScreen,
                                 }
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
