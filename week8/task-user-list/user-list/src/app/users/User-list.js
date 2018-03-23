import React from 'react';
import UserItem from './User-items';

const UserList = (props) => {
    return (
        <main className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <ul className="collection">
                    {props.userData.map((user, i) => {
                            return <UserItem
                                key={i}
                                userName={user.userName}
                                userPicture={user.userPicture}
                                email={user.emailString}
                                dataBirth={user.birthString}
                                gender={user.gender}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default UserList;