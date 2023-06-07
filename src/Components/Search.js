import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewCard from './NewCard';
import { Link } from 'react-router-dom';


const Search = () => {
    const [dataRest, setdata] = useState({});
    const [location, setLocation] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [searchedCards, setSearchedCards] = useState([]);
    // const [filteredRestaurants , setfilteredRestaurants] = useState([]);
    let filteredRestaurants = []
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=0&count=100", {
                    headers: {
                        "user-key": "c3d3366545336bba3bcec47786f44130",
                        "content-type": "application/json"
                    }
                });

                console.log("data", response.data);
                setdata(response.data.restaurants);
                if (Array.isArray(response.data.restaurants) && response.data.restaurants.length > 0) {
                    setSearchedCards(response.data.restaurants);
                } else {
                    setSearchedCards([]);
                }
            }




            catch (error) {
                console.log(error);
                setSearchedCards([]);
            }
        };

        fetchData();
    }, []);


    function handleSearch() {
        console.log("hey", searchedCards);
        console.log(location)
        filteredRestaurants = searchedCards.filter(
            (obj) => obj.restaurant.location.city === location
        );
        console.log("filtr", filteredRestaurants)


    }

    console.log("maera", dataRest);
    // console.log("search", searchedCards[0].restaurant.location.city)
    return (
        <div>
           <div className="container">
            <div className="row text-center">
                <div className="col-12 input-group mt-5 mb-3 ">
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" style={{width:'80%'} }/>
                {/* <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Cuisine" />   */}
                <button className='btn btn-dark' onClick={handleSearch}>Search</button>

          </div>
            </div>
           </div>
           


            <div className="container">
                <div>
                    {/* <h2>Restaurants in {location}</h2> */}
                    {filteredRestaurants.map((obj, index) => (

                        <NewCard key={obj.restaurant.res_id} id={obj.restaurant.res_id} cuisine={obj.restaurant.cuisines} location={obj.restaurant.location.address}
                            image={obj.restaurant.thumb}
                            name={obj.restaurant.name}
                            searchId={obj.restaurant.id}
                            url={obj.restaurant.url} />

                    ))}

                </div>
                {/* {(searchedCards[0].restaurant.location.city === location )?console.log("hey"):console.log("bye")} */}

                {/* {searchedCards.forEach(handlefunction(searchedCards[0]))
                }; */}
            </div>
        </div>
    );
};

export default Search;

