import React, {useState, useEffect } from 'react' 
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        let myfilteredArray = results.filter( (result) => {
            return result.price === price;
        })
        
        return myfilteredArray;
    }
    console.log(results);

    return <>
        <SearchBar searchTerm={searchTerm} onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi(searchTerm)}} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>

        <ScrollView>
            <ResultsList results={filterResultsByPrice("$")} headerText="Budget Options" />
            <ResultsList results={filterResultsByPrice("$$")} headerText="Kinda Pricey" />
            <ResultsList results={filterResultsByPrice("$$$")} headerText="$$$ WOWZA $$$" />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    container : {
        borderColor : 'red',
        borderWidth : 3,
        flex: 1
    }
});

export default SearchScreen;