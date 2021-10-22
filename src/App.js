import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Search from './components/Search';

const App = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://api.punkapi.com/v2/beers/?=$"{searchValue}"`)
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.Response === "True") {
                setMovies(jsonResponse.Search);
                setLoading(false);
            } else {
                setErrorMessage(jsonResponse.Error);
                setLoading(false);
            }
        })
    }

    return (

        <Layout>
            
            <div className="container">
                <div className="row">

                    <section>
                    
                        <h1>Beer API</h1>

                        <Search search={search} />

                        {items.map((item) => (
                            console.log(item)
                        ))}

                    </section>

                </div>
            </div>
        
        </Layout>
    
    );
}

export default App;
