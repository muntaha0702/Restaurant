import React from 'react'
import Cards from './Cards';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Search from './Search';
const Saareres = () => {
      const [allres, setRes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=0&count=100", {
          headers: {
            "user-key": "c3d3366545336bba3bcec47786f44130",
            "content-type": "application/json"
          }
        });
        
        console.log(response);
        setRes(response.data.restaurants)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = async () => {
        try {
          const response = await axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=0&count=100");
          
          setRes(response.data.restaurants);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className="container">
    <div>
      <section className='photo py-5'>
        <div className='row'>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              {/* <form className="d-flex">
                <input class="form-control me-2" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
               
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="row">{allres.map((res,index) => (
      
      <Cards key={res.restaurant.id} location={res.restaurant.location.address} image={res.restaurant.featured_image} cuisine={res.restaurant.cuisines} name={res.restaurant.name} url={res.restaurant.events_url
      } />
))}</div>
    
  </div>
);
  
  
}

export default Saareres