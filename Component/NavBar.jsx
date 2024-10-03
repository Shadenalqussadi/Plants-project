import React from 'react'
import NavBttn from './NavBttn'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate();
  const handleNavigationn = () => {
    navigate('/plants');
  }
  const handleNavigation = () => {
    navigate('/');
  }
  const handlleNavigation = () => {
    navigate('/ContactUs');
  }
  return (
    <div className='flex flex-row mx-48 h-10 gap-60		' >


      <NavBttn des=" ml-10 rounded-b-lg  text-zinc-400	 py-2 px-2 font-normal  text-xt bg-emerald-900   hover:scale-105  "
        message="HOME"
        onClick={handleNavigation} />
      <NavBttn des="rounded-b-lg  text-zinc-600	 py-2 px-2 font-normal  text-xt  hover:scale-105  "
        message="PLANTS"
        onClick={handleNavigationn} />
       


    </div>
  )
}
