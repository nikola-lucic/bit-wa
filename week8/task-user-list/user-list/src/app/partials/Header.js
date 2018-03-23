import React from 'react';
import {Link} from "react-router-dom"
const Header = (props) => {
    return (
        <header>
            <nav className="nav-wrapper">
                <div className="container">
                    <a className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <form>
                                <div className="input-field">
                                    <i className="material-icons prefix white-text">search</i>
                                    <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete" value={props.value} onChange={props.handleSearch}/>
                                </div>
                            </form>
                        </li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><a onClick={props.handleClick}><i className="material-icons">{props.isGrid ? "list" : "view_module"}</i></a></li>
                        <li><a onClick={props.refresh} ><i className="material-icons">refresh</i></a></li>
                    </ul>
                </div>
            </nav>
        </header>


    )
}
export default Header

