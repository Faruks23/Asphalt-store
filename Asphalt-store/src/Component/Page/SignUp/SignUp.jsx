import React, { useContext } from 'react';
 import './SignUp.css'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {NavLink, useNavigate} from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  const Navigate = useNavigate();
  

  useEffect(() => {
    document.title = "Asphalt |  SignUP"; // Set the new title here
  }, []);
   const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const PhotoUrl = form.PhotoUrl.value;
    const email = form.email.value;
     const password = form.password.value;
      //  if (!email) {
      //    toast("please enter your email or password");
      //    return;
      //  } else if (!password) {
      //    toast("please enter your password");
      //  }
      //  if (password.length < 6) {
      //    toast("Password must be at least 6 characters");
      //    return;
      //  }

     createUser(email, password)
       .then((result) => {
         updateUser(result.user, name, PhotoUrl);
         console.log(result);
         Navigate('/')
         toast.success("Login success ,happy shopping"); 
         form.reset()
        
       })
       .catch((error) => {
         
         const errorMessage = error.message;
         console.log(errorMessage);
           toast.success(errorMessage); 
         // ..
       });
  };
   const updateUser = (cruent, Name, photoURL) => {
     updateProfile(cruent, {
       displayName: Name,
       photoURL: photoURL,
     });
   };
  return (
    <form className="beautiful-form" onSubmit={handleSubmit}>
      <h1 className='text-center font-serif text-2xl text-blue-500'>Sign up now</h1>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Photo Url:</label>
        <input type="text" id="phot" name="PhotoUrl" required />
      </div>

      <NavLink to={"/login"}>
        <p className="mb-4 -mt-5  text-sm text-blue-400">
          have an account...?<span className="text-green-600">Login</span>
        </p>
      </NavLink>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;