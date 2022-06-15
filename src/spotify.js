// This link has all the infos regarding spotify apis:
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/" 
const clientID = "10164758d309489191acc9eee2688f12"

// These commands gets permission from Spotify to play,
// modify songs and get certain info about any user.
// We cant delete or add songs using these commands.
// Incorrect usage of these commands may result in account blocked.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
// scopes.join("%20") joins every object in scopes[]
// one after another with a space in between. %20 is the
// ASCI code for space.
// response_type=token gives us a feedback from Spotify
// whether the authentication was successful or not.
export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getHashFromUrl = ()=>{
    // if Url is, 
    // http://localhost:3000/#access_token=BQCrxeGnpRTDP4&token_type=Bearer&expires_in=3600
    // we go upto the first hash, which is after localhost:3000/ 
    return window.location.hash
    // By substringing we move 1 character right which
    // is now after hash (#)
    .substring(1)
    // We split from the initial postion until the next
    //  & character until the end of the URL which 
    // gives us: access_token=BQCrxeGnpRTDP4,
    // token_type=Bearer, expires_in=3600.
    .split("&")
    // Since we have 3 sets of string after splitting
    // on character &, reduce() will iterate 3 times
    .reduce((initial,item)=>{
        // item = access_token=BQCrxeGnpRTDP4
        // we split it into 2 at = character which is equal
        // to variable parts.
        // This goes on until all sets of strings are 
        // splitted, which gives us 3 sets of
        //  parts[0] and parts[1]        
        // Set 1 :  parts[0] = access_token and parts[1]= BQCrxeGnpRTDP4.
        // Set 2 :  parts[0] = token_type and parts[1]= bearer.
        // Set 3 :  parts[0] = expires_in and parts[1]= 3600.
        var parts = item.split("=");
        // Initial is set as an array by initial[]. 
        // As a result on,
        // 1st iteration : initial[access_token] = BQCrxeGnpRTDP4
        // 2nd iteration : initial[token_type] = Bearer
        // and so on.Finally initial sends an array of
        // mapped objects.
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}