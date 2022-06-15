import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {

    const [{discover_weekly}, dispatch] = useDataLayerValue()
    // const discover_weekly_IMG = discover_weekly?.images[0].url
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img
                src={(discover_weekly?.images)?
                    discover_weekly?.images[0].url:
                    "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"}
                alt="image"/>
                {console.log("Discover weekly: ",discover_weekly)}
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2> 
                    <p> {discover_weekly?.description} </p>
                </div>
            </div>
            <div className="body_songs">
                    <div className="body_icons">
                        <PlayCircleIcon className="body_shuffle"/>
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon/>
                    </div>
                    {discover_weekly?.tracks?.items.map((item)=>(
                        <SongRow track={item.track} />
                    ))}
            </div>
        </div>
    )
}

export default Body
