import React from "react";
import "./style.css";

// const Card = () => {
//     return <div className="card"></div>
// }

// export default Card;

export default ({text, cnt}) => {
    return <div className="card">
        {text}
        <i class="bi bi-heart-fill" data-number={cnt}/>
    </div>
}