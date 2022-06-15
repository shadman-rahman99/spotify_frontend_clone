import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Component/Login'
import Player from './Component/Player'
import { getHashFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './Component/DataLayer'

// spotify is an instance of SpotifyWebApi class.
// spotify is a super object which is responsible
// for interaction between the website and spotify.
const spotify = new SpotifyWebApi();

function App() {
  
  //dispatch passes data to DataLayer. user is one of
  //the objects in initialState in reducer.js that
  // we're recieving from DataLayer.
  // Flow of data through JS files in react context:
  // App->reducer->index->DataLayer
  const [{user, token}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getHashFromUrl();

    // For security reasons it is emptied from URL
    window.location.hash = "";
    if(hash.access_token){
      dispatch({
        type: "SET_TOKEN",
        token: hash.access_token, 
      })

      //spotify.setAccessToken() will set the token in 
      // spotify so we can have spotify services.
      spotify.setAccessToken(hash.access_token)

      //Sends the logged in user's info 
      spotify.getMe().then((user)=>{
        // dispatch sends everything as the argument, action,
        // to dispatch() function in reducer.js
        dispatch({
          type: "SET_USER",
          user : user,
        });
    });
      // Requesting spotify to send playlists of the 
      // logged in user
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(
        discover_weekly =>{
          dispatch({
            type:"SET_DISCOVER_WEEKLY",
            discover_weekly:discover_weekly,
          })
        }
      )
    }
  }, []);

  return (
    <div className="App">
      {
        // passing spotify object using prop-drilling
        token ? <Player spotify={spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
