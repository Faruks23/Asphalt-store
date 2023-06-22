import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from "react-rating";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { useEffect } from 'react';
const ToyDetails = () => {
  
  useEffect(() => {
    document.title = "Asphalt |  To Details"; // Set the new title here
  }, []);
  const Details=useLoaderData()
  console.log(Details);
  const {
    availableQuantity,
    category,
    details,
    photo,
    price,
    rating,
    sellerEmail,
    seller,
    toyName,
  } = Details;
  return (
    <>
      {" "}
      <h1 className="text-center my-10  text-blue-500  font-bold text-5xl">
        Toy Details
      </h1>
      <hr />
      <div className="flex md:w-[80%] md:mx-auto justify-center items-center mt-4 font-sans">
        <div className=" md:flex gap-8 bg-base-100   shadow-xl  md:w-[60%]  h-[100%] py-5 px-5 font-serif">
          <figure>
            <img src={photo} alt="cars" />
          </figure>
          <div className=" flex flex-col gap-2">
            <h2 className="card-title text-blue-500">Name:{toyName}</h2>
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
            <p className="">${details}.....</p>
            <hr />
            <p>
              <span className="font-bold">Seller Name</span>: {seller}
            </p>
            <p>
              <span className="font-bold">Seller Email</span>: {sellerEmail}
            </p>
            <hr />
            <p className="text-orange-600">
              {" "}
              <span className="font-bold">Quantity: </span>
              {availableQuantity}
            </p>
            <div className="card-actions justify-start md:mt-3">
              <button className="btn btn-sm bg-blue-500">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;