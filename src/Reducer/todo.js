const reducerInfo=(state={counter:0},action)=>{
    switch(action){
        case 'INCREMENT':
        state.counter++;
        return state;
        case 'DECREMENT':
        if(state.counter >0){
            state.counter--;
        }
        return state;
        default :
        return state;
    }
};
export default reducerInfo;