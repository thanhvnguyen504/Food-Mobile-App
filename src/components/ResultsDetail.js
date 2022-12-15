import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = (props) => {
    return <View>
        <Image style={styles.image} source={{ uri: props.result.image_url }}/>
        <Text style={styles.name}>{props.result.name}</Text>
        <Text>{props.result.rating} Stars, {props.result.review_count} Reviews </Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;