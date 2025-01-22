'use client';
import { COOKIE_KEY } from '@/constants/Consent';
import Cookies from 'js-cookie';
import React from 'react'
import { ActionButton } from '../button/ActionButton';
import { handlerAccept, handlerDecline } from '@/lib/utils/ConsentCookie';

// Make a consent component

export const ConsentBanner = () => {
    const [visible,setVisible] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(()=>{
        try {
            const consent = Cookies.get(COOKIE_KEY);               // get consent
            if (!consent) setVisible(true);
        } catch (error) {
            setError('Error occurred while retrieving cookie');
            console.error(error);
        }
    },[]);

    if (!visible) return null;
  return (
    <div 
    className={`${
        visible ? "flex" : "hidden"
      } fixed bottom-0 w-full bg-black bg-opacity-50 items-center justify-center z-50`}
    >
      <div className='bg-[#222] w-full rounded shadow-lg p-6'>
        <div className='mb-4'>
            <h2 className='text-lg font-bold'>
                Cookie Consent
            </h2>
        </div>
        <div className='mb-4'>
            <p>
                This website uses cookies to enhance your experience. By accepting, you agree to our use of cookies.
            </p>
            {error && (
                <div className='text-red-500 text-sm'>
                    {error}                             {/* Display error message */}
                </div>
            )}
        </div>
        <div className='flex justify-end space-x-2'>
            {/* Make decline Button */}
            <ActionButton 
                label="Decline" 
                onClick={()=>handlerDecline(setVisible,setError)} // set handler for decline button
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            />
            {/* Make accept Button */}
            <ActionButton 
                label="Accept" 
                onClick={()=>handlerAccept(setVisible,setError)} // set handler for accept button
                className="bg-black hover:bg-white text-white hover:text-black jover:border-black px-4 py-2 rounded"
            />
        </div>
      </div>
    </div>
  )
}
