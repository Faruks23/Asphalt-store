import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import './MyToy.css'
import toast, { Toaster } from "react-hot-toast";
const MyToy = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useContext(AuthContext)
  const [mytoy, setMytoy] = useState([])
  const [UpdateDatas, setUpdateData] = useState([])
  
useEffect(() => {
  document.title = "Asphalt |  My Toy"; // Set the new title here
}, []);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMytoy(data));
  }, [])
  console.log(mytoy);

  const handlDelete = (id) => { 
    const process = confirm('Are you sure you want to delete')
    if (process) {
      fetch(
        `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const remaining = mytoy.filter((toy) => toy._id !== id);
            setMytoy(remaining);
              toast.success("Successfully Detected");
          }
        });
    }
      
    
    

  }
  const openModal = (toy) => {
     setUpdateData(toy)
     setModalIsOpen(true);
   };

   const closeModal = () => {
     setModalIsOpen(false);
  };
   const handleSubmit = (e) => {
     e.preventDefault();
    
        
         const form = e.target;
         const price = form.price.value;
         const availableQuantity = form.quantity.value;
         const details = form.description.value;
   
      
          const UpdateData = {
            price,
            availableQuantity,
            details,      
     };
     fetch(
       `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy/${UpdateDatas?._id}`,
       {
         method: "PATCH",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(UpdateData),
       }
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         toast.success("Successfully Updated");
       });


     console.log(UpdateData);
     // Handle form submission logic here
   
   };
 console.log("toy", UpdateDatas);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="overflow-x-auto w-[95%] mx-auto border shadow-xl mt-20">
        <h1 className='text-center text-blue-500 font-serif text-3xl mb-4'>MY TOY</h1>
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>NO. </th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mytoy.map((toy, index) => {
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

                  <td>
                    {" "}
                    <button
                      onClick={() => openModal(toy)}
                      className="btn btn-sm bg-blue-500"
                    >
                      <FaRegEdit></FaRegEdit>
                    </button>
                  </td>

                  <td>
                    {" "}
                    <span
                      onClick={() => handlDelete(_id)}
                      className="btn btn-sm bg-blue-500"
                    >
                      <AiOutlineDelete></AiOutlineDelete>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <button onClick={openModal}>Open Modal</button> */}

      <div className=" z-50">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
        >
          <h2
            onClick={closeModal}
            className="text-right font-bold text-4xl cursor-pointer"
          >
            X
          </h2>

          <form className=" z-50 modal-form mx-auto " onSubmit={handleSubmit}>
            <label htmlFor="priceInput">Price:</label>

            <input
              type="number"
              id="priceInput"
              defaultValue={UpdateDatas?.price}
              name="price"
            />

            <label htmlFor="quantityInput">Available Quantity:</label>
            <input
              type="number"
              id="quantityInput"
              defaultValue={UpdateDatas?.availableQuantity}
              name="quantity"
            />

            <label htmlFor="descriptionInput">Detail Description:</label>
            <textarea id="descriptionInput" name="description" />

            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default MyToy;