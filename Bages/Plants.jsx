import React from 'react'
import NavBttn from '../Component/NavBttn'
import { useNavigate } from 'react-router-dom';
import PLANT from '../Imgs/PLANT.png'
import PlantsList from '../Component/PlantsList';



export default function Plants() {
    const navigate = useNavigate();
    const handleNavigationn = () => {
        navigate('/plants');
    }
    const handleNavigation = () => {
        navigate('/');
    }

    return (
        <div>





            <div className="relative h-screen grid w-full ">




                <div className='flex mx-48 h-10 gap-60	'>
                    <NavBttn des=" ml-10 rounded-b-lg  text-zinc-600	 py-2 px-2 font-normal  text-xt   hover:scale-105"
                        message="HOME"
                        onClick={handleNavigation} />
                    <NavBttn des="rounded-b-lg  text-zinc-400	 py-2 px-2 font-normal  text-xt  bg-emerald-900 hover:scale-105 "
                        message="PLANTS"
                        onClick={handleNavigationn} /> </div>
                <div className='w-full flex felx-col'>


                    <div className="flex justify-center items-center w-full mt-10">
                        <PlantsList /></div>

                </div>


            </div>


            <div className='bg-gray-300 text-white p-8 w-60 min-h-full flex fixed right-0 top-0 buttom-0'>
       



                <img src={PLANT}
                    className="absolute"
                    style={{
                        top: '50%',  // المسافة من أعلى الحاوية
                        left: '50%', // المسافة من اليسار الحاوية
                        transform: 'translate(-50%, -50%)', // لتوسيط الصورة بالنسبة لموقعها المحدد
                        width: '650px', // عرض الصورة
                        height: 'auto'
                    }} />





            </div>



        </div>
    )
}
