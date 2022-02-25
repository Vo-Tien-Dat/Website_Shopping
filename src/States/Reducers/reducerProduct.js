


const initState = [];

const reducer = (state = initState, action) =>{
    switch(action.type){
        
        case 'ADD_PRODUCT':
            
            let newState = [...state,{payload: action.payload}];
            state = newState;
            return state;

        case 'DELETE_PRODUCT':
            let prevState = [...state]; 
            prevState.splice(action.payload.index,1);
            state = prevState;
            return state; 
    }
    return state; 
}

export default reducer;