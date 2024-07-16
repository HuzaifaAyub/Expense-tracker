import React, {children, createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//INITIAL STATE

const initialState={
    transections:[
      ]

}
// Create context
export const Globalcontext = createContext(initialState);


    

//provider component
export const GlobalProvider =({children})=>{
    const [state, dispatch] =useReducer(AppReducer, initialState);

    //action

    function deletetransection(id){
        dispatch({
            type:"DELETE_TRANSECTION",
            payload:id
        });}

        function addtransection(transection){
            dispatch({
                type:"ADD_TRANSECTION",
                payload:transection
            });}
    return(<Globalcontext.Provider value={{transections:state.transections, deletetransection , addtransection

    }}>
        {children }
    </Globalcontext.Provider>
    );
}
