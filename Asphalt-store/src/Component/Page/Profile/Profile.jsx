import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useEffect } from 'react';

const Profile = () => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    document.title = "Asphalt |  Profile"; // Set the new title here
  }, []);
  
  return (
    <div className="w-[50%] mx-auto mt-11">
      <div className="card w-[100%]
      bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <p className=' py-2 px-2 bg-blue-100 rounded-md shadow-lg'>Name:{ user?.displayName}</p>
          <p className=' py-2 px-2 bg-blue-100 rounded-md shadow-lg'>Email:{ user?.email}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;