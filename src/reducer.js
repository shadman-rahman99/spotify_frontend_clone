// Any data from initialState has to be accessed through
// datalayer using react context api using the following 
// code : 
// const [{user,token}, dispatch] = useDataLayerValue().
// This gives us access to user Info and token.
export const initialState = {
    user:null,
    playlists : [], //User's playlist
    playing: false, //Song playing
    item: null,
    discover_weekly:[],
    // Temporarily storing for develpoment phase
    // token: 'BQDL-BfEy2cMVrDXxUz2Seuyt5A9MhqrnFvqbuaeTSvGM4P8RlrhiSZIoAqRfjGWiTzPatSJ4bCT4Ag3RQ0nqg8emzNcqpbKSQqrcyVEppkHcY3ar8wwtqRvj_7Pa349DWwFTw_zKPIg17e8LxTVqLbAzmJj4lrRnvpaQgzHCynqDPCZdfXD',
}

// state is whatever objects we have in initialState
// such as user, playlists and action is responsible for 
// setting up these objects.
// Action is of 2 types : type, payload/passed along data.
// Payload can be any type of data (dynamic object) 
// console log action for more....
const reducer = (state,action)=>{

    switch(action.type){
        case "SET_USER":
            return{
                // This keeps everything in state same
                // other than user
                ...state,
                // Logged in user is set to the user in state
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return{
                 ...state,
                playlists: action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            };
        default: 
        // If none of the conditions are applied
        // we return the unchanged state.
        return state
    }
};
export default reducer;