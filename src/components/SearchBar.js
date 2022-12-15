import React from 'react'
import { TextInput, View, StyleSheet, } from 'react-native'
import { Entypo } from '@expo/vector-icons'
//import { TextInput } from 'react-native-gesture-handler'

const SearchBar = (props) => {

    return <View style={styles.background}>
        <Entypo name="magnifying-glass" style={styles.iconStyle}/>
        <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            value={props.searchTerm}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(newTerm) => props.onTermChange(newTerm)}
            onEndEditing={() => { props.onSearchTermSubmit()} }
            />
    </View>
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#cccccc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },

    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        fontSize: 18,
    },

    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;
