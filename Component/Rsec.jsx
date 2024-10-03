import React, { useState } from 'react'
import PLANT from '../Imgs/PLANT.png'
import NavBttn from '../Component/NavBttn'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { SearchResultsList } from '../Component/SearchResultsList';
export default function Rsec() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/plants');
  };
   const [results, setResults ] =useState([]);

  return (


     <div className="relative h-screen flex ">
      <div className="w-full flex flex-col ">
        <h1 className="text-emerald-800 text-8xl mt-32 italic ml-3.5 ">
        Plant Make Life
         Better!
        </h1>
        <div className="mt-4 ">
        <NavBttn 
        des="pl-3.5 w-24 h-10 bg-gradient-to-r from-emerald-900 to-emerald-500 rounded-tl-lg rounded-br-lg text-white py-2 
        px-2 font-normal text-l ml-60 mt-5  hover:scale-105 shadow-md"
        message="Bay Plant"
        onClick={handleNavigation}
      />
      
      </div>
    </div>

    

      <div className='bg-gray-300 text-white p-8 w-1/4 min-h-full flex fixed right-0 top-0 buttom-0'>
      <div className='flex flex-col '>
        <SearchBar setResults ={setResults}/>
        
        <SearchResultsList results={results}/>
      </div>




      <img src={PLANT}
       className="absolute"
       style={{
         top: '50%',  // المسافة من أعلى الحاوية
         left: '0%', // المسافة من اليسار الحاوية
         transform: 'translate(-70%, -30%)', // لتوسيط الصورة بالنسبة لموقعها المحدد
         width: '450px', // عرض الصورة
         height: 'auto'}} />
   

    </div>
       
     </div>
  )
}
