import  {createStore} from 'redux';

const initialState = {
    counter : 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return{
                counter : state.counter+1
            }
        case 'SUB':
            return{
                counter : state.counter -1
            }
        case 'ADDWITH':
            return{
                counter : state.counter + action.num
            }
        
        default:
            return state
    }
}

const store = createStore(counterReducer);

export default store;