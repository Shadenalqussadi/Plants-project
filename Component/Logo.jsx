import React from 'react'
import LogoPlants from '../Imgs/LogoPlant.png'
export default function Logo() {
  return (
    <div className='fixed top-0'>
      <div className='w-24 h-20 '>
        <img src={LogoPlants}
             style={{
                display: 'block',
                width: '60px',
                height: 'auto',
                margin: ' ',
                top: '0%',
                right:'0%'
              }} 
        />
      </div>
    </div>
  )
}