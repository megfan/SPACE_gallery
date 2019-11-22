import { GET_NASA } from './types'

const API_KEY = '7hKHW33u4OCdAlfMGQEt2fO5ULEXIT4eScrlCLDY';

export const getNASAimg = () => dispatch => {
    fetch(`https://images-api.nasa.gov/search?q=mercury&media_type=image`)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => dispatch({
            type: 'GET_NASA',
            payload: data.collection.items
            }))     
    
    
}