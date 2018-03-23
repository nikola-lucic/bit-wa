import React from 'react';

const Card = (props) => {
  return (
    <div className="col s12 m4 l4">
      <div className="card">
          <div className="card-image">
            <img className="circle responsive-img" src={props.userPicture} alt="" />
          </div>
          <div className={props.gender === "female" ? "red lighten-5" : ""}>
          <div className="card-content">
            <div>
              <p>{props.userName}</p>
              <p>{props.email}</p>
              <p>{props.dataBirth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;