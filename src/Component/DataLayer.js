import React, 
    {createContext ,
    // useContext & useReducer are react hooks
    useContext, useReducer } from 'react'

    export const DataLayerContext = createContext();
    export const useDataLayerValue = ()=> useContext(DataLayerContext);
    // Passing in Children props even tho not sent from
    // index.js cause {children} = <App/>
    export const DataLayer = ({initialState, reducer,
    children}) =>(
        // The following is a code in index.js :
        // <DataLayer initialState reducer>
        // <App />
        // </DataLayer>
        // Here <App /> is a child component to <DataLayer> 
        // So {children} refers to <App /> 
        <DataLayerContext.Provider value={useReducer(reducer,initialState) }>
            {children}
        </DataLayerContext.Provider>
    );