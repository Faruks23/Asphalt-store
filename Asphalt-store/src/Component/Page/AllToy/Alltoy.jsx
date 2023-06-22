import React, { useEffect, useState } from 'react';

import { Vortex } from "react-loader-spinner";
import { NavLink } from 'react-router-dom';
const Alltoy = () => {
    const [selectedValue, setSelectedValue] = useState("");
  const [alltoy, setAlltoy] = useState([])
  const [loder, setLoder] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
   
  useEffect(() => {
    document.title = "Asphalt |  All Toy"; // Set the new title here
  }, []);
  
  
  
  
  useEffect(() => {
    if (selectedValue) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy?sort=${selectedValue}`
        )
          .then((res) => res.json())
          .then((data) => setAlltoy(data));
          
    } 
    setLoder(false)
      
  
  },[selectedValue]);


  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy`
    )
      .then((res) => res.json())
      .then((data) => setAlltoy(data));
       setLoder(false)
  },[])
  console.log(alltoy);


    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
  console.log(selectedValue);


   const handleSearch =(event) => {
     event.preventDefault();
    
     fetch(
       `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy?name=${searchTerm}`
     )
       .then((res) => res.json())
       .then((data) => setAlltoy(data));
     
   };


  return (
    <div className="w-[95%] mx-auto">
      <div className="overflow-x-auto mt-[50px] font-serif border shadow-xl">
        <form className='w-[50%] mx-auto flex gap-4 mb-6' onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search toys by name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className='btn' type="submit ">Search</button>
        </form>

        <h1
          className="text-3xl text-blue-500 uppercase font-bold font-serif text-center
        mb-[50px]"
        >
          ALL toy List
        </h1>

        <select
          onChange={handleSelectChange}
          className="select select-bordered w-full max-w-xs mb-6"
        >
          {" "}
          Sort By Price
          <option disabled selected>
            Sort By Price
          </option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>

        <table className="table table-zebra w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>NO. </th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {loder ? (
              <>
                <div className="loder flex justify-center items-center">
                  <div>
                    <Vortex
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="vortex-loading"
                      wrapperStyle={{}}
                      wrapperClass="vortex-wrapper"
                      colors={[
                        "red",
                        "green",
                        "blue",
                        "yellow",
                        "orange",
                        "purple",
                      ]}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {alltoy.map((toy, index) => {
                  const {
                    availableQuantity,
                    category,
                    details,
                    price,
                    seller,
                    sellerEmail,
                    toyName,
                    _id,
                    rating,
                  } = toy;
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{seller}</td>
                      <td>{toyName}</td>
                      <td>{category}</td>
                      <td>${price}</td>
                      <td>{availableQuantity}</td>

                      <NavLink to={`/details/${_id}`}>
                        <button className="btn btn-sm bg-blue-500">
                          Details
                        </button>
                      </NavLink>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoy;