import React, {createContext, useContext, useReducer} from "react";

// Preparacion para las capas de datos
export const StateContext = createContext();

// Envoltura de la aplicacion y proveedor de las capas de datos
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Obtener informacion de las capas de datos
export const useStateValue = () => useContext (StateContext);