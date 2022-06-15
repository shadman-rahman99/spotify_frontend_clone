import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    
    const [{playlists}, dispatch] = useDataLayerValue()
    
    return (
        <div className="sidebar">
            <div className="Logo">
                <img src="https://img.icons8.com/nolan/70/spotify.png"/>
                <h2>Spotify</h2>
            </div>
           <div>
                {/*passing in a rendering component <Icon/>, thus the argument
                starts with uppercase 'I'. This automatically makes a component
                with the name Icon, without any creation of a JS file like most other 
                components e.g. SidebarOption.js, Footer.js */}
                <SidebarOption Icon={HomeIcon} title="Home"/>   
                <SidebarOption Icon={SearchOutlinedIcon} title="Search"/>
                <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library"/>
                <br/>
                <strong className="sidebar_title">
                    PLAYLISTS
                </strong>
                <hr/>
                <SidebarOption title="Hip hop" />
                <SidebarOption title="R'nB" />
                <SidebarOption title="Rock" />

                {/* If items in playlist exist, we'll
                map/iterate through it and for each object we
                call <SidebarOption/> and display song name */}
                {playlists?.items?.map(playlist=>(
                    <SidebarOption title={playlist.name} />
                )) }
                {console.log("User's playlists: ",playlists) }
           </div>
        </div>
    )
}

export default Sidebar
