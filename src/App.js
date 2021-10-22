import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

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

    return (

        <Layout>
            
            <div className="container">
                <div className="row">

                    <section>
                    
                        <h1>Hello World</h1>

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
