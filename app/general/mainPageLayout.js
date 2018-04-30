import React, {Component} from 'react';

import {
    StyleSheet, View, Image
} from 'react-native';

import { container } from '../styles/main';

class MainPageLayout extends Component {
    render() {
        return (
            <View style={StyleSheet.flatten([container.p40, this.props.style, container.flex])}>
                <View style={StyleSheet.flatten([styles.contentContainer])}>
                    {this.props.children}
                </View>
                <View style={styles.bgContainer}>
                    <Image source={require('../../img/bgshape1.png')} style={styles.bgshape1}></Image>
                    <Image source={require('../../img/bgshape2.png')} style={styles.bgshape2}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgContainer: {
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    contentContainer: {
        zIndex: 1,
        flex: 1
    },
    bgshape2: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 200,
        height: 200
    },
    bgshape1: {
        position: 'absolute',
        bottom: 0,
        left: -150,
        width: 250,
        height: 300
    }
});

export default MainPageLayout;