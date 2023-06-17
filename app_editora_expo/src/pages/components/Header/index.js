import { StyleSheet, Image,TouchableOpacity, Alert, SafeAreaView } from 'react-native';


export const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Menu')}>
                    <Image
                        style={styles.headerIcons}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/7216/7216128.png',
                        }}
                    />
                </TouchableOpacity>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerIcons: {
        width: 30,
        height: 30,
        margin: 20,
    },
    header: {
        backgroundColor: '#552583',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 0,
    },
});