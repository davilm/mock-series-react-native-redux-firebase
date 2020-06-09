import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const SerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.container,
            isFirstColumn ? styles.FirstColumn : styles.lastColumn
        ]}>
        <View style={styles.card}>
            <Image
                source={require('../../resources/add.png')}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '50%',
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    }
});

export default SerieCard;