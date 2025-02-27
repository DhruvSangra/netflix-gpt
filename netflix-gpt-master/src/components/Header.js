import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
signOut(auth).then(() => {
  // Sign-out successful.

  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between h-20">
      <img className='w-36' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      
      {user && 
      <div className='flex px-10'>
        <img src={user.photoURL} alt="user-icon"/>
        <button className=" font-bold text-stone-100" onClick={handleSignOut}>(Sign Out)</button>
      </div>
}
    </div>
  )
}

export default Header
