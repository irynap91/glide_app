import React, { useState, useEffect } from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet} from 'react-native';
import {Card, Button, Searchbar} from 'react-native-paper';
import ExploreTopBar from '../../Components/ExploreTopBar';
import TabNavigation from '../../Components/TabNavigation';
import {PageContext} from '../../Modules/Router';
import {styles} from './styles'




export default Locations = (props) => {

    const {pageContext, dispatch} = React.useContext(PageContext);
    const updatePage = page => dispatch({page});

    const countries = [{
        id: 1,
        country: 'GSTAAD',
        src: require('../../Assets/Gstaad.png'),
        restaurants: 4,
        bars: 7,
        activities: 11
    }, {
        id: 2,
        country: 'ZERMATT',
        src: require('../../Assets/Zermatt.png'),
        restaurants: 6,
        bars: 9,
        activities: 10
    }, {
        id: 3,
        country: 'SAINT MORITZ',
        src: require('../../Assets/SaintMoritz.png'),
        restaurants: 9,
        bars: 11,
        activities: 14
    }, {
        id: 4,
        country: 'VERBIER',
        src: require('../../Assets/Verbier.png'),
        restaurants: 10,
        bars: 18,
        activities: 19
    }, {
        id: 5,
        country: 'DAVOS',
        src: require('../../Assets/Davos.png'),
        restaurants: 8,
        bars: 15,
        activities: 8
    },  {
        id: 6,
        country: 'SAAS FEE',
        src: require('../../Assets/SaasFee.png'),
        restaurants: 8,
        bars: 15,
        activities: 8
    }
]

renderCities = () => {
    return countries.map(item => {
        return (
            <TouchableOpacity  key={item.id} onPress={()=> updatePage('MapView')}>
                <ImageBackground 
                    source={item.src} 
                    style={styles.block}>
                    <View>
                        <View style={styles.city}>
                            <Text style={styles.city_text}>{item.country}</Text>
                        </View>
                        <View style={styles.activities}>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Image stlyle={styles.activities_icon} source={require('../../Assets/Restaurant_small.png')}/>
                                <Text style={styles.activities_text}>{item.restaurants} Restaurants</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Image stlyle={styles.activities_icon} source={require('../../Assets/Beer_small.png')}/>
                                <Text style={styles.activities_text}>{item.bars} Bars</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Image stlyle={styles.activities_icon} source={require('../../Assets/Activities_small.png')}/>
                                <Text style={styles.activities_text}>{item.activities} Activities</Text>
                            </View>
                        </View>
                       
                    </View>
                </ImageBackground>
            </TouchableOpacity>
    )})
    }   

    return(
        <View>
            <ImageBackground 
                style={{width: '100%', height: '99%'}}
                source={require('../../Assets/BG_Locations.jpg')}>
                    <ExploreTopBar icon={'keyboard-arrow-left'} path={'LocationsCountries'}/>
                        <ScrollView>
                        <View style={styles.country}>
                            <Text style={styles.country_text}>Switzerland</Text>
                        </View>
                        <View style={styles.renderCities}>
                            {this.renderCities()}
                        </View>
                        </ScrollView>
                        <TabNavigation tab={'LocationsCountries'}/>
            </ImageBackground>
            
        </View>
        
    );
};


