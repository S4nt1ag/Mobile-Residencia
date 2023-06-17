import { Dimensions, StyleSheet, Image, Text, TouchableOpacity, View, Alert } from 'react-native';


export const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                <Image
                    style={styles.footerIcons}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Buscar')}>
                <Image
                    style={styles.footerIcons}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/324/324654.png',
                    }}
                />

            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Favoritos')}>
                <Image
                    style={styles.footerIcons}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/46/46029.png',
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Carrinho')}>
                <Image
                    style={styles.footerIcons}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/3144/3144460.png',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#552583',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 5,
        width: '100%',
    },

    footerIcons: {
        width: 30,
        height: 30,
        margin: 20,
    },

});