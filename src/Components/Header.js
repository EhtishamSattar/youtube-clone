import React from 'react'
import ytLogo from '../Components/Images/youtube-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Comp.css'

const Header = () => {
  return (

    <div className='header'>
        <div className='flex items-center' style={{"display":"inline"}}>
            <img src={ytLogo} style={{"height":"40px","width":"100px"}} alt="youtube-img">
            </img>
        </div>
        <div className='flex items-center flex-1 border-gray-600 ' style={{"display":"inline"}}>
            <input placeholder='Search'>
            </input>
            <SearchIcon/>
        </div>
        <div className='right-part flex items-center' style={{"display":"inline"}}>
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <AccountCircleIcon/>
        </div>
    </div>
  )
}

export default Header
