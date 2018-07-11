import React from 'react';
import {StyleSheet, Text, View, CameraRoll} from 'react-native';
import About from './About'
import TouchDemo from './examples/Example2';
import AwkwardScrollingImageWithText from './examples/e3'
import MyWeb from './examples/webview'
import Webapp from './examples/ch04/app'

const HelloWorld = () => (
    <Text>Hello the World.</Text>
);

export default class App extends React.Component {
    render() {
        console.info('app: Testing in cosole.log');
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                {/*<CameraRoll/>*/}
                <TouchDemo/>
                <About />
                <HelloWorld/>
                <MyWeb/>
                <AwkwardScrollingImageWithText/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
