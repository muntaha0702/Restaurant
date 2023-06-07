import React from 'react';
import { toogle_fav } from '../Redux/actions';
import { toFormData } from 'axios';
import { useDispatch } from 'react-redux';
import Saareres from './Saareres';
import { Link } from 'react-router-dom';

const Cards = ({ id, cuisine, location, image, name, searchId, url }) => {
  // console.log(location)
  const dispatch = useDispatch()
  function handleToggle(index) {
    dispatch(toogle_fav(index))
  }
  const isCardMatch = searchId ? id === searchId : true;

  if (!isCardMatch) {
    return null; // Return null if the card doesn't match the desired ID or if no search ID is provided
  }
  const setToLocalStorage = (id, cuisine,location, image, name, searchId) => {
    // localStorage.setItem("id", id)
    localStorage.setItem("id", id)
    localStorage.setItem("cuisines", cuisine)
    localStorage.setItem("image", image)
    localStorage.setItem("name", name)
    localStorage.setItem("address", location)
    localStorage.setItem("url", url)
  }
  return (

    <div className="col-md-4 py-3 ">
      <div className="card text-center shadow">
        <h5 className="p-3">{name}</h5>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cuisine}</h5>
          <p className="card-text">{location}</p>
          <Link to={url}>
            <button type="text" class="btn btn-outline-warning mb-2" onClick={() => { setToLocalStorage(id, cuisine, image, name, location) }}  >View</button>
          </Link>
          {/* <button onClick={handleToggle}>Fav</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
