import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className="sidebar">
        
           <SidebarRow  selected Icon={HomeIcon} title="Home"></SidebarRow>
           <SidebarRow  Icon={WhatshotIcon} title="Trending"></SidebarRow>
           <SidebarRow Icon={SubscriptionsIcon}  title="Subscription"></SidebarRow>
           <hr></hr>
         <SidebarRow   Icon={VideoLibraryIcon} title="Library"></SidebarRow>
           <SidebarRow  Icon={HistoryIcon} title="History"></SidebarRow>
           <SidebarRow Icon={OndemandVideoIcon}  title="Your Videos"></SidebarRow>
           <SidebarRow  Icon={WatchLaterIcon} title="Watch Later"></SidebarRow>
           <SidebarRow  Icon={ThumbUpIcon} title="Liked Videos"></SidebarRow>
           <SidebarRow Icon={ExpandMoreIcon}  title="Show More"></SidebarRow>
           <hr></hr>
           
         







        </div>
    )
}

export default Sidebar
