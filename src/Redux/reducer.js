// import React from 'react'
const initialState = []

const reducer = (state=initialState,action) => {
  switch(action.type){
    case "TOGGLE_FAV":
        const updatedStateWithToogle = state.map((res,index)=> {
            return index !== action.payload;
        })
        return updatedStateWithToogle
  }
}

export default reducer