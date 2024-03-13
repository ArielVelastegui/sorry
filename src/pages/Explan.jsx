import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Explan() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
 

  const handleClick = () => {
    setDisplay(!display);
  };
  const handleYes = () => {
    navigate('/celebration')
  } 
  const handleNo = () => {
    navigate('/tite')
  }
  let classy = `cont-flex ${display ? "show" : "hidden"}`;
  return (
    <div className="main exp"
    >
      <p className="exp-1 poppins-regular">
        <span>
          Hola, queria que sepas que no te envie ese sticker para burlarme o
          hacerte sentir mal, te respeto y te tengo mucho cariño como para
          hacerlo, simplemente es algo que me recoradaba a ti y a la carta que
          te habia escrito y no se porque pense que la recordarias porque nunca
          te la llegue a dar 😅
        </span>
      </p>
      <span className="flex-img">
        <img className="let-img" src="public/letter1.jpeg" alt="" />
        <img className="let-img" src="public/letter2.jpeg" alt="" />
      </span>
      <p>
        <span>
          Si de algo sirve aqui hay unas cuantas fotos mias que salgo 🤪
        </span>
      </p>

      <button onClick={handleClick}>
        <span>

        <i className="fa-solid fa-caret-down i-2"></i>
        </span>
      </button>
      <div className={classy}>
        <div className="cont-wrap-photos">
          <img
            className="child"
            src="public/photo1.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo2.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo3.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo4.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo5.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo6.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo7.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo8.jpeg"
            alt=""
          />
          <img
            className="child"
            src="public/photo9.jpeg"
            alt=""
          />
        </div>
        <div className="cupo-cont">
          <p className="exp-2 poppins-regular">
            Por cierto creo que conseguiste un cupo en la UTA verdad?
          </p>
          <span className="btns">
            <button className="yes-btn" onClick={handleYes}>
              Si (festejo)
            </button>
            <button className="no-btn" onClick={handleNo}>
              No (Tite)
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Explan;
