import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Home = ()=>{
  const navigate = useNavigate()
  let push = ()=>{
    navigate('/explanation')
  }

return (
  <div className='main'>
       <p className='firsText poppins-regular'>
        Para una mejor experiencia míralo en una Computadora
       </p>
       <i className="fa-regular fa-face-laugh-beam icon1"></i>
       <button className='btn-1' onClick={push}>
        Listo
       </button>
      </div>
)
}
export default Home