import React from 'react';
import User from '../entities/User'

class UsersData {
    
    fetchUserData() {
        return fetch('https://randomuser.me/api/?results=15')
            .then(function (response) {
                return response.json();
            })
            .then((result) => {
                const userList = result.results;
                return userList;
            })
            .then((userList) => {
                return userList.map((user) => {
                    return new User(user);
                })
            })
    }
}


export const usersData = new UsersData();