import React, { useEffect, useRef, useState } from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';


const Celeb = () => {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const audioRef = useRef(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const navigate = useNavigate()
  const onPush=()=>{
      navigate('/important')  
  }
  return (
    <div className='main celeb'
    style={{backgroundColor}}>
        <div className='flex-celeb'>
           <img src="public/tibDance.gif" alt="" /> 
        <p className='title-word'>
          FELICIDADES!!!
        </p>
           <img src="public/bobDance.gif" alt="" /> 
        </div>
        <p className='poppins-regular text-3'>
          Sabia que lo conseguirías, te deseo mucha suerte y estudia mucho porque la nivelación tampoco es facíl, yo la fallé 2 veces 😢
          <br />
          <br />
          <a href="https://drive.google.com/drive/folders/1447AUgN8Ty7jH9eVvdbKUjVr9X__-MlV" className='a-ref' target='_blank'>
            Aquí hay unos complementos que te puede ayudar :)
          </a>
        </p>
        <button className='btn-1 poppins-regular' onClick={onPush}>
          Importante 
        </button>
    </div>
  )
}

export default Celeb