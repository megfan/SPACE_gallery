import { GET_NASA } from '../actions/types'

const getNASAimg = (state = [], action) => {
    switch(action.type){
        case GET_NASA:
            return [action.payload];
        default:
            return state;
    };
};
export default getNASAimg;