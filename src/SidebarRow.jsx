import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import "./SidebarRow.css"

function SidebarRow({title,Icon ,selected}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`} >
          <Icon className="sidebarRow__icons"></Icon>

           <h2  className="sidebarRow__title">
               {title}
               </h2> 
          

         
        </div>
    )
}

export default SidebarRow
