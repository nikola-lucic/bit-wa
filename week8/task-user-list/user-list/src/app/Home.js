import React, { Component } from 'react';
import './App.css';
import Preloader from './partials/Preloader'
import Header from './partials/Header';
import { usersData } from './../services/UserData'
import UserList from './users/User-list';
import Grid from './users/Grid'

import PropTypes from "prop-types"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isGrid: false,
            searchResults: [],
            value: '',
            loader: true
        }
    }
    load() {

        this.setState({
            loader: true
        });

        usersData.fetchUserData()
            .then((data) => {

                localStorage.setItem('users', JSON.stringify(data));
                this.setState({
                    users: data,
                    searchResults: data,
                    loader: false
                })
            });

    }
    componentDidMount() {
        if (localStorage.getItem('users')) {
            const data = JSON.parse(localStorage.getItem('users'));
            this.setState({
                users: data,
                searchResults: data,
                loader: false
            })
        }
        else {
            this.load();
        }
        if(localStorage.getItem('isGrid')){
            this.setState({
                isGrid: JSON.parse (localStorage.getItem('isGrid'))
            })
        }
    }
    refresh = () => {
        this.load();
    }
    handleClick = () => {
        localStorage.setItem('isGrid', !this.state.isGrid)
        this.setState(prevState => ({
            isGrid: !prevState.isGrid
        }));
    }
    handleSearch = (event) => {
        this.setState({
            value: event.target.value,
            searchResults: this.state.users.filter(element => {
                return element.userName.indexOf(event.target.value.toLowerCase())
                    !== -1
            })
        })
    }

    handleComponentSwitch() {
        if (this.state.searchResults.length === 0) {
            return (
                <Preloader />
            )
        }
        return this.state.isGrid ? <Grid userData={this.state.searchResults} /> : <UserList userData={this.state.searchResults} />
    }

    render() {
        return (
            <React.Fragment>
                <Header handleClick={this.handleClick} refresh={this.refresh} handleSearch={this.handleSearch} value={this.state.value} />
                {this.state.loader ? <Preloader /> : this.handleComponentSwitch()}
            </React.Fragment>
        );
    }

}

export default Home;
