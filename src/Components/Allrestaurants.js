// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cards from './Cards';

// const Allrestaurants = () => {
//   const [allres, setRes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     async function fetchRestaurants() {
//       try {
//         const response = await axios.get("http://localhost:3005/food");
//         setRes(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchRestaurants();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3005/food?query=${searchTerm}`);
//       setRes(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <section className='photo py-5'>
//           <div className='row'>
//             <div className="row d-flex justify-content-center">
//               <div className="col-lg-4">
//                 <form className="d-flex">
//                   <input class="form-control me-2" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//                   <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
//                   {/* <Search /> */}
//                 </form>
               
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="row">{allres.map((res) => (
//         <Cards key={res.id} location={res.location} image={res.image} cuisine={res.cuisine} />
//       ))}</div>
//     </div>
//   );
// };

// export default Allrestaurants;
