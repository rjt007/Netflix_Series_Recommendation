import React from 'react';

const Cards = (props)=>{
    return(<>
    <div className="maincard">
        <div className="imgcard">
            <img src={props.imgsrc} alt="series image" />
        <div className="contentcard"> 
            <h3 className="title">{props.title}</h3>
            <h2 className="sname">{props.sname}</h2>
            <a href={props.link} target="_blank">
            <button>Watch Now</button>
            </a>
        </div>
        </div>
    </div>
    </>)
}

export default Cards;