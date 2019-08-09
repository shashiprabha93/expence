import React, {Component} from 'react';
import {Text, Platform, View} from 'react-native'
import {createStackNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';



const HomeNavigator = createStackNavigator({
    Home: {screen: Home},
    AddOutlet: {screen: AddOutlet},
    ScreenOne: {screen: ScreenOne},
    SurveyList: {screen: SurveyList},
    CompanyList: {screen: CompanyList},
    OutletList: {screen: OutletList},
    Profile: {screen: Profile},
    Sync: {screen: Sync},
    TempList: {screen: TempList},
    Profile1: {screen: Home},
    Survey: {screen: Survey},
    VoiceRecord: {screen: VoiceRecord},
    Maps: {screen: Maps},
}, {
    headerMode: 'screen',
    defaultNavigationOptions: ({navigation}) => ({
        title: '',
        header:
            <View>
                {Platform.OS === 'android' && Platform.Version >= 20 ?
                    <View
                        style={{
                            height: 24,
                            backgroundColor: "#0772b0",
                        }}
                    />
                    : null}
                <Header style={{backgroundColor: '#42A5F5'}}>
                    <Left>
                        {/* <Button transparent>
            <Icon name='arrow-back'
                  onPress={() => navigation.openDrawer()}/>
          </Button>*/}
                    </Left>
                    <Body>
                    <Title></Title>
                    </Body>
                    <Right>

                        <Button transparent>
                            <Icon name='more'/>
                        </Button>
                    </Right>
                </Header>
            </View>
    })
});

const HomeNavigationDrawer = createDrawerNavigator({
    HomePage: {
        screen: HomeNavigator,
    },
}, {
    contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
});


export default HomeNavigationDrawer;
