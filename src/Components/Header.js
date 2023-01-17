import React from 'react'
import ytLogo from '../Components/Images/youtube-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Comp.css'

const Header = () => {
  return (

    <div className='w-screen header'>
        <div className='flex items-center' style={{"display":"inline"}}>
            
            <img src={ytLogo} style={{"height":"40px"}} alt="youtube-img">
            </img>
        </div>
        <div className="flex " style={{"display":"inline","width":"35%","border":"0.5px solid black","height":"25px"}}>
            <input type='text' placeholder='Search' style={{"flex":"1","border":"0","outline":"none","borderRight":"1px solid black","paddingLeft":"10px","width":"370px","marginRight":"20px"
          ,"backgroundColor":"#fafafa"}}/>
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
