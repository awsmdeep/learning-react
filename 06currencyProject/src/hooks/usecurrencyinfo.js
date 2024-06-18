// Importing the necessary React hooks
import { useEffect, useState } from "react";

// Defining a custom React hook named useCurrencyInfo, which takes a 'currency' parameter
function useCurrencyInfo(currency) {
    // Initializing state variable 'data' with a default value of 0
    const [data, setData] = useState(0);

    // useEffect hook to perform side effects in a functional component
    useEffect(() => {
        // Fetching data from the provided API endpoint using the specified currency
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            // Parsing the response as JSON
            .then((res) => res.json())
            // Setting the fetched data to the state variable 'data'
            .then((res) => setData(res[currency]));
        
        // Logging the current value of 'data' after updating
        console.log(data);
        
        // Specifying the dependency array to trigger useEffect only when 'currency' changes
    }, [currency]);

    // Returning the fetched data
    return data;
}

// Exporting the custom hook for use in other components
export default useCurrencyInfo;
