import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';

import Line from '../components/Line';
import LongText from '../components/LongText';

class SerieDetaiPage extends React.Component {
    render() {
        const serie = this.props.navigation.state.params.serie;
        return (
            <ScrollView>
                <Image
                style={styles.image}
                    source={{
                        uri: serie.img
                    }}
                />
                <Line label="Titulo" content={serie.title} />
                <Line label="Gênero" content={serie.gender} />
                <Line label="Nota" content={serie.rate} />
                <LongText label="Descrição" content={serie.description} />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    }
});

export default SerieDetaiPage;