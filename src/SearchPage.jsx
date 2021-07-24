import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import Divider from '@material-ui/core/Divider';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">

                <TuneIcon />
                <h2>Filter</h2>
            </div>

            <Divider />

            <ChannelRow

                image="data:image/jpeg;base64,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"
                channel="Unbox Therapy"
                verified
                subs="8Million"
                noOfVideos={382}
                description="Tech videos"

            />

            <Divider />


            <VideoRow
                views="1.4M"
                subs="5M"
                description="Gadgets"
                timestamp="2 days ago"
                channel="Unbox Theraphy"
                title="Best pc ever"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz76FsKN-B7eJuXpH4AgZ2mjioHe2nEnOaUw&usqp=CAU"

            />
            <VideoRow
                views="1.4M"
                subs="5M"
                description="Gadgets"
                timestamp="2 days ago"
                channel="Unbox Theraphy"
                title="Best pc ever"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz76FsKN-B7eJuXpH4AgZ2mjioHe2nEnOaUw&usqp=CAU"

            />
            <VideoRow
                views="1.4M"
                subs="5M"
                description="Gadgets"
                timestamp="2 days ago"
                channel="Unbox Theraphy"
                title="Best pc ever"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz76FsKN-B7eJuXpH4AgZ2mjioHe2nEnOaUw&usqp=CAU"

            />
            <VideoRow
                views="1.4M"
                subs="5M"
                description="Gadgets"
                timestamp="2 days ago"
                channel="Unbox Theraphy"
                title="Best pc ever"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz76FsKN-B7eJuXpH4AgZ2mjioHe2nEnOaUw&usqp=CAU"

            />
            <VideoRow
                views="1.4M"
                subs="5M"
                description="Gadgets"
                timestamp="2 days ago"
                channel="Unbox Theraphy"
                title="Best pc ever"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz76FsKN-B7eJuXpH4AgZ2mjioHe2nEnOaUw&usqp=CAU"

            />



        </div>
    )
}

export default SearchPage
