import React, { useContext } from 'react';
import './AddaToy.css'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';
const AddaToy = () => {
 const {user}=useContext(AuthContext)

  
  useEffect(() => {
    document.title = "Asphalt |  Add Toy"; // Set the new title here
  }, []);
  const handlUpdat = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyname.value;
    const seller = form.sellername.value;
    const sellerEmail = form.email.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const details = form.description.value;
    const photo = form.photoUrl.value;
    // console.log(name, sellerName, price, rating, quantity, description, category, sellerName);
    console.log(price);
    const UpdateData = {
      toyName,
      seller,
      price,
      rating,
      availableQuantity,
      sellerEmail,
      details,
      category,
      photo,
    };
   
    fetch(
      `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/allToy`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added Toy!");
      });

    console.log(UpdateData);
  }
 

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold font-serif text-center text-blue-500 mt-8 uppercase">
        Add Toy
      </h1>
      <hr />
      <div className="toy-form w-[95%] mx-auto flex justify-center border mt-16">
        <div className="toy-details px-5 py-5">
          <form
            onSubmit={handlUpdat}
            className="grid grid-cols-1 md:grid-cols-3 md:gap-12 w-[100%]"
          >
            <div className="form-group">
              <label for="toy-name">Name:</label>
              <input type="text" id="toy-name" name="toyname" required />
            </div>
            <div className="form-group">
              <label for="seller-name">Seller Name:</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                id="seller-name"
                name="sellername"
              />
            </div>
            <div className="form-group">
              <label for="seller-email">Seller Email:</label>
              <input
                type="email"
                id="seller-email"
                defaultValue={user?.email}
                name="email"
              />
            </div>
            <div className="form-group">
              <label for="sub-category">Sub-category:</label>
              <select id="sub-category" name="category" required>
                <option value="babyCar">babyCar</option>
                <option value="Strollers">Strollers</option>
                <option value="Strollers">walkers</option>
              </select>
            </div>
            <div className="form-group">
              <label for="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label for="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
            <div className="form-group">
              <label for="quantity">Available Quantity:</label>
              <input type="number" id="quantity" name="quantity" required />
            </div>

            <div className="form-group">
              <label for="quantity">Photo Url:</label>
              <input type="text" id="photoUrl" name="photoUrl" required />
            </div>

            <div className="form-group">
              <label for="description">Description:</label>
              <textarea id="description" name="description" required></textarea>
            </div>
            <button className=" uppercase rounded-lg" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddaToy;