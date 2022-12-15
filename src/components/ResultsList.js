import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation'
import ResultsDetail from "./ResultsDetail"

const ResultsList = (props) => {
    //console.log(props);
    if(!props.results.length) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{props.headerText}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={(result) => {return result.id} }

            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => {props.navigation.navigate("ResultsShow", { id: item.id })} }>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);