import React, {useState} from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from "react-router-dom";


function Header() {

    const[inputSearch,setInputSearch]=useState("")

    const handleInput=(e)=>{
        setInputSearch(e.target.value);
    }
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon></MenuIcon>
                <Link to="/">
                <img
                    className="header-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt=""></img>
          </Link>
            </div>
            {/* <h1>i am a header</h1> */}
            <div className="header-input">
                <input   type="text"
                 placeholder="search" 
                 value={inputSearch} 
                 onChange={handleInput} 
                
                />
                <Link to={`/search/${inputSearch}`}>

                <SearchIcon className="header_inputButton"></SearchIcon>

                </Link>
             
            </div>

            <div className="header_icons">
                < VideoCallSharpIcon className="header_icon"></VideoCallSharpIcon>
                <AppsIcon className="header_icon"></AppsIcon>
                <NotificationsIcon className="header_icon"></NotificationsIcon>
                <AccountBoxIcon></AccountBoxIcon>

            </div>




        </div>
    )
}

export default Header
