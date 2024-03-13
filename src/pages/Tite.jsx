import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tite = () => {
  const navigate = useNavigate()
  const onPush=()=>{
      navigate('/important')  
  }
  return (
    <div className='main sad-bg'>
        <p className='sad-text madimi-one-regular'>
          Lo siento mucho, a la próxima lo conseguirás lo sé
        </p>
        <img src="/pika.gif" alt="" />
        <a href='https://vm.tiktok.com/ZMMrmbG4N/' target='_blank' className='a-sad poppins-regular'>
          Para que te sientas mejor😄
        </a>
        <button className='btn-1 poppins-regular' onClick={onPush}>
          Importante 
        </button>
    </div>
  )
}

export default Tite