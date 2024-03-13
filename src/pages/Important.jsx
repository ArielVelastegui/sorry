import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Important = () => {
    const [padding, setPadding] = useState(1)
    const [yes, setYes] = useState(false)
    const navigate = useNavigate()
    const handleNo = ()=>{
        setPadding(padding+6)
        if (padding>38){
            navigate('/home')
        }
    }
    const handleYes = ()=>{
        setYes(true)
    }
  return (
    <div className='main'>
        <p className='text-end poppins-regular'>
            Estamos bien?, no tenia alguna mala intención simplemente mis habilidades sociales son nulas y pues pienso que la reacción va a ser otra,el comentario era completamente bien intencionado 
        </p>

        <img src="public/hamster.png" alt="" className={`hams ${yes?'hiddent':''}`}/>
        <img src="public/elmo.gif" alt="" className={`hams ${yes?'show':'hiddent'}`}/>

        <div className='cont-btns'>
            <button className='yes poppins-regular' style={{padding}} onClick={handleYes}>
                <a href="https://youtu.be/04854XqcfCY?si=TcP-MpwGnt5_AuQ4&t=38" target='_blank'>
                Sí, que sí
                </a>
            </button>
            <button className='no poppins-regular' onClick={handleNo} >
                {
                     `${padding==1?'no':padding==7?'PorFaaaaa😢':padding==13?'Te compro una coco-cola siii':padding==19?'Presiona si quieres que muera un gatito':padding==25?'Felicidades mataste un Gatito😭':padding==31?'Me tomo 2 dias hacer esta pagina:(':'💔'}` 
                }
            </button>
        </div>
        <p className='poppins-regular rcm-txt'>
            Recomendacion musical 😄
        </p>
        <div className='music-rcm poppins-regular'>
                <img src="public/musiPhoto.png" alt="" className='img-music'/>
                <a href="https://music.youtube.com/watch?v=hGvl2rfJBU0&list=PL3E8AgZq0xAaUPgt10E9t5dV6nEQt2iF0" target='_blank' className='a-music'>
                    Be more <br />
                    <span className='sub-text'>
                        Stephen Sanchez - Angel Face - 2003
                    </span>
                </a>
        </div>
    </div>
  )
}

export default Important