import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5d2d8b',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
