import * as React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

type props = {
    isLoading: boolean
}
const Loader: React.FC<props> = (props: props): JSX.Element => {


    return (

        <Modal visible={props.isLoading} transparent={true} animationType='none'>
            <View style={styles.modalBg}>
                <View style={styles.indicator}>
                    <ActivityIndicator animating={true} color={MD2Colors.red800} />

                </View>
            </View>
        </Modal>


    );
};


const styles = StyleSheet.create({
    modalBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#00000040"
    },
    indicator: {
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

});
export default Loader;