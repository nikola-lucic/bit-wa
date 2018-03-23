import React from 'react';
import User from '../../entities/User';

const UserItem = (props) => {
    return (
        <li className={props.gender === "female" ? "valign-wrapper collection-item avatar red lighten-5" : "valign-wrapper collection-item avatar"}>
            <img className="circle responsive-img" src={props.userPicture} alt=""/>
            <div>
            <p>{props.userName}</p>
            <p>{props.email}</p>
            <p>{props.dataBirth}</p>
            </div>
        </li>
    )
}
export default UserItem;