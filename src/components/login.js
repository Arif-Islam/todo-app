import React from 'react';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useLocation, useNavigate } from 'react-router-dom';
// import auth from '../firebase.init';

const login = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    // const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <p className='text-2xl text-center font-medium '>Please login to use this app!</p>
            <button onClick={() => signInWithGoogle()} className='bg-emerald-500 hover:bg-emerald-600 text-stone-100 font-medium w-44 mx-auto p-2'>Continue with Google</button> */}
        </div>
    );
};

export default login;