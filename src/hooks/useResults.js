import { useEffect, useState  } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([]); 
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        console.log("Calling searchApi()");
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new orleans'
                }
            });
            //console.log(response.data.businesses);
            setResults(response.data.businesses); 
            setErrorMessage("");
        } catch(e) {
            setErrorMessage("oops, something went wrong!");
        }
    }

    //call searchApi when component 
    //is first rendered. (not actually good idea) 
    useEffect( () => {
        searchApi('pizza');
    }, [])

    return [searchApi, results, errorMessage];

};