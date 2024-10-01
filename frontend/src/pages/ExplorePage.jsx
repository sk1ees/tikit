import {React, useState} from "react";
import menu from "../assets/icons/menu.svg";
import pfp from "../assets/icons/pfp.jpeg";
import {BorderedButton} from "../components/BorderedButton.jsx";  
import { CiLocationOn, CiCalendarDate, CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { HotelCard } from "../components/FilterCard.jsx";


// Dummy hotel data

const hotels = [
  {
    "id": 1,
    "name": "Oceanview Resort",
    "location": "Miami Beach, FL",
    "rating": 4.5,
    "price": 300,
    "points": 500,
    "imgUrl": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 2,
    "name": "Mountain Retreat",
    "location": "Aspen, CO",
    "rating": 4.8,
    "price": 450,
    "points": 620,
    "imgUrl": "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
  },
  {
    "id": 3,
    "name": "City Center Inn",
    "location": "New York, NY",
    "rating": 4.2,
    "price": 250,
    "points": 350,
    "imgUrl": "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
  },
  {
    "id": 4,
    "name": "Desert Oasis",
    "location": "Palm Springs, CA",
    "rating": 4.4,
    "price": 200,
    "points": 290,
    "imgUrl": "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
  },
  {
    "id": 5,
    "name": "Seaside Escape",
    "location": "Malibu, CA",
    "rating": 4.6,
    "price": 500,
    "points": 710,
    "imgUrl": "https://fariyas.com/wp-content/uploads/2023/08/Slide-2.jpg"
  },
  {
    "id": 6,
    "name": "Historic Hotel",
    "location": "Savannah, GA",
    "rating": 4.7,
    "price": 180,
    "points": 340,
    "imgUrl": "https://cdn.sanity.io/images/ocl5w36p/production/d82b5f532cf2b62e7dc32ee6ddccd6d8af074cba-3840x1860.jpg"
  },
  {
    "id": 7,
    "name": "Urban Lodge",
    "location": "Chicago, IL",
    "rating": 4.3,
    "price": 220,
    "points": 400,
    "imgUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518332246.jpg?k=852d9e83009ac082a7bb8366d5e27fb1f21801ea9cb6dde9c14e1aa99c49ea63&o=&hp=1"
  },
  {
    "id": 8,
    "name": "Riverfront Hotel",
    "location": "Nashville, TN",
    "rating": 4.1,
    "price": 190,
    "points": 280,
    "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/98/5c/37/hotel-exterior.jpg?w=1200&h=-1&s=1"
  },
  {
    "id": 9,
    "name": "Countryside Inn",
    "location": "Lancaster, PA",
    "rating": 4.0,
    "price": 160,
    "points": 240,
    "imgUrl": "https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg"
  },
  {
    "id": 10,
    "name": "Luxury Suites",
    "location": "Las Vegas, NV",
    "rating": 4.9,
    "price": 600,
    "points": 900,
    "imgUrl": "https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg"
  },
  {
    "id": 11,
    "name": "Tropical Paradise",
    "location": "Honolulu, HI",
    "rating": 4.8,
    "price": 700,
    "points": 800,
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGqRL6--DidDuzR1AbhW-BU9E4prtMiGtUA&s"
  },
  {
    "id": 12,
    "name": "Ski Lodge",
    "location": "Lake Tahoe, CA",
    "rating": 4.6,
    "price": 400,
    "points": 650,
    "imgUrl": "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I="
  }
]


const ExplorePage = () => {
  return <div className="w-full flex flex-col gap-6">
    <div className="flex justify-between items-center w-full px-28 mt-5">

      {/* navbar starts here */}
      <h1 className="text-4xl font-bold">TikiT</h1>
      <div className="flex gap-5 items-center">
        <BorderedButton name="Train" isActive={false}/>
        <BorderedButton name="Car Rent" isActive={false}/>
        <BorderedButton name="Accomodation" isActive={true}/>
        <BorderedButton name="Activities" isActive={false}/>
        <BorderedButton name="Tour" isActive={false}/>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-right">Lisa</h1>
          <p className="text-md">320 bonus points</p>
        </div>
        <div className="flex bg-[#f2f2f2] px-1 py-1 rounded-full gap-4">
          <img src={menu} alt="" className="w-5 ms-5"/>
          <img src={pfp} alt="" className="w-16 rounded-full border-4 border-[#E7E5EB]"/>
        </div>
      </div>
    </div>
    {/* navbar ends here */}

    {/* filter bar starts here */}
    <div className="w-full px-28">
      <div className="w-full flex justify-center bg-[#F2F2F2] rounded-xl py-4 gap-4">
      <button className="flex bg-white rounded-lg items-center text-xl font-semibold gap-3 px-5 py-3 w-1/3">
        <CiLocationOn />
        <p>Any Location</p>
      </button>
      <button className="flex bg-white rounded-lg items-center text-xl font-semibold gap-3 px-5 py-3 w-1/5">
        <CiCalendarDate />
        <p>Any Date</p>
      </button>
      <div className="flex bg-white rounded-lg items-center text-xl font-semibold gap-3 px-5 py-3 w-1/3">
        <IoPeopleOutline />
        <p>2 Adults | 0 Children</p>
      </div>
      <button className="flex bg-[#1D2030] rounded-lg items-center text-xl font-semibold gap-3 px-5 py-3 text-white w-1/7">
        <CiSearch />
        <p>Search</p>
      </button>
    </div>
    </div>
    {/* filter bar ends here */}

    {/* main section starts here */}
    <div className="w-full px-28">
      <div className="grid grid-cols-4">
        {/* Sidebar starts here */}
        <div className="h-screen pe-4">
          <div className="border-2 border-[#e5e5e5] rounded-xl h-screen px-6 py-8 flex flex-col gap-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Filter</h1>
              <button className="text-lg font-semibold text-blue-500">Reset all</button>
            </div>
            <hr className="border-1 rounded-full"/>
          </div>
        </div>
        {/* Sidebar ends here */}

        {/* Cards section starts here */}
        <div className="col-span-3 h-screen flex flex-col gap-3">
          <div className="flex justify-between text-lg font-medium">
            <p>{hotels.length} hotels found</p>
            <p>Sort by: <button>Best Match</button></p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {
              hotels.map((hotel) => (
                 <HotelCard name={hotel.name} location={hotel.location} rating={hotel.rating} price={hotel.price} points={hotel.points} imgUrl={hotel.imgUrl}/>
            ))
            }
            
          </div>
        </div>
        {/* Cards section ends here */}
      </div>
    </div>

  </div>;
};

export default ExplorePage;
