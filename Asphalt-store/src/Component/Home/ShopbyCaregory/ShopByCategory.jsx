import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { NavLink, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ShopByCategory = () => {
  const {user}=useContext(AuthContext)

  const [category, setCategory] = useState("babyCar");
  const [data, setData] = useState([]);


  useEffect(() => {
    if (category) {
      fetch(
        `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy/category/${category}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [category]);
 console.log(data);

    const handleTabSelect = (index) => {
      const selectedCategory = getSelectedCategory(index);
      console.log(selectedCategory);
      setCategory(selectedCategory);
  };
  const getSelectedCategory = (index) => {
    // Define your categories array
    const categories = ["babyCar", "Strollers", "walkers"];

    // Return the selected category based on the index
    return categories[index];
  };

   const Navigate=useNavigate()

  const handleuser = () => {
    const process = confirm("You need to login  than you can access this page")
    if (process) {
      Navigate("/login");
    }
   }


  return (
    <div className="w-[80%] mx-auto mt-6">
      <Tabs onSelect={handleTabSelect} defaultIndex={0}>
        <TabList>
          <Tab>babyCar</Tab>
          <Tab>Strollers</Tab>
          <Tab>walkers</Tab>
        </TabList>

        <TabPanel>
          <div className="babyCar grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((babyCars) => {
              const {
                
                photo,
                price,
                rating,
               
                toyName,
                _id,
              } = babyCars;
              return (
                <div className="card w-96 bg-base-100 shadow-xl border">
                  <figure>
                    <img src={photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {toyName}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-orange-500">Price:${price}</p>
                    <p className="text-orange-500">
                      {" "}
                      <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaStar className="icon"></FaStar>}
                        placeholderSymbol={<FaStar className="icon"></FaStar>}
                        fullSymbol={<FaStar className="icon"></FaStar>}
                      />
                    </p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline text-blue-500">
                        Buy
                      </div>
                      {user ? (
                        <NavLink to={`/details/${_id}`}>
                          <div className="badge badge-outline text-orange-600">
                            Details
                          </div>
                        </NavLink>
                      ) : (
                        <div
                          onClick={handleuser}
                          className="badge badge-outline text-orange-600"
                        >
                          Details
                      
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="Strollers grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((Strollers) => {
              const {
                
                photo,
                price,
                rating,
                toyName,
                _id,
              } = Strollers;
              return (
                <>
                  <div className="card w-96 bg-base-100 shadow-xl border">
                    <figure>
                      <img src={photo} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {toyName}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p className="text-orange-500">Price:${price}</p>
                      <p className="text-orange-500">
                        {" "}
                        <Rating
                          placeholderRating={rating}
                          emptySymbol={<FaStar className="icon"></FaStar>}
                          placeholderSymbol={<FaStar className="icon"></FaStar>}
                          fullSymbol={<FaStar className="icon"></FaStar>}
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline text-blue-500">
                          Buy
                        </div>
                        <NavLink to={`/details/${_id}`}>
                          <div className="badge badge-outline text-orange-600">
                            Details
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="walkers grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((walkers) => {

               const {
                 photo,
                 price,
                 rating,

                 toyName,
                 _id,
               } = walkers;
              return (
                <div className="card w-96 bg-base-100 shadow-xl border">
                  <figure>
                    <img src={photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {toyName}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-orange-500">Price:${price}</p>
                    <p className="text-orange-500">
                      {" "}
                      <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaStar className="icon"></FaStar>}
                        placeholderSymbol={<FaStar className="icon"></FaStar>}
                        fullSymbol={<FaStar className="icon"></FaStar>}
                      />
                    </p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline text-blue-500">
                        Buy
                      </div>
                      <NavLink to={`/details/${_id}`}>
                        <div className="badge badge-outline text-orange-600">
                          Details
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;