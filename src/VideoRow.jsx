import React from 'react'
import "./VideoRow.css"

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image}></img>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow_headline">

                    {channel} . <span className="videoRow__subNumber">
                        {subs} Subscribers {views} views 
                        
                        </span> 
                        . {timestamp} 
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
