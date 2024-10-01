import React from 'react'

import { CiLocationOn } from "react-icons/ci";
import Rating from '@mui/material/Rating';
export const HotelCard = (hotel) => {
  return (
    <div className='border rounded-2xl shadow-md'>
        <img src={hotel.imgUrl} alt="" className='rounded-t-2xl h-64 w-full'/>
        <div className='px-5 py-6 flex flex-col gap-2'>
            <h1 className='text-xl font-semibold'>{hotel.name}</h1>
            <div className='flex gap-3 items-center font-regular text-md text-[#6f6f6f]'>
                <CiLocationOn />
                <p>{hotel.location}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <Rating name="read-only" value={hotel.rating} readOnly />
                <p>{hotel.rating}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold text-[#1D2030]'>${hotel.price}<span className='text-lg text-[#6f6f6f]'>/night</span></p>
                <p className='text-[#1D2030] text-lg font-semibold'>+{hotel.points} points</p>
            </div>
        </div>
    </div>
  )
}
