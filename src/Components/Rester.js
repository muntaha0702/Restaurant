import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Rester = () => {
    const [cuisines, setCuisines] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        setCuisines(localStorage.getItem("cuisines"))
        setName(localStorage.getItem("name"));
        setAddress(localStorage.getItem("address"));
        setImage(localStorage.getItem("image"));
        
    }, [])
   
    return (

        <>
           <div className="container-fluid my-3">
            <img src={image} alt="" srcset="" width="100%" className='py-3 my-3'/>
            <h2 className='my-3'>{name}</h2>
            <p>{address}</p>
            <p className='pb-3 mb-3'>{cuisines}</p>
           </div>
        </>
    )
}

export default Rester