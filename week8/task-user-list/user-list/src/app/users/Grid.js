import React from 'react';
import Card from './Card';

const Grid = (props) => {
    return (
        <main className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    {props.userData.map((user, i) => {
                        return <Card
                            key={i}
                            userName={user.userName}
                            userPicture={user.userPicture}
                            email={user.emailString}
                            dataBirth={user.birthString}
                            gender={user.gender}
                        />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Grid;
